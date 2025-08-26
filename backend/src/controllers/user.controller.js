import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import mongoose from "mongoose";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => field?.trim() == "")) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({
      $or: [{ name }, { email }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists, please login!" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    const createdUser = await User.findById(user?._id).select(
      "-password -refreshToken",
    );

    if (!createdUser) {
      return res
        .status(500)
        .json({ message: "Something went wrong while registering the user!" });
    }

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Register Error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fillup all the fields!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({
          message: "User has not registered yet! please register first",
        });
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { registerUser, loginUser };
