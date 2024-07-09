import React from "react";

const AddToCartButton = ({onClick, children, className}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-main text-black rounded hover:bg-[#f7b1a3] ${className}`}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
