import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="inika">
      <h4 className="lg:ml-20 ml-6 lg:mt-20 mt-10 lg:text-2xl text-xl">
        <Link to="/" className="font-bold">
          Shop All
        </Link>{" "}
        &#62; Plain Belgian &#62; <Link to="/cart">Cart</Link>&#62; Checkout
      </h4>

      <div className="lg:flex justify-between mt-10">
        <div className="lg:ml-20 ml-4 mr-4">
          <div>
            <h2 className="font-bold lg:text-5xl text-3xl">Checkout</h2>
          </div>
          <div className="lg:flex justify-between bg-main lg:p-8 lg:pl-16 lg:pr-16 mt-10 text-3xl rouded-md mb-6">
            <p className="lg:mr-40 hidden md:block">Product</p>
            <p className="hidden md:block">Quantity</p>
          </div>
          <div className="flex lg:mt-20">
            <img src="/images/img-2.jpg" alt="cart-item" />
            <p className="font-semibold lg:text-2xl lg:mt-24 mt-24 lg:ml-12 mr-4 ml-2 lg:mr-12">
              Plain Belgian
            </p>
            <p className="border border-solid border-2 border-black lg:text-2xl lg:mt-20 mt-24 lg:mb-24 mb-40 lg:p-4 p-2 -pb-4">
              2
            </p>
          </div>
          <div className="mt-20">
            <hr></hr>
          </div>

          <div>
            <div className="flex justify-end text-2xl mt-8">
              <p className="mr-6">Sub-Total :</p>
              <p>₦ 20000</p>
            </div>
            <div className="flex justify-end text-2xl mt-8">
              <p className="mr-6">Shipping :</p>
              <p>₦ 5000</p>
            </div>
            <div className="flex justify-end text-3xl mt-12">
              <p className="mr-6 font-bold ">Total :</p>
              <p>₦ 25000</p>
            </div>
          </div>

          <div className="flex justify-end mt-20 mb-10">
            <input
              type="text"
              placeholder="Discount or promo code"
              className="p-6 border"
            />
            <button className="p-4 border rounded-r-lg bg-gray-300 text-2xl">
              Apply
            </button>
          </div>

          <div className="bg-main p-2 text-xl mb-10 mt-20">
            <h4 className="ml-4 font-semibold mb-2">**Delivery</h4>
            <p className="ml-4 leading-normal">
              Our deliveries are made two (2) working days <br />
              after order placement. Delivery occurs between <br />
              8AM - 6PM
            </p>
          </div>
        </div>

        <div className="border-l-2 border-black h-76"></div>

        <div className="lg:mr-16 mr-4 ml-4">
          <div>
            <h2 className="font-bold lg:text-5xl text-3xl mb-10">
              Shipping Details
            </h2>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" text-xl">
              <div className="mb-4">
                <label htmlFor="name" className="block text-2xl font-bold mb-2">
                  Contact
                </label>
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-36 pl-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-bold mb-4 mt-12"
                >
                  Delivery Information
                </label>
                <input
                  placeholder="Full Name"
                  id="name"
                  type="text"
                  {...register("name", {required: "Name is required"})}
                  className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-36 pl-6 text-xl text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  placeholder="Address"
                  id="name"
                  type="text"
                  {...register("name", {required: "Address is required"})}
                  className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-36 pl-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  placeholder="Contact Number"
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Contact Number is required",
                  })}
                  className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-36 pl-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex">
                <div className="mb-4 mr-10 ">
                  <input
                    placeholder="City"
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "City is required",
                    })}
                    className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-30 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    placeholder="State"
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "State is required",
                    })}
                    className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-30 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-gray-200 border rounded-lg mt-8 ">
                <div className="mt-6 ">
                  <h4 className="ml-8 mr-8 mb-8">Payment Method</h4>
                  <div className="flex m-8">
                    <p className="mr-16">⏺ Card</p>

                    <p> ⏺Bank Transfer</p>
                  </div>

                  <div className="mb-4 ml-8 mr-8">
                    <input
                      placeholder="Name on Card"
                      id="name"
                      type="text"
                      {...register("name", {
                        required: "Card Name is required",
                      })}
                      className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-24 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 ml-8 mr-8">
                    <input
                      placeholder="Card Number"
                      id="name"
                      type="text"
                      {...register("name", {
                        required: "Card Number is required",
                      })}
                      className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-24 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="flex ml-8 mr-8">
                    <div className="mb-4 mr-6 ">
                      <input
                        placeholder="Expiration Date"
                        id="name"
                        type="text"
                        {...register("name", {
                          required: "This field is required",
                        })}
                        className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-24 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <input
                        placeholder="CVV"
                        id="name"
                        type="text"
                        {...register("name", {
                          required: "This field is required",
                        })}
                        className="shadow appearance-none border border-black rounded-xl w-full py-4 pr-30 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex mb-8">
                  <p className="bg-main ml-8 mr-2">✔️</p>
                  <p>Use shipping address as billing address</p>
                </div>
              </div>

              <div className="flex items-center justify-end mt-6">
                <button
                  type="submit"
                  className="bg-main hover:bg-blue-700 text-black border border solid border-black  py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline mb-20"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
