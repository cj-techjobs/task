import mongoose from "mongoose";
import Product from "../model/Product.js";

export const ProductDetailsController = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await Product.find({ _id: id });
    if (response?.length > 0) {
      res.json({
        data: response,
        status: 200,
        message: "Product Details retrieved successfully",
      });
    } else {
      res.json({
        data: [],
        status: 201,
        message: "Opps, No product found!",
      });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: "Error in fetching product details!",
    });
  }
};

export const RelatedProductsController = async (req, res) => {
  try {
    const { id } = req.query;
    const Products = await Product.find();
    const relatedProducts = Products.filter((item) => item?.id !== id);
    res.json({
      data: relatedProducts,
      status: 200,
      message: "Related products retrieved successfully!",
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "Error in fetching related products!",
    });
  }
};
