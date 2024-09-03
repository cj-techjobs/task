import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import {
  addProductToCart,
  setCurrentProductId,
} from "../../store/products/actions";
import { useDispatch, useSelector } from "react-redux";

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const relatedProducts = useSelector(
    (state) => state.products.relatedProducts
  );

  const onCardClick = (id) => {
    dispatch(setCurrentProductId(id));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-[90vw] mx-auto my-8">
      <p className="text-2xl font-medium pb-4">Related Products</p>
      <div className="flex max-sm:gap-1.5 gap-3 overflow-scroll">
        {[...relatedProducts, ...relatedProducts]?.map((product, index) => (
          <div key={index}>
            <ProductCard
              product={product}
              onClick={() => onCardClick(product?._id)}
              addToCart={() => dispatch(addProductToCart(product?._id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
