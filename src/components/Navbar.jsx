import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FFE1DB] inika">
      <div className=" lg:ml-24 mr-10">
        <div className=" flex justify-between pt-12 pb-2 ">
          <div className="flex ">
            {" "}
            <img src="./images/logo1.png" alt="logo-1" className="w-[80px]" />
            <h4 className="mr-8 ml-6 mt-16 text-xl">Home</h4>
            <h4 className="mr-8 mt-16 text-xl">Shop</h4>
          </div>

          <div className="flex lg:mt-16 ">
            <img
              src="./images/AiOutlineSearch.png"
              alt="ai-search"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="./images/AiOutlineShoppingCart.png"
              alt="ai-search"
              className="mr-8 w-[30px] h-[30px]"
            />
            <img
              src="./images/AiOutlineuser.png"
              alt="ai-search"
              className=" w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
