import "./index.css";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { getAPI } from "../api/services";
import { deleteAPI } from "../api/services";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/product/actions";


export const Cart = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="cart md:col-span-8">
            <div className="btn-back py-2" onClick={() => navigate("/home")}>
              <i className="fa-solid fa-arrow-left"></i> Back to Shopping
            </div>
            <div className="cart-title">My Cart</div>

            {cart.map((item, index) => {
              return (
                <div key={index} className="my-4 py-4 shadow-sm">
                  <div className="cart-p-details flex flex-row flex-wrap pr-24 justify-between">
                    <div className="cart-left flex flex-row">
                      <div className="cart-p-img">
                        <img
                          src={item?.img}
                          height={"200px"}
                          width={"200px"}
                          alt="Product Image"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="cart-p-title mb-4">{item?.title}</div>
                        <div className="cart-p-brand mb-4">
                          By {item?.brand} | {item?.category}
                        </div>
                        <div className="cart-p-rating mb-4 ">
                          Rating:
                          <span className="font-bold">{item?.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="cart-right flex flex-col justify-between">
                      <div className="cart-p-price">
                        <span className="cart-p-price-1">
                          {"$ " + (item?.price - 8).toFixed(2)}
                        </span>
                        <br />
                        <span className="cart-p-price-2">
                          {"$ " + item?.price}
                        </span>
                      </div>
                      <div className="cart-p-qty"></div>
                      <div className="cart-p-btn-1">Save for Later</div>
                      <div
                        className="cart-p-btn-2"
                        onClick={() => {
                          handleRemoveCartItem(item._id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>Remove
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-summary shadow pl-10 md:col-span-4 mt-20 ">
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
