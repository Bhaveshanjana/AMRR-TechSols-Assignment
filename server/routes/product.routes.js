import express from "express";
import { body } from "express-validator";
import { createProduct } from "./../controller/product.controller.js";

const router = express.Router();

router.post(
  "/create",
  [
    body("name")
      .isString()
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters long"),
    body("description")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Description must be at least 5 characters long"),
    body("price").isNumeric().withMessage("Price must be a valid number"),
  ],
  createProduct
);

export default router;
