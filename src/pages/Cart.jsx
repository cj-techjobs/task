import "./index.css";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { getAPI, deleteAPI } from "../api/services";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/product/actions";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Function to get the cart data
  const getProduct = async () => {
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    // Calculate total price of all products in the cart
    const totalPrice = cartData?.data.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));
  };

  // Function to remove item from cart
  const handleRemoveCartItem = async (id) => {
    const result = await deleteAPI(`/cart/${id}`);
    getProduct();
    result.success === true
      ? toast.success("Item Removed Successfully")
      : toast.error("Error");
  };

  // Fetch cart data on component load
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="cart lg:col-span-8">
            <div
              className="btn-back py-2 cursor-pointer"
              onClick={() => navigate("/home")}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Shopping
            </div>
            <div className="cart-title text-2xl font-bold mb-4">My Cart</div>

            {/* Map through cart items */}
            {cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="my-4 p-4 shadow-sm flex flex-col sm:flex-row justify-between items-center sm:items-start"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start w-full sm:w-auto">
                    <div className="cart-p-img w-full sm:w-auto sm:mr-4">
                      <img
                        src={item?.img}
                        height={"200px"}
                        width={"200px"}
                        className="w-full sm:w-auto h-auto max-w-full object-cover"
                        alt="Product Image"
                      />
                    </div>
                    <div className="flex flex-col text-center sm:text-left mt-4 sm:mt-0">
                      <div className="cart-p-title text-lg font-bold mb-2">
                        {item?.title}
                      </div>
                      <div className="cart-p-brand mb-2">
                        By {item?.brand} | {item?.category}
                      </div>
                      <div className="cart-p-rating mb-2">
                        Rating:{" "}
                        <span className="font-bold">{item?.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0">
                    <div className="cart-p-price text-center sm:text-right">
                      <span className="cart-p-price-1 block text-xl font-bold text-green-600">
                        {"$ " + (item?.price - 8).toFixed(2)}
                      </span>
                      <span className="cart-p-price-2 line-through text-gray-500">
                        {"$ " + item?.price}
                      </span>
                    </div>
                    <div className="cart-p-qty mt-2 text-center sm:text-right"></div>
                    <div className="cart-p-btn-1 text-blue-500 cursor-pointer mt-2 text-center sm:text-right">
                      Save for Later
                    </div>
                    <div
                      className="cart-p-btn-2 text-red-500 cursor-pointer mt-2 text-center sm:text-right"
                      onClick={() => handleRemoveCartItem(item._id)}
                    >
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-summary shadow p-4 lg:col-span-4 mt-10 lg:mt-0">
            <h3 className="summary-title pb-4 font-bold text-3xl text-center lg:text-left">
              Order Summary
            </h3>
            <div className="summary-des pb-4 text-center lg:text-left">
              This order qualifies for Free Shipping!
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>Item Sub Total</div>
              <div>{totalPrice}</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>
                Deliver to <span className="font-bold">India 123456</span>
              </div>
              <div>Free</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>Estimated Tax</div>
              <div>$ 38</div>
            </div>
            <hr />
            <div className="pt-4 pb-2 flex flex-row justify-between">
              <div className="font-bold">Total</div>
              <div>$ {(totalPrice * 1 + 38).toFixed(2)}</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>You Save</div>
              <div>$ 18</div>
            </div>
            <div className="btn-checkout bg-blue-500 text-white py-2 px-4 rounded-md mt-4 text-center cursor-pointer">
              Proceed to Checkout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
