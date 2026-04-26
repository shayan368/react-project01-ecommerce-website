import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/common/ProductCard";

import shopbanner from "../assets/images/shopbanner.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { useState } from "react";
import { allProducts } from "../data/allProducts";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState(2000);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortType, setSortType] = useState("");
  const [showCount, setShowCount] = useState(6);

  const categories = ["All", "Desktops", "Laptops", "Gaming PC", "Accessories"];

  const getCategoryCount = (cat) => {
    if (cat === "All") return allProducts.length;
    return allProducts.filter((p) => p.category === cat).length;
  };

  const brands = ["Apple", "HP", "Samsung", "Dell"];

  const getBrandCount = (brand) => {
    return allProducts.filter((p) => p.brand === brand).length;
  };

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    const brandMatch =
      selectedBrand === "" || product.brand === selectedBrand;

    const priceMatch = product.price <= priceRange;

    return categoryMatch && brandMatch && priceMatch;
  });

  let sortedProducts = [...filteredProducts];

  if (sortType === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const indexOfLast = currentPage * showCount;
  const indexOfFirst = indexOfLast - showCount;

  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedProducts.length / showCount);

  const getPages = () => {
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + 4, totalPages);

    if (end - start < 4) {
      start = Math.max(end - 4, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="px-6 lg:px-12 py-10">


        <div className="mb-8">
          <img src={shopbanner} alt="banner" className="w-full" />
        </div>

        <div className="flex gap-8">

          <div className="w-[260px] hidden lg:block">

            <div className="p-4 mb-6 bg-[#f8f8f8]">
              <h2 className="font-semibold mb-4">All Categories</h2>

              {categories.map((cat) => (
                <label key={cat} className="flex justify-between mb-2 text-sm">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      checked={selectedCategory === cat}
                      onChange={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                    />
                    {cat}
                  </div>
                  <span>({getCategoryCount(cat)})</span>
                </label>
              ))}
            </div>

            <div className="p-4 mb-6 bg-[#f8f8f8]">
              <h3 className="mb-2">Price</h3>

              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full"
              />

              <p>Up to ${priceRange}</p>
            </div>

            <div className="p-4 bg-[#f8f8f8]">
              <h3 className="mb-2">Brand</h3>

              {brands.map((brand) => (
                <label key={brand} className="flex justify-between mb-2 text-sm">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      checked={selectedBrand === brand}
                      onChange={() => {
                        setSelectedBrand(brand);
                        setCurrentPage(1);
                      }}
                    />
                    {brand}
                  </div>
                  <span>({getBrandCount(brand)})</span>
                </label>
              ))}
            </div>
          </div>


          <div className="flex-1">

            <div className="bg-[#f8f8f8] px-4 py-3 mb-6 flex gap-4">

              <p>{sortedProducts.length} Items</p>

              <div className="flex gap-4">
                  <span className="text-sm text-gray-500">Sort By</span>

                <select onChange={(e) => setSortType(e.target.value)} className="border border-[#eaeaea]">
                  <option value="">Default</option>
                  <option value="low">Low → High</option>
                  <option value="high">High → Low</option>
                </select>
<div className="ml-150">
                  <span className="text-sm text-gray-500">Show</span>

                <select
                  onChange={(e) => {
                    setShowCount(Number(e.target.value));
                    setCurrentPage(1);
                  }} className="border border-[#eaeaea] px-1"
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                </select>
</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-10">

              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-10 h-10 text-[#2497f3]"
              >
                <FaArrowLeft />
                </button>

              {getPages().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === page
                      ? "bg-[#dcf0ff] text-[#329ef4]"
                      : "bg-white"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-10 h-10 text-[#2497f3]"
              >
                <FaArrowRight />
              </button>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}