import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";


const app = express();
app.use(express.json());        
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //our frontend domain. i.e. localhost:8000
    cridentials: true,
  }),
);

app.get('/', (_, res)=>{
    res.send("Welcome to the backend of the grammy website!");
});

app.use('/api/user', userRoutes);

export { app };
