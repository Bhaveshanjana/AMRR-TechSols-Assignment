import { createProductService } from "../services/product.service.js";
import { validationResult } from "express-validator";
import { v2 as cloudinary } from "cloudinary";

export const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, price, description, type } = req.body;
  if (!name || !description || !price || !type) {
    return res.status(400).json({ errors: "All fields are required" });
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ errors: "No file uploaded" });
  }

  const { coverImage, additionalImages } = req.files;

  console.log(req.files);
  
  const formats = ["image/png", "image/jpeg"];

  if (!coverImage || !additionalImages) {
    return res.status(400).json({
      error: "Please upload both coverImage and additionalImages",
    });
  }
  // Validate cover image format
  if (!formats.includes(coverImage.mimetype)) {
    return res.status(400).json({
      error: "Invalid cover image format. Only JPEG and PNG are supported.",
    });
  }

  // Handle multiple or single additionalImages
  const additionalImagesArray = Array.isArray(additionalImages)
    ? additionalImages
    : [additionalImages];

  // Validate each additional image
  for (let img of additionalImagesArray) {
    if (!formats.includes(img.mimetype)) {
      return res.status(400).json({
        error: `Invalid additional image format (${img.name}). Only JPEG and PNG are supported.`,
      });
    }
  }

  // 3. Upload cover image
  const coverRes = await cloudinary.uploader.upload(coverImage.tempFilePath);

  if (!coverRes || coverRes.error) {
    return res
      .status(400)
      .json({ errors: "Error uploading cover image to Cloudinary" });
  }

  // 4. Upload additional images
  let uploadedAdditionalImages = [];

  if (additionalImages) {
    const images = Array.isArray(additionalImages)
      ? additionalImages
      : [additionalImages];

    for (let img of images) {
      if (!formats.includes(img.mimetype)) {
        return res
          .status(400)
          .json({ errors: "Additional image format not supported" });
      }

      const upload = await cloudinary.uploader.upload(img.tempFilePath);
      uploadedAdditionalImages.push({
        public_id: upload.public_id,
        url: upload.secure_url,
      });
    }
  }

  // 5. Create product in DB
  const product = await createProductService({
    name,
    type,
    price,
    description,
    coverImage: {
      public_id: coverRes.public_id,
      url: coverRes.secure_url,
    },
    additionalImages: uploadedAdditionalImages,
  });

  return res.status(200).json({ product });
};
