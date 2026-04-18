import { useState } from "react";
import { categoryProducts } from "../../data/categoryProducts";
import ProductCard from "../common/ProductCard";

import { FaComputer } from "react-icons/fa6";
import { CiDesktop, CiDesktopMouse1 } from "react-icons/ci";
import { MdLaptopWindows } from "react-icons/md";
import { PiComputerTower } from "react-icons/pi";
import { GoCpu } from "react-icons/go";

export default function Categories() {
  const [active, setActive] = useState("All");

  const categories = [
    { name: "All", icon: <FaComputer size={16} /> },
    { name: "Desktops", icon: <CiDesktop size={16} /> },
    { name: "Laptops", icon: <MdLaptopWindows size={16} /> },
    { name: "Custom PCs", icon: <PiComputerTower size={16} /> },
    { name: "CPU", icon: <GoCpu size={16} /> },
    { name: "Accessories", icon: <CiDesktopMouse1 size={16} /> },
  ];

  // ✅ FILTER LOGIC
  const filteredProducts =
    active === "All"
      ? categoryProducts
      : categoryProducts.filter((p) => p.category === active);

  return (
    <div className="w-full px-6 lg:px-12 py-10">

      <h2 className="text-2xl font-semibold mb-6">
        Categories
      </h2>

      {/* 🔵 CATEGORY BAR */}

<div className="flex flex-wrap gap-20 mb-8 pb-4 width-full">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center gap-5 px-7 py-2 rounded text-sm transition
              
              ${active === cat.name
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
            `}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}

      </div>

      {/* 🔵 PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}