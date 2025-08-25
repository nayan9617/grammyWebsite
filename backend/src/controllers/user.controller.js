import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
// import mongoose from "mongoose";

const registerUser = async (req, res) => {
  try{
      const { name, email, password } = req.body;

    if(
        [name, email, password].some(field => field?.trim() == "")
    ){
       return res.status(400).json({message: "All fields are required!"});
    }

    const existingUser = await User.findOne(
    {
        $or: [ { name }, { email } ]
    }
    )
    if(existingUser){
     return res.status(409).json({ message: "User already exists, please login!" });   
    }
    const user = await User.create({
        name,
        email,
        password,
    })
    const createdUser = await User.findById(user?._id).select("-password -refreshToken");

    if(!createdUser){
       return res.status(500).json({ message: "Something went wrong while registering the user!" })
    }
    
    return res.status(201).json(
   { message: "User registered successfully!" }
)
  } catch(error){
    console.error("Register Error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export { registerUser };
