import React, {useState} from "react";
import "../index.css";
import Modal from "./Modal";
import AddToCartButton from "./AddToCartButton";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      image: "images/img-1.jpg",
      imageDetails: "Rafaello",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-2.jpg",
      imageDetails: "Plain Belgian",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-3.jpg",
      imageDetails: "Milk Chocolate",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-4.jpg",
      imageDetails: "Shrimp & Basil",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
  ];

  const soldOut = [
    {
      image: "images/img-5.jpg",
      imageDetails: "Lemon Iced",
      text1: "From ₦10,000",
      text2: "Sold Out",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-6.jpg",
      imageDetails: "Churro",
      text1: "From ₦10,000",
      text2: "Sold Out",
      buttonText: "Add to cart",
    },
  ];

  const data2 = [
    {
      image: "images/img-7.jpg",
      imageDetails: "Biscoff",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-8.jpg",
      imageDetails: "Waffle Pops",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
    {
      image: "images/img-9.jpg",
      imageDetails: "Salted Caramel",
      text: "From ₦10,000",
      buttonText: "Add to cart",
    },
  ];

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="background-div">
        {/* <img src="/images/offers.png" /> */}
        <div className=" lg:flex justify-center lg:text-center">
          <div className="bg-main lg:p-12 lg:pl-20 lg:pr-20 p-4 rounded-md flex lg:flex-col flex-row mt-16">
            <p className="lg:mt-0 lg:text-2xl text-xl mt-2">
              Get 10% off your first order
            </p>
            <button className="bg-white lg:mt-4 p-2 lg:ml-0 ml-2 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20">
        <aside className="hidden md:block md:w-1/4 h-screen p-4 lg:ml-16 ml-8">
          <h2 className="text-xl font-bold mb-4">Browse all Categories</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="lg:text-xl md:text-sm text-sm ">
                All
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="lg:text-xl md:text-sm text-sm ">
                Pre-packaged
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="lg:text-xl md:text-sm text-sm ">
                Savoury
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="lg:text-xl md:text-sm text-sm ">
                Sweet
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="lg:text-xl md:text-sm text-sm ">
                Premium
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4 mt-16"> Filter By Price</h2>
          <ul className="font-xl">
            <li className="mb-2 lg:text-xl md:text-sm text-sm ">
              <a href="#">₦ 2500 - 4000</a>
            </li>
            <li className="mb- lg:text-xl md:text-sm text-sm">
              <a href="#">₦ 4000 - 6000</a>
            </li>
            <li className="mb-2 lg:text-xl md:text-sm text-sm">
              <a href="#">₦ 6000 - 8000</a>
            </li>
            <li className="mb-2 lg:text-xl md:text-sm text-sm">
              <a href="#">₦ 8000 - 10000</a>
            </li>
          </ul>
        </aside>

        <main className="flex justify-between p-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="border p-4 text-center">
                <img
                  src={item.image}
                  alt={item.imageDetails}
                  className="lg:w-[320px] h-auto mb-2  transform transition-transform duration-300 hover:scale-110 hover:opacity-175"
                />
                <p className="lg:text-2xl text-1xl mb-2 mt-4 font-semibold tracking-wider">
                  {item.imageDetails}
                </p>
                <p className="lg:font-semibold mb-1">{item.text}</p>
                <AddToCartButton
                  onClick={() => handleAddToCart(item)}
                  className="mt-2"
                >
                  {item.buttonText}
                </AddToCartButton>
              </div>
            ))}
            {soldOut.map((item) => (
              <div key={item.id} className="border p-4 text-center">
                <img
                  src={item.image}
                  alt={item.imageDetails}
                  className="lg:w-[320px] h-auto mb-2 transform transition-transform duration-300 hover:scale-110 hover:opacity-175"
                />
                <p className="lg:text-2xl text-1xl mb-2 mt-4 font-semibold tracking-wider">
                  {item.imageDetails}
                </p>
                <p className="lg:font-semibold mb-1">{item.text1}</p>
                <p className=" text-xl line-through">{item.text2}</p>
                <AddToCartButton
                  onClick={() => handleAddToCart(item)}
                  className="mt-2"
                >
                  {item.buttonText}
                </AddToCartButton>
              </div>
            ))}
            {data2.map((item) => (
              <div key={item.id} className="border p-4 text-center">
                <img
                  src={item.image}
                  alt={item.imageDetails}
                  className="lg:w-[320px] h-auto mb-2 transform transition-transform duration-300 hover:scale-110 hover:opacity-175"
                />
                <p className="lg:text-2xl text-1xl mb-2 mt-4 font-semibold tracking-wider">
                  {item.imageDetails}
                </p>
                <p className="lg:font-semibold mb-1">{item.text}</p>
                <AddToCartButton
                  onClick={() => handleAddToCart(item)}
                  className="mt-2"
                >
                  {item.buttonText}
                </AddToCartButton>
              </div>
            ))}
          </div>
        </main>
        <Modal
          show={showModal}
          item={selectedItem}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Product;
