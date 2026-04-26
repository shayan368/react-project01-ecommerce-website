import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";
import Rating from "../common/Rating";
import { allProducts } from "../../data/allProducts";

export default function Featured() {

  if (!allProducts || allProducts.length === 0) {
    return <div className="text-center py-10">No products available</div>;
  }

  const mainProduct = allProducts[0];
  const sideProducts = allProducts.slice(1, 7);

  return (
    <div className="px-6 lg:px-12 py-10">
      <SectionTitle
        className="text-center"
        title="Handpicked by our techies"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-[#f8f8f8] p-6 rounded shadow flex flex-col relative">
          <img
            src={mainProduct.image}
            alt={mainProduct.name}
            className="w-full max-w-xs object-contain mb-4 mx-auto"
          />

          <p className="text-xs text-gray-500">Desktop</p>

          <h3 className="text-lg font-semibold">
            {mainProduct.name}
          </h3>

          <Rating
            rating={mainProduct.rating}
            reviews={mainProduct.reviews}
          />

          <span className="text-blue-600 text-xl font-bold absolute top-4 left-4">
            ${mainProduct.price}
          </span>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          
          {/* Top 2 */}
          <div className="grid grid-cols-2 gap-4">
            {sideProducts.slice(0, 2).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {sideProducts.slice(2, 5).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}