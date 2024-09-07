import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import PropTypes from "prop-types";
import { setCurrentProductId } from "../store/products/actions";
import "../components/productCard.css";

export const Products = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCardClick = (id) => {
    dispatch(setCurrentProductId(id));
    navigate(`product/${id}`);
  };
  return (
    <div className="container products">
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <ProductCard
              data={item}
              onCardClick={() => onCardClick(item?._id)}
            />
          </div>
        );
      })}
    </div>
  );
};
Products.propTypes = {
  data: PropTypes.any.isRequired,
};
