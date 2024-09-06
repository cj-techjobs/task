import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccordionComponent from "../../common/Accordion/accordian";
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
import RelatedProducts from "../related_products/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { getAPI,postAPI,deleteAPI } from "../../api/services";
import { APIS } from "../../api/endPoints";
import {
  addProductToFavourites,
  setProductDetails,
  setRelatedProducts,
} from "../../store/products/actions";
import { toast } from "react-toastify";
import { setCart } from "../../store/product/actions";



const ProductDetails = () => {
  //dummy json for product details
  const initialValues = {
    _id: "1",
    name: "Lip Balm With Donkey Milk",
    price: "450",
    image:
      "https://www.aindhinai.com/images/product/1705997840Lip-Balm-With-Donkey-Milk.jpg",
    oldPrice: "500",
    category: "Donkey Skin Care Products",
    size: "20 gm",
    specification:
      "Lip balm infused with Donkey milk. It keeps lips smooth and pleasantly flavored all day long while protection, hydrating, and nourishing them.",
    ingredients: "Donkey Milk Power , Shea Butter , Vitamin E , Wax",
    description_label: "Donkey Milk Soap-French Pink Clay",
    description_content:
      "This handmade organic product is made with carefully sourced ingredients from local producers. Using traditional methods, this product gets the perfect consistency and retains the authentic fragrance of the ingredients.",
    oils: "Avocado Oil , Rosehip Oil , Coconut Oil",
    fragrance: "Grapefruit essentail Oil",
  };

  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const currentProductId = useSelector(
    (state) => state.products.currentProductId
  );
  const [quantity, setQuantity] = useState(1);
  const fetchAPI = async () => {
    await getAPI(`${APIS.PRODUCT_DETAILS}/${currentProductId}`).then((res) => {
      dispatch(setProductDetails(res.data[0]));
    });
  };

  useEffect(() => {
    fetchAPI();
  }, [currentProductId]);

  const productDetails = useSelector((state) => state.products.productDetails);
  const favourites = useSelector((state) => state.products.favourites);

  const handleAddToCart = async () => {
    const result = await postAPI("/cart", {
      productId: productDetails?.Id || initialValues?._id,
      productName: productDetails?.name || initialValues?.name,
      category: productDetails?.category || initialValues?.category,
      price: productDetails?.price || initialValues?.price,
      description: productDetails?.description || initialValues?.description,
      qty: productDetails?.qty + 1 || 1,
      brand: productDetails?.brand || initialValues?.brand,
      rating: productDetails?.rating || initialValues?.rating,
      img: productDetails?.image || initialValues?.image,
    });

    //To handle the Cart Item Number
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    result.success == true
      ? toast.success("Added to Cart")
      : toast.error("Error");
  };

  const handleRemoveCartItem = async (id) => {
    console.log("id is =?",id)
    const result = await deleteAPI(`/cart/${id}`);
    
    //To handle the Cart Item Number
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    result.success == true
      ? toast.success("Item Removed Successfully")
      : toast.error("Error");
  };
  const addToFavourites = () => {
    dispatch(addProductToFavourites(currentProductId));
  };
  const details = (
    <div className="flex text-base flex-col gap-2">
      <span className="text-lg font-medium">
        {productDetails?.description_label || initialValues?.description_label}{" "}
      </span>
      {productDetails?.description_content ||
        initialValues?.description_content}
    </div>
  );
  const isAddedtoCart = cart.find((product) => product.productId === currentProductId);
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
              src={productDetails?.image || initialValues?.image}
              alt={productDetails?.name || initialValues?.name}
            />
            <img
              width={80}
              height={80}
              className="mt-7 rounded-lg border-2 border-gray-600"
              src={productDetails?.image || initialValues?.image}
              alt={productDetails?.name || initialValues?.name}
            />
          </div>
        </div>
        <div className="py-8 min-md:pl-6 max-sm:w-full w-[50%] flex gap-7 flex-col">
          <div>
            <p className="w-full text-[31px] font-semibold">
              {productDetails?.name || initialValues?.name}
            </p>
            <div className="font-semibold">
              Size: {productDetails?.size || initialValues?.size}
            </div>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-[#990e35] text-[39px] leading-none">
              &#8377;{productDetails?.price || initialValues?.price}{" "}
            </p>
            <span className="line-through text-[#4d4a4f] text-base">
              &#8377;{productDetails?.oldPrice || initialValues?.price}
            </span>
            <span className="text-[#990e35] text-base">
              {Math.ceil(
                ((productDetails?.oldPrice - productDetails?.price) * 100) /
                  productDetails?.oldPrice ||
                  ((initialValues?.oldPrice - initialValues?.price) * 100) /
                    initialValues?.oldPrice
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
              onClick={isAddedtoCart ? ()=>{handleRemoveCartItem(isAddedtoCart?._id)}  : handleAddToCart}
              className="bg-[#893caa] text-white w-full rounded-full"
            >
              {isAddedtoCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">Product Specification</p>
            <div className="flex gap-1 text-base">
              {productDetails?.specification || initialValues?.specification}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Category:</p>
            <div className="flex gap-1 text-gray-600">
              {productDetails?.category || initialValues?.category}
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
              details={productDetails?.ingredients || initialValues?.ingredients}
            />
            <AccordionComponent
              key={3}
              label={"Oils"}
              details={productDetails?.oils || initialValues?.oils}
            />
            <AccordionComponent
              key={4}
              label={"Fragrance"}
              details={productDetails?.fragrance || initialValues?.fragrance}
            />
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
