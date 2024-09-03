import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ProductCard = ({ product, addToCart, onClick }) => {
  return (
    <Card className="max-sm:w-[200px] max-sm:p-1 w-[282px] max-w-[282px] hover:border border-black p-2 !shadow-none rounded-lg">
      <CardActionArea className="hover:bg-transparent">
        <CardMedia
          component="img"
          className="max-sm:!w-[200px] max-sm:!h-[200px] !w-[264px] !h-[264px] rounded-lg"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="line-clamp-2 text-base cursor-pointer"
            gutterBottom
            variant="body2"
            component="div"
            onClick={onClick}
          >
            {product.name}
          </Typography>
          <Typography className="text-[#990e35] text-xl leading-none flex items-end gap-2">
            &#8377;{product.price}{" "}
            <span className="text-gray-400 text-sm line-through">
              &#8377;{product.oldPrice}
            </span>
          </Typography>
          <button onClick={addToCart} className="underline text-[#893caa]">
            Add to Cart
          </button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
