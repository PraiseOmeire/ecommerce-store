import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#FFE1DB] inika">
      <div className=" lg:ml-24 mr-10">
        <div className=" flex justify-between pt-12 pb-2 ">
          <div className="flex ">
            {" "}
            <img src="./images/logo1.png" alt="logo-1" className="w-[80px]" />
            <Link to="/" className="mr-8 ml-6 mt-16 text-xl">
              Home
            </Link>
            <Link to="/" className="mr-8 mt-16 text-xl">
              Shop
            </Link>
          </div>

          <div className="flex lg:mt-16 ">
            <img
              src="./images/AiOutlineSearch.png"
              alt="search"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="./images/AiOutlineShoppingCart.png"
              alt="Cart"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="./images/AiOutlineuser.png"
              alt="User"
              className=" w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
