import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import CartPage from "./components/Cart";
import "./index.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Product handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<CartPage item={selectedItem} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
