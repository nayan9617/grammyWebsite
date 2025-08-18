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

userSchema.pre("save", async function(next){
   if(!this.Modified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10);
   next();
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.hash(password, this.password);
}





export const User = mongoose.model("User", userSchema);