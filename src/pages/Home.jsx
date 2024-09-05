import { Navbar } from "../components/Navbar";
import { SubNav } from "../components/SubNav";
import { Products } from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/product/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("https://dummyjson.com/products/");
    dispatch(setProducts(result?.data?.products));

    const categories = [
      "All",
      ...new Set(result?.data?.products.map((product) => product.category)),
    ];
    setCategories(categories);
  };

  useEffect(() => {
    getProducts();
  },[]);

  const filterProducts = (category) => {
    const result =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);
    setSelectedProducts(result);
  };

  return (
    <div>
      <Navbar />
      <SubNav data={categories} handleFilter={filterProducts} />
      <Products
        data={selectedProducts.length > 0 ? selectedProducts : products}
      />
    </div>
  );
};
