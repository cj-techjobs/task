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
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0); // New state for tax
  const navigate = useNavigate();

  // Function to get the cart data
  const getProduct = async () => {
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    // Calculate subtotal price of all products in the cart
    const subtotal = cartData?.data.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setSubtotalPrice(subtotal.toFixed(2));

    // Calculate 9% tax based on the subtotal
    const tax = subtotal * 0.09;
    setTaxAmount(tax.toFixed(2));

    // Assuming you have a fixed shipping cost or other fixed amounts to be added
    const shippingCost = 0; // Free shipping for now

    // Calculate total price: subtotal + tax + shippingCost
    const total = subtotal + tax + shippingCost;
    setTotalPrice(total.toFixed(2));
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
                  className="my-4 p-4 bg-white rounded-md shadow-md md:shadow-sm flex flex-col lg:flex-row justify-between items-center lg:items-start"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start w-full">
                    <div className="cart-p-img w-full lg:w-48 lg:mr-4 border bg-slate-100 rounded-lg">
                      <img
                        src={item?.img}
                        className="w-full h-[300px] md:h-auto object-contain"
                        alt="Product Image"
                      />
                    </div>
                    <div className="flex flex-col text-left lg:mt-0">
                      <div className="cart-p-title text-lg font-bold mb-2">
                        {item?.title}
                      </div>
                      <div className="cart-p-brand mb-2">
                        By {item?.brand} | {item?.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end justify-between w-full lg:w-auto lg:mt-0">
                    <div className="flex items-end min-w-max text-center lg:text-right">
                      <span className=" text-xl font-bold text-green-600 mr-2 lg:mr-4">
                        {"$ " + (item?.price - 8).toFixed(2)}
                      </span>
                      <span className="cart-p-price-2 line-through text-gray-500">
                        {"$ " + item?.price}
                      </span>
                    </div>

                    <div className="flex mt-4 items-center gap-4">
                      <div className="cart-p-btn-1 text-white bg-[#215D38] cursor-pointer  px-4 py-2 rounded-full min-w-max">
                        Save for Later
                      </div>
                      <div
                        className="cart-p-btn-2 text-white bg-red-500 cursor-pointer text-center rounded-full lg:text-right px-4 py-2 min-w-max"
                        onClick={() => handleRemoveCartItem(item._id)}
                      >
                        <i className="fa-solid fa-trash-can"></i> Remove
                      </div>
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
              <div>{"$ " + subtotalPrice}</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>
                Deliver to <span className="font-bold">India 123456</span>
              </div>
              <div>Free</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>Estimated Tax (9%)</div>
              <div>{"$ " + taxAmount}</div>
            </div>
            <hr />
            <div className="pt-4 pb-2 flex flex-row justify-between">
              <div className="font-bold">Total</div>
              <div>{"$ " + totalPrice}</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>You Save</div>
              <div>$ 0</div>
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
