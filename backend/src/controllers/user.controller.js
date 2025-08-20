import { User } from "../models/user.model";
import jwt from "jsonwebtoken"
// import mongoose from "mongoose";

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    if(
        [name, email, password, role].some(field => field?.trim() == "")
    ){
        res.status(400).json({message: "All fields are required!"});
    }

    const existingUser = await User.findOne(
    {
        $or: [ { name }, { email } ]
    }
    )
    if(existingUser){
     res.status(409).json({ message: "User already exists, please login!" });   
    }
    const user = await User.create({
        name: name,
        email: email,
        password: password,
        role: role,
    })
    const createdUser = await User.findById(user?._id).select("-password -refreshToken");

    if(!createdUser){
        res.status(500).json({ message: "Something went wrong while registering the user!" })
    }
    
    return res.status(201).json(
   { message: "User registered successfully!" }
)
}