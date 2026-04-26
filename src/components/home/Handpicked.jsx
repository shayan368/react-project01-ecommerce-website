import { allProducts } from "../../data/allProducts";
import ProductCard from "../common/ProductCard";

export default function HandPicked() {
 const products = allProducts.filter(p => p.handPicked);
  return (
    <div className="px-10 py-12">
      <h2 className="text-2xl mb-6">Handpicked Products</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}