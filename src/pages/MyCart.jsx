import "./index.css";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { getAPI } from "../api/services";
import { deleteAPI } from "../api/services";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/product/actions";

export const MyCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const getProduct = async () => {
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    const totalPrice = cartData?.data.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));
  };

  const handleRemoveCartItem = async (id) => {
    const result = await deleteAPI(`/cart/${id}`);
    getProduct();
    result.success == true
      ? toast.success("Item Removed Successfully")
      : toast.error("Error");
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="cart flex flex-col lg:col-span-8 ">
            <div
              className="btn-back py-2 underline px-4 cart-p-btn-1"
              onClick={() => navigate("/home")}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Shopping
            </div>

            <div className="flex justify-between items-center px-4">
              <div className="cart-title flex gap-2 items-baseline">
                My Cart <span className="text-sm">({cart.length} items):</span>
              </div>

              <div className="font-bold  md:hidden">${totalPrice}</div>
            </div>
            <span className="text-gray-600 px-4 md:hidden">
              This order qualifies for free Shipping!
            </span>

            <div className="btn-checkout m-4  md:hidden">Proceed to Checkout</div>

            {cart.map((item, index) => {
              return (
                <div key={index} className="my-4 py-4 shadow-sm">
                  <div className="cart-p-details flex flex-row flex-wrap md:flex-nowrap pr-24 justify-between">
                    <div className="w-full grid container-template gap-4">
                      <div className="product-img w-[122px] h-[122px] md:w-[200px] sm:h-[200px]">
                        <img
                          src={item?.img}
                          height={"200px"}
                          width={"200px"}
                          alt="Product Image"
                        />
                      </div>
                      <div className="flex gap-2 flex-col w-full">
                        <div className="flex flex-wrap justify-between gap-2 md:gap-4">
                          <div className="flex flex-col">
                            <div className="cart-p-title ">{item?.title}</div>
                            <div className="cart-p-brand ">
                              By {item?.brand} | {item?.category}
                            </div>
                          </div>
                          <div className="cart-p-price md:text-right">
                            <span className="cart-p-price-1 font-semibold ">
                              {"$ " + (item?.price - 8).toFixed(2)}
                            </span>
                            <br />
                            <span className="cart-p-price-2 ">
                              {"$ " + item?.price}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4">
                          <div className="cart-p-rating">
                            Rating:
                            <span className="font-bold">{item?.rating}</span>
                          </div>
                          <div className="px-4 py-2 border-2">quantity</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-between gap-2 sm:gap-4 col-start-2 col-end-3">
                        <div className="flex flex-col gap-2">
                          <div>
                            <span className="border-2">2-Day Delivery</span>
                          </div>
                          <div>
                            <span>Free-Shipping - Get it by Fri. Sep 6 </span>
                          </div>
                        </div>

                        <div className="md:text-right flex flex-col gap-2">
                          <div className="cart-p-btn-1 underline">
                            Save for Later
                          </div>
                          <div
                            className="cart-p-btn-2 underline"
                            onClick={() => {
                              handleRemoveCartItem(item._id);
                            }}
                          >
                            <i className="fa-solid fa-trash-can "></i>Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-start-2 col-end-3 p-4 flex flex-col gap-4 bg-[#f5f5f5]">
                        <div className="flex gap-4 justify-between items-center ">
                          <div>
                            <span>
                              <i className="fa-solid fa-wrench"></i>
                            </span>
                            <span>
                              <span className="underline ml-2 cart-p-btn-1">
                                Professional Assembly
                              </span>{" "}
                              for $56.99
                            </span>
                          </div>
                          <span className="underline cart-p-btn-1">
                            <i className="fa-solid fa-cart-plus"></i>Add
                          </span>
                        </div>

                        <div className="flex gap-4 justify-between items-center ">
                          <div>
                            <span>
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span>
                              <span className="underline ml-2 cart-p-btn-1">
                                Protection Plan
                              </span>{" "}
                              for $7.99
                            </span>
                          </div>
                          <span className="underline cart-p-btn-1">
                            <i className="fa-solid fa-cart-plus"></i>Add
                          </span>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-summary shadow pl-10 lg:col-span-4 mt-20 ">
            <h3 className="summary-title pb-4 font-bold text-3xl">
              Order Summary
            </h3>
            <div className="summary-des pb-4">
              This order qualifies for Free Shipping!
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>Item Sub Total</div>
              <div>{totalPrice}</div>
            </div>
            <div className="pb-2 flex flex-row justify-between">
              <div>
                Deliver to <span className="font-bold">India 123456</span>{" "}
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
            <div className="btn-checkout">Proceed to Checkout</div>
          </div>
        </div>
      </div>
    </>
  );
};