import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FFE1DB]">
      <div className=" ml-16 mr-16">
        <img src="./images/logo1.png" alt="logo-1" />
        <div className=" flex justify-between ">
          <div className="flex  ">
            <h4 className="mr-8">Home</h4>
            <h4 className="mr-8 ">Product</h4>
            <h4>Shop</h4>
          </div>

          <div className="flex">
            <img
              src="./images/AiOutlineSearch.png"
              alt="ai-search"
              className="mr-8"
            />
            <img
              src="./images/AiOutlineShoppingCart.png"
              alt="ai-search"
              className="mr-8"
            />
            <img src="./images/AiOutlineuser.png" alt="ai-search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
