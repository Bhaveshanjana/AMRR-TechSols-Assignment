import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



export default app;