import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { categoryProducts } from "../../data/categoryProducts";

export default function FlashSale() {
  const saleEnd = new Date();
  saleEnd.setHours(saleEnd.getHours() + 12);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = saleEnd - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashProducts = categoryProducts.slice(0, 3);

  return (
    <div className="px-6 lg:px-12 py-10">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">

        <h2 className="text-xl font-semibold mb-4 lg:mb-0">
          Flash Sale on Products
        </h2>

        {timeLeft ? (
          <div className="flex gap-3 text-center text-xs">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit}>
                <div className="bg-blue-600 text-white px-3 py-1 rounded">
                  {timeLeft[unit]}
                </div>
                <p className="text-gray-500 mt-1 capitalize">{unit}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-sm">Sale Ended</p>
        )}

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {flashProducts.map((product) => (
          <FlashProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FlashProductCard({ product }) {
  const oldPrice = product.price + 50;

  return (
    <div className="bg-[#f8f8f8] p-4 rounded relative">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-28 object-contain mb-2"
      />

      <p className="text-xs text-gray-500">{product.title}</p>

      <h3 className="text-sm font-medium line-clamp-2 mb-2">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-blue-600 font-bold text-sm">
          ${product.price}
        </span>

        <span className="text-gray-400 text-xs line-through">
          ${oldPrice}
        </span>
      </div>

      <Link
        to={`/product/${product.id}`} // future routing ready
        className="flex items-center text-sm text-gray-400 font-medium hover:underline"
      >
        View Details
        <ArrowRight size={16} />
      </Link>

    </div>
  );
}