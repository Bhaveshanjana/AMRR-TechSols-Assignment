import express from "express";
import { body } from "express-validator";

const router = express.Router();

router.post("/create", [
  body("name")
    .isString()
    .isLength({ min: 2 })
    .withMessage("Please provide an vaild name"),
  body("description")
    .isString()
    .isLength({ min: 5 })
    .withMessage("Please provide an vaild description"),
  body("price").isInt().isString().withMessage("Please provide an vaild price"),
  body("coverImage").isString().withMessage("Please Provide an Coverimage"),
  body("additionalImages")
    .isString()
    .withMessage("Please Provide an additionalImages"),
]);

export default router;
