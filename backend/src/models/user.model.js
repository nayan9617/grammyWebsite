import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
 },
 email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
 },
 password: {
    type: String,
    required: [true, 'Password is required!']
 }
}, {timestamps: true});





export const User = mongoose.model("User", userSchema);