import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const clearAll = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="px-6 lg:px-12 py-10">

        <div className="grid grid-cols-4 text-sm font-semibold border-b-4 border-[#f6f7f8] pb-3 mb-4">
          <p>PRODUCT</p>
          <p>PRICE</p>
          <p>STATUS</p>
          <p>ACTION</p>
        </div>

        {wishlist.length === 0 ? (
          <p className="text-center py-10 text-gray-500">
            Your wishlist is empty
          </p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center border-b-4 border-[#f6f7f8] py-4 text-sm"
            >
              <div className="flex items-center gap-4">
                <button onClick={() => removeItem(item.id)}>
                  <FaTimes className="text-[#54adf4] bg-[#eff4f8] rounded-full hover:text-red-500" />
                </button>

                <img
                  src={item.image}
                  className="w-16 h-16 object-contain"
                />

                <p>{item.name}</p>
              </div>
            <p>${item.price}</p>

             <p
  className={
    item.inStock
      ? "text-black font-semibold"
      : "text-red-500"
  }
>
  {item.inStock ? "Available" : "Out of stock"}
</p>


              <div>
             {item.inStock ? (
  <button className="text-blue-500 hover:underline">
    Add to cart
  </button>
) : (
  <Link
    to={`/product/${item.id}`}
    className="text-blue-500 hover:underline"
  >
    View Product
  </Link>
)}
              </div>
            </div>
          ))
        )}

        {wishlist.length > 0 && (
          <div className="flex justify-end mt-6">
            <button
              onClick={clearAll}
              className="bg-red-500 text-white px-6 py-2 rounded"
            >
              Delete All Items
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}