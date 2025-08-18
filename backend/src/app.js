import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //our frontend domain. i.e. localhost:8000
    cridentials: true,
  }),
);

app.get('/', (_, res)=>{
    res.send("Welcome to the backend of the grammy website!");
});

export { app };
