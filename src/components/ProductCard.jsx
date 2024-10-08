import "./productCard.css";
import PropTypes from "prop-types";
import { postAPI, getAPI } from "../api/services";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCart } from "../store/product/actions";

export const ProductCard = ({ data, onCardClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    const result = await postAPI("/cart", {
      productId: data?._id,
      productName: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
      qty: 1,
      brand: data.brand,
      rating: data.rating,
      img: data.image,
    });

    // Refresh cart data
    const cartData = await getAPI("/cart");
    dispatch(setCart(cartData?.data));

    result.success
      ? toast.success("Added to Cart")
      : toast.error("Error Adding Item");
  };

  return (
    <div className="p-card">
      <div className="p-card-img" onClick={onCardClick}>
        <img src={data?.image} className="max-h-full" alt="product image" />
      </div>
      <div className="p-card-text">
        <div className="p-card-badge">{data?.category}</div>
        <h3 role="presentation" onClick={onCardClick} className="p-card-name">
          {data?.name}
        </h3>
        <h4 className="p-card-price">
          <small className="p-card-price-1">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {(data?.price * 1 + 8).toFixed(2)}
          </small>
          &nbsp;
          <span className="p-card-price-2">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {data?.price}
          </span>
        </h4>
      </div>
      <div className="p-card-btn">
        <div className="p-card-btn-left" onClick={handleAddToCart}>
          <i className="fa-solid fa-basket-shopping"></i>
          <span>Add to Cart</span>
        </div>
        <div className="p-card-btn-right">
          <i className="fa-regular fa-eye"></i>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.any.isRequired,
  onCardClick: PropTypes.func,
};
