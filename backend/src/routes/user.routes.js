import express from "express"
import { registerUser } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);

export default userRoutes;