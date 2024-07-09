import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="bg-[#FFE1DB] inika">
      <div className=" lg:ml-24 mr-10">
        <div className=" flex justify-between pt-12 pb-2 ">
          <div className="flex">
            <img src="./images/logo1.png" alt="logo-1" className="w-[80px]" />
            <Link
              to="/"
              className={`mr-8 font-bold ml-6 mt-16 text-xl hover-underline ${
                activeLink === "home" ? "active-underline" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Link>
            <Link
              to="/"
              className={`mr-8 font-bold mt-16 text-xl hover-underline ${
                activeLink === "shop" ? "active-underline" : ""
              }`}
              onClick={() => setActiveLink("shop")}
            >
              Shop
            </Link>
          </div>

          <div className="flex lg:mt-16 ">
            <img
              src="/images/AiOutlineSearch.png"
              alt="search"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="/images/cart.png"
              alt="Cart"
              className="mr-8 w-[30px] h-[30px]"
            />

            <img
              src="/images/AiOutlineUser.png"
              alt="Use"
              className=" w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
