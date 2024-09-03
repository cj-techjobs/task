import { Router } from "express";
import {
  ProductDetailsController,
  RelatedProductsController,
} from "../controller/ProductsController.js";
const ProductsRoutes = Router();

ProductsRoutes.get("/product-details", ProductDetailsController);
ProductsRoutes.get("/related-products", RelatedProductsController);

export default ProductsRoutes;
