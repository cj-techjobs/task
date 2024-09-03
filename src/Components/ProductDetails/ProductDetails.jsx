import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccordionComponent from "../../Common/Accordion/Accordion";
import {
  Facebook,
  Linkedin,
  Minus,
  Pinterest,
  Plus,
  Twitter,
  Whatsapp,
} from "../../assets";
import "./product-details.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { getAPI } from "../../api/services";
import { APIS } from "../../api/endpoints";
import {
  addProductToCart,
  addProductToFavourites,
  setProductDetails,
  setRelatedProducts,
} from "../../store/products/actions";

const ProductDetails = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const currentProductId = useSelector(
    (state) => state.products.currentProductId
  );
  const [quantity, setQuantity] = useState(1);
  const fetchAPI = async () => {
    await getAPI(APIS.PRODUCT_DETAILS, {
      id: currentProductId,
    }).then((res) => {
      dispatch(setProductDetails(res.data[0]));
    });
    await getAPI(APIS.RELATED_PRODUCTS, {
      id: currentProductId,
    }).then((res) => {
      dispatch(setRelatedProducts(res.data));
    });
  };

  useEffect(() => {
    fetchAPI();
  }, [currentProductId]);

  const productDetails = useSelector((state) => state.products.productDetails);
  const favourites = useSelector((state) => state.products.favourites);

  const addToCart = () => {
    dispatch(addProductToCart(currentProductId));
  };
  const addToFavourites = () => {
    dispatch(addProductToFavourites(currentProductId));
  };
  const details = (
    <div className="flex text-base flex-col gap-2">
      <span className="text-lg font-medium">
        {productDetails?.description_label}{" "}
      </span>
      {productDetails?.description_content}
    </div>
  );
  const isAddedtoCart = cart.find((id) => id === currentProductId)
  const increaseQuantity = () => setQuantity(parseInt(quantity) + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);
  return (
    <div>
      <div className="flex relative mx-auto flex-row max-sm:flex-col w-[90vw]">
        <div className="max-sm:w-full w-[50%] py-8 min-md:pr-6">
          <div className="flex flex-col items-center sticky top-[8px]">
            <img
              width={"100%"}
              className="max-h-[565px] max-w-[565px]"
              src={productDetails?.image}
              alt={productDetails?.name}
            />
            <img
              width={80}
              height={80}
              className="mt-7 rounded-lg border-2 border-gray-600"
              src={productDetails?.image}
              alt={productDetails?.name}
            />
          </div>
        </div>
        <div className="py-8 min-md:pl-6 max-sm:w-full w-[50%] flex gap-7 flex-col">
          <div>
            <p className="w-full text-[31px] font-semibold">
              {productDetails?.name}
            </p>
            <div className="font-semibold">Size: {productDetails?.size}</div>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-[#990e35] text-[39px] leading-none">
              &#8377;{productDetails?.price}{" "}
            </p>
            <span className="line-through text-[#4d4a4f] text-base">
              &#8377;{productDetails?.oldPrice}
            </span>
            <span className="text-[#990e35] text-base">
              {Math.ceil(
                ((productDetails?.oldPrice - productDetails?.price) * 100) /
                  productDetails?.oldPrice
              )}
              % Off
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex">
              <button
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className="rounded-s-full max-sm:p-1 p-2 border border-gray-800"
              >
                <img width={44} src={Minus} alt="minus" />{" "}
              </button>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border-y w-10 text-center border-gray-800"
              />
              <button
                onClick={increaseQuantity}
                className="rounded-e-full max-sm:p-1 p-2 border border-gray-800"
              >
                <img width={44} src={Plus} alt="plus" />{" "}
              </button>
            </div>
            <div
              onClick={addToFavourites}
              className="cursor-pointer rounded-full max-sm:p-1 p-3 border border-[#893caa]"
            >
              {favourites?.find((id) => id === currentProductId) ? (
                <FavoriteIcon className="max-sm:!w-6 max-sm:!h-6 !w-8 !h-8 text-[#893caa]" />
              ) : (
                <FavoriteBorderIcon className="max-sm:!w-6 max-sm:!h-6 !w-8 !h-8 text-[#893caa]" />
              )}
            </div>
            <button
              onClick={addToCart}
              className="bg-[#893caa] text-white w-full rounded-full"
            >
              {isAddedtoCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">Product Specification</p>
            <div className="flex gap-1 text-base">
              {productDetails?.specification}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Category:</p>
            <div className="flex gap-1 text-gray-600">
              {productDetails?.category}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-xl">Share your friends</p>
            <div className="flex gap-2 text-gray-600">
              <img width={40} src={Facebook} alt="facebook" />
              <img width={40} src={Twitter} alt="twitter" />
              <img width={40} src={Pinterest} alt="pinterest" />
              <img width={40} src={Linkedin} alt="linkedin" />
              <img width={40} src={Whatsapp} alt="whatsapp" />
            </div>
          </div>
          <hr className="text-gray-300" />
          <div id="product-overview" className="">
            <p className="text-3xl font-semibold">Product Overview</p>
          </div>
          <div className="flex flex-col gap-2">
            <AccordionComponent
              key={1}
              label={"Description"}
              details={details}
            />
            <AccordionComponent
              key={2}
              label={"Ingredients"}
              details={productDetails?.ingredients}
            />
            <AccordionComponent
              key={3}
              label={"Oils"}
              details={productDetails?.oils}
            />
            <AccordionComponent
              key={4}
              label={"Fragrance"}
              details={productDetails?.fragrance}
            />
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
