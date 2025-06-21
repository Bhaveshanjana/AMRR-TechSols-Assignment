import productModel from "./../model/product.model.js";

export const createProductService = async ({
  name,
  type,
  description,
  price,
  coverImage,
  additionalImages,
}) => {
  if (!name || !description || !price) {
    throw new Error("Please provide all Fields");
  }
  const product = await productModel.create({
    name,
    type,
    description,
    price,
    coverImage,
    additionalImages,
  });
  return product;
};
