import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { allProducts } from "../data/allProducts";

import ProductCard from "../components/common/ProductCard";
import Rating from "../components/common/Rating";

import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaMinus, FaPlus, FaHeart } from "react-icons/fa6";

export default function ProductDetails() {
  const { id } = useParams();

  const product = allProducts.find((p) => p.id == id);

  const [mainImage, setMainImage] = useState(product?.image);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return <h2 className="text-center py-10">Product Not Found</h2>;

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const addToWishlist = () => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

    const already = existing.find((item) => item.id === product.id);
    if (already) return;

    const newItem = {
      ...product,
    };

    const updated = [...existing, newItem];

    localStorage.setItem("wishlist", JSON.stringify(updated));

    window.dispatchEvent(new Event("storage"));
  };

const addToCart = () => {
  const existing = JSON.parse(localStorage.getItem("cart")) || [];

  const already = existing.find((item) => item.id === product.id);

  if (already) {
    already.qty += 1;
  } else {
    existing.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existing));

  alert("Product added to cart");
};
  return (
    <>
      <Header />
      <Navbar />
      <div className="px-6 lg:px-12 py-10">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: IMAGES */}
          <div>
            <img
              src={mainImage}
              className="w-full h-72 object-contain"
            />

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-contain border-2 cursor-pointer rounded
                  ${mainImage === img ? "border-gray-200" : "border-blue-500"}
                `}
                />
              ))}
            </div>
          </div>

          {/* CENTER: INFO */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>
            <div className="flex gap-2">
              <Rating rating={product.rating} reviews={product.reviews} />
              <span className="text-gray-500">
                (0 reviews)
              </span>

              <span className="text-blue-600 cursor-pointer hover:underline">
                Submit a review
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-blue-600 text-xl font-bold">
                ${product.price}
              </p>

              <button
                onClick={addToWishlist}
                className="ml-4 text-blue-500 text-xl cursor-pointer"
              >
                <FaHeart />
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Availability : {product.inStock ? (" In Stock") : ("Out of Stock")}
            </p>

            <p className="text-gray-500 text-sm">
              Category : {product.category}
            </p>

            <p className="text-gray-500 text-sm mb-4">
              Free Shipping
            </p>

            <div className="flex gap-4 mt-6 items-center flex-wrap">

              <div className="flex items-center gap-3 bg-gray-200 px-3 py-1 rounded">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="text-blue-500"
                >
                  <FaMinus />
                </button>

                <span>{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="text-blue-500"
                >
                  <FaPlus />
                </button>
              </div>

              <button className="bg-black text-white px-6 py-2 rounded">
                Buy Now
              </button>

              <button onClick={addToCart} className="bg-blue-500 text-white px-6 py-2">
                Add to Cart
              </button>
            </div>

            <div className="flex gap-6 mt-8 items-center text-gray-500">
              <span>Share it on:</span>

              <span className="text-[#3b5998] text-xl cursor-pointer">
                <TfiFacebook />
              </span>

              <span className="text-[#1da1f2] text-xl cursor-pointer">
                <AiOutlineTwitter />
              </span>
            </div>
          </div>

          <div className="bg-blue-500 text-white p-5 rounded">
            <h3 className="font-semibold mb-2">
              {product.name}
            </h3>

            <p className="text-sm mb-4">
              High performance product for modern needs.
            </p>

            <p className="text-lg font-bold mb-4">
              ${product.price}
            </p>

            <img
              src={product.image}
              className="w-full h-40 object-contain"
            />
          </div>
        </div>

        <div className="mt-10">

          <div className="flex gap-6 border-b-6 border-[#eff0f1] pb-2 bg-[#f8f8f8]">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-2 ${activeTab === "description"
                ? "text-blue-600 border-b-2 border-blue-600"
                : ""
                }`}
            >
              Product Information
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 ${activeTab === "reviews"
                ? "text-blue-600 border-b-2 border-blue-600"
                : ""
                }`}
            >
              Reviews
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600 max-w-2xl bg-[#f8f8f8]">
            {activeTab === "description" && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

              </p>
            )}

            {activeTab === "reviews" && (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}