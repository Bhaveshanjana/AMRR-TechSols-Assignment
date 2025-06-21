import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import cookieParser from "cookie-parser";
import ConnectTodb from "./db/db.js";

import productRouter from "./routes/product.routes.js";

const app = express();
dotenv.config();

ConnectTodb();

app.use(cookieParser());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.json("hello there");
});

//config the cloud for img
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default app;
