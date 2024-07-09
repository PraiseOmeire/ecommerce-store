import React from "react";
import {Link} from "react-router-dom";

const CartPage = ({show, item}) => {
  return (
    <div className="mt-20 lg:ml-10 md:ml-10 ml-2 mr-10 inika mb-20">
      <h4 className="lg:ml-10 lg:text-2xl text-xl">
        <Link to="/" className="font-bold">
          Shop All
        </Link>{" "}
        &#62; Plain Belgian &#62; <Link to="/cart">Cart</Link>
      </h4>
      <div className="flex justify-between mt-16">
        <div className="lg:ml-20">
          <img
            src="/images/img-2.jpg"
            alt="Plain Belgian"
            className="w-[150px] h-[200px] lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[400px] lg:mb-16 mb-2 lg:mt-1 mt-2"
          />
          <div className="flex ">
            <img
              src="/images/img-12.jpg"
              alt="img"
              className="lg:mr-12 mr-4 lg:w-[200px] lg:h-[200px] md:w-[70px] md:h-[80px] w-[60px] h-[60px]"
            />
            <img
              src="/images/img-10.jpg"
              alt="img"
              className="lg:w-[200px] lg:h-[200px] md:w-[70px] md:h-[80px] w-[60px] h-[60px]"
            />
          </div>

          <div className="mt-16 ">
            <h4 className="hidden md:block">Order Notes</h4>
            <input
              type="text"
              className="lg:p-12 pl-12 pr-12 lg:border md:border lg:border-solid md:border-solid  border-black"
            />
          </div>
        </div>

        <div className="lg:mr-38 -ml-24 lg:ml-10 md:ml-10">
          <div className="lg:mr-56">
            <h4 className="lg:text-5xl text-2xl font-bold inika-bold">
              Plain Belgian
            </h4>
            <div className="flex">
              <img
                src="/images/star.png"
                className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                alt="star"
              />
              <img
                src="/images/star.png"
                className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                alt="star"
              />
              <img
                src="/images/star.png"
                className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                alt="star"
              />
              <img
                src="/images/star.png"
                className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                alt="star"
              />
              <img
                src="/images/star.png"
                className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                alt="star"
              />
            </div>
          </div>

          <div className="flex mt-6">
            <button className="border border-2 border-solid lg:pl-2 lg:pr-2 pl-1 pr-1 border-black lg:mr-6 mr-2">
              -
            </button>
            <p className="text-2xl lg:mr-6 mr-2">2</p>
            <button className="border border-2 border-solid lg:pl-2 lg:pr-2 pl-1 pr-1 border-black text-2xl lg:mr-6 mr-2">
              +
            </button>
            <img src="/images/trash.png" alt="delete" />
          </div>

          <div>
            <p className="text-2xl mt-6">₦ 2000</p>

            <p className="lg:text-1xl text-xs">
              <Link className="font-semibold underline lg:text-1xl text-xs">
                Shipping
              </Link>{" "}
              calculated at Checkout
            </p>
          </div>

          <div className="mt-6 hidden md:block">
            <h2 className="font-bold text-2xl inika-bold">Description</h2>
            <p className="lg:w-[50%] md:w-[50%] w-[40%] leading-loose mt-4">
              Belgian Waffle made with butter, milk, and eggs, and pearl sugar
              imported from Belgium.{" "}
            </p>
          </div>

          <div className="lg:flex mt-6">
            <div className="flex flex-row ">
              <button className="text-black lg:p-4 lg:pl-6 lg:pr-6 pl-2 pr-2 rounded-3xl bg-main lg:mr-4 mr-1">
                Box of 4
              </button>
              <button className="text-black lg:p-4 lg:pl-6 lg:pr-6 pl-2 pr-2 rounded-3xl bg-white border border-light lg:mr-4">
                Box of 6
              </button>
            </div>
            <div className="">
              <button className="text-black lg:p-4 lg:pl-6 lg:pr-6 pl-4 pr-4 rounded-3xl bg-white border border-light lg:mt-0 mt-6">
                Box of 12
              </button>
            </div>
          </div>

          <div className="flex mt-8">
            <button className=" lg:text-xl text-xs text-black lg:p-4 lg:pl-6 lg:pr-6 pl-1 pr-1 p-2 rounded-md lg:rounded-2xl bg-main border border-2 border-gray-400 lg:mr-10 mr-2">
              Save for Later
            </button>
            <Link
              to="/checkout"
              className="lg:text-xl text-xs text-black lg:p-4 lg:pl-6 lg:pr-6 pl-1 pr-1 p-2 rounded-md lg:rounded-2xl bg-main border border-2 border-gray-400"
            >
              Checkout
            </Link>
          </div>

          <div className="mt-10 hidden md:block">
            <h4 className="font-semibold text-xl inika-bold">STORAGE</h4>
            <hr className="font-bold w-[70%] mt-2"></hr>
            <p>Waffles contain no preservatives</p>
            <p className="w-[60%] leading-loose mt-10">
              Store for up to 1 week in an air tight container in a fridge or
              freezer
            </p>
          </div>
          <div className="mt-10 hidden md:block">
            <h4 className="font-semibold text-xl inika-bold">
              DELIVERY INFORMATION
            </h4>
            <hr className="font-bold w-[70%] mt-2"></hr>
            <p className="w-[60%] leading-loose mt-4">
              Our deliveries are made two (2) working days after order
              placement. Delivery occurs between 8AM - 6PM
            </p>
          </div>

          <div className="mt-10 hidden md:block">
            <div className="flex">
              <h4 className="font-semibold text-xl inika-bold lg:mr-56">
                REHEATING INSTRUCTIONS
              </h4>
              <button className="text-3xl">+</button>
            </div>

            <hr className="font-bold lg:w-[70%] mt-2"></hr>
          </div>
          <div className="mt-10 hidden md:block">
            <div className="flex">
              <h4 className="font-semibold text-xl inika-bold lg:mr-96">
                ALLERGENS
              </h4>
              <button className="text-3xl">+</button>
            </div>
            <hr className="font-bold lg:w-[70%] mt-2"></hr>
          </div>

          <div className="lg:ml-72 mt-10 hidden md:block">
            <Link
              to="/"
              className="text-black lg:text-xl text-sm lg:p-6 lg:pl-12 lg:pr-12 p-2 pl-3 pr-3 rounded-2xl bg-main border border-2 border-gray-400"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:hidden md:hidden text-center">
        <h2 className="font-bold text-xl inika-bold">Description</h2>
        <p className="lg:w-[50%] md:w-[50%] w-full leading-loose mt-4">
          Belgian Waffle made with butter, milk, and eggs, and pearl sugar
          imported from Belgium.{" "}
        </p>
      </div>

      <div className="bg-[#F6F5F5] ml-6 mt-6 p-2 lg:hidden md:hidden">
        <div className="mt-6 lg:hidden md:hidden text-center">
          <h4 className="font-semibold text-xl inika-bold">STORAGE</h4>
          <hr className="font-bold bg-black mt-2"></hr>
          <p>Waffles contain no preservatives</p>
          <p className=" leading-loose ">
            Store for up to 1 week in an air tight container in a fridge or
            freezer
          </p>
        </div>

        <div className="mt-10 lg:hidden md:hidden text-center">
          <div className="flex">
            <h4 className="font-semibold text-xl inika-bold mr-12">
              DELIVERY INFORMATION
            </h4>
            <button className="text-3xl">+</button>
          </div>
          <hr className="font-bold mt-2"></hr>
        </div>

        <div className="mt-10 lg:hidden md:hidden text-center">
          <div className="flex">
            <h4 className="font-semibold text-xl inika-bold mr-8">
              REHEATING INSTRUCTIONS
            </h4>
            <button className="text-3xl">+</button>
          </div>
          <hr className="font-bold mt-2"></hr>
        </div>

        <div className="mt-10 lg:hidden md:hidden text-center">
          <div className="flex">
            <h4 className="font-semibold text-xl inika-bold mr-32">
              ALLERGENS
            </h4>
            <button className="text-3xl">+</button>
          </div>
          <hr className="font-bold mt-2"></hr>
        </div>
      </div>

      <div className="lg:ml-72 mt-10 lg:hidden md:hidden flex justify-end">
        <Link
          to="/"
          className="text-black lg:text-xl text-sm lg:p-6 lg:pl-12 lg:pr-12 p-2 pl-3 pr-3 rounded-2xl bg-main border border-2 border-gray-400"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
