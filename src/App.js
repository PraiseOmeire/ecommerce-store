import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import CartPage from "./components/Cart";
import Checkout from "./components/Checkout";
import LoadingSpinner from "./components//LoadingSpinner";
import "./index.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleAddToCart = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<Product handleAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<CartPage item={selectedItem} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
