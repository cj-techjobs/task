import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  oldPrice: {
    type: String,
  },
  category: {
    type: String,
  },
  size: {
    type: String,
  },
  specification: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  description_label: {
    type: String,
  },
  description_content: {
    type: String,
  },
  oils: {
    type: String,
  },
  fragrance: {
    type: String,
  },
});

const Product = models.product || model("product", ProductSchema);

export default Product;
