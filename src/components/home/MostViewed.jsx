import { allProducts } from "../../data/allProducts";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";

export default function MostViewed() {
 const products = allProducts.filter(p => p.mostViewed);

  return (
    <div className="px-6 py-10">
      <SectionTitle title="Most Viewed Products" />

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}