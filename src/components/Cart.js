import React from "react";
import {Link} from "react-router-dom";

const CartPage = () => {
  return (
    <div className="mt-20 ml-10 mr-10 inika mb-20">
      <h4>Shop All </h4>
      <div className="flex justify-between mt-16">
        <div className="ml-40">
          <img
            src="/images/img-2.jpg"
            alt="Plain"
            className="w-[400px] h-[500px] mb-16 mt-16"
          />
          <div className="flex ">
            <img src="/images/img-11.jpg" alt="img" className="mr-12" />
            <img src="/images/img-10.jpg" alt="img" />
          </div>

          <div className="mt-16">
            <h4>Order Notes</h4>
            <input
              type="text"
              className="p-12 border border-solid rouded-md border-black"
            />
          </div>
        </div>

        <div className="mr-38">
          <div className="mr-56">
            <h4 className="text-5xl font-bold inika-bold">Plain Belgian</h4>
            <div className="flex">
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
            </div>
          </div>

          <div className="flex mt-6">
            <button className="border border-2 border-solid pl-2 pr-2 border-black mr-6">
              -
            </button>
            <p className="text-2xl mr-6">2</p>
            <button className="border border-2 border-solid pl-2 pr-2 border-black text-2xl mr-6">
              +
            </button>
            <img src="/images/trash.png" alt="delete" />
          </div>

          <div>
            <p className="text-2xl mt-6">2000</p>

            <p>
              <Link className="font-semibold underline">Shipping</Link>{" "}
              calculated at Checkout
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-2xl inika-bold">Description</h2>
            <p className="w-[50%] leading-loose mt-4">
              Belgian Waffle made with butter, milk, and eggs, and pearl sugar
              imported from Belgium.{" "}
            </p>
          </div>

          <div className="mt-6">
            <button className="text-black p-4 pl-6 pr-6 rounded-3xl bg-main mr-4">
              Box of 4
            </button>
            <button className="text-black p-4 pl-6 pr-6 rounded-3xl bg-white border border-light mr-4">
              Box of 6
            </button>
            <button className="text-black p-4 pl-6 pr-6 rounded-3xl bg-white border border-light">
              Box of 12
            </button>
          </div>

          <div className="flex mt-8">
            <button className="text-black p-4 pl-6 pr-6 rounded-2xl bg-main border border-2 border-gray-400 mr-10">
              Save for Later
            </button>
            <button className="text-black p-4 pl-6 pr-6 rounded-2xl bg-main border border-2 border-gray-400">
              Save for Later
            </button>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-xl inika-bold">STORAGE</h4>
            <hr className="font-bold w-[70%] mt-2"></hr>
            <p>Waffles contain no preservatives</p>
            <p className="w-[60%] leading-loose mt-10">
              Store for up to 1 week in an air tight container in a fridge or
              freezer
            </p>
          </div>
          <div className="mt-10">
            <h4 className="font-semibold text-xl inika-bold">
              DELIVERY INFORMATION
            </h4>
            <hr className="font-bold w-[70%] mt-2"></hr>
            <p className="w-[60%] leading-loose mt-4">
              Our deliveries are made two (2) working days after order
              placement. Delivery occurs between 8AM - 6PM
            </p>
          </div>

          <div className="mt-10">
            <div className="flex">
              <h4 className="font-semibold text-xl inika-bold mr-56">
                REHEATING INSTRUCTIONS
              </h4>
              <button className="text-3xl">+</button>
            </div>

            <hr className="font-bold w-[70%] mt-2"></hr>
          </div>
          <div className="mt-10">
            <div className="flex">
              <h4 className="font-semibold text-xl inika-bold mr-96">
                ALLERGENS
              </h4>
              <button className="text-3xl">+</button>
            </div>
            <hr className="font-bold w-[70%] mt-2"></hr>
          </div>

          <div className="ml-72 mt-10">
            <Link
              to="/"
              className="text-black p-6 pl-12 pr-12 rounded-2xl bg-main border border-2 border-gray-400"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
