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
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

app.use("/product/create", productRouter);

app.get("/", (req, res) => {
  res.json("hello there");
});

//config the cloud for img
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export default app;
