import { Navbar } from "../components/Navbar";
import { SubNav } from "../components/SubNav";
import { Products } from "./Products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/product/actions";
import { getAPI } from "../api/services";

export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const productsData = await getAPI('/products');
    dispatch(setProducts(productsData?.data));
    const categories = [
      "All",
      ...new Set(productsData?.data.map((product) => product.category)),
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
