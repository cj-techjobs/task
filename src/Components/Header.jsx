import React from "react";
import Cart from "../assets/ecommerce.png";
import Profile from "../assets/user-interface.png";
import Logo from "../assets/Logo.svg";
import Search from "../assets/search.png";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

const Header = () => {
  const cart = useSelector((state) => state.products.cart);
  return (
    <div className="h-[88px] mx-5 min-md:mx-[60px] flex items-center justify-between py-5 gap-4">
      <img width={120} src={Logo} alt="logo" />
      <div className="max-md:hidden flex-[0.85] flex p-2 gap-3 font-[16px] rounded-lg border-2 border-gray-500">
        <img height={24} width={24} src={Search} alt="search" />
        <input className="w-full h-full focus-visible:outline-none" />
      </div>
      <div id="actions" className="flex justify-between gap-4">
        <div className="flex gap-2 items-center">
          <img height={24} width={24} src={Profile} alt="Cart" />
          <span className="max-md:hidden">Sign in</span>
        </div>
        <div className="flex gap-2 items-center">
          <Badge badgeContent={cart?.length} color="success">
            <img height={24} width={24} src={Cart} alt="Cart" />
          </Badge>
          <span className="max-md:hidden">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
