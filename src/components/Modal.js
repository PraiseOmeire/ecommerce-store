import React from "react";

const Modal = ({show, item, onClose}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 flex justify-center items-start p-6 z-50">
      <div className="bg-main p-10 lg:px-16 rounded shadow-lg">
        <h4 className="text-md mb-4 font-bold">✔ Item Added To Your Cart</h4>
        <div className="flex">
          <img
            src={item.image}
            alt={item.imageDetails}
            className="w-[165px] h-auto mb-4 mr-6"
          />
          <p className="mb-4 font-bold text-2xl">{item.imageDetails}</p>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => (window.location.href = "/cart")}
            className="lg:px-24 px-12 py-2 bg-white text-black rounded"
          >
            View Cart
          </button>
        </div>

        <div className="flex justify-center ">
          <button
            onClick={onClose}
            className="text-center mt-6 underline font-semibold text-xl"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
