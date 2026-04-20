import SectionTitle from "../common/SectionTitle";
import Rating from "../common/Rating";
import { mostViewedProducts } from "../../data/mostViewed";
import { ArrowRight } from "lucide-react";

export default function MostViewed() {
  return (
    <div className="px-6 lg:px-12 py-10">

      <SectionTitle title="Most Viewed Products" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {mostViewedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#f8f8f8] p-4 rounded"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 object-contain mb-2"
            />

            <p className="text-xs text-gray-500">
              {product.title}
            </p>

            <h3 className="text-sm font-medium line-clamp-2 mb-1">
              {product.name}
            </h3>

            <Rating rating={product.rating} />

            <p className="text-blue-600 font-bold text-sm mt-1">
              ${product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}