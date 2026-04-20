import products from "../../data/products";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";

export default function HandPicked() {
  const handPickedProducts = products.filter(
    (item) => item.handPicked === true
  );

  return (
    <div className="px-10 py-12">
      <SectionTitle title="Handpicked by Our Teacher" />

      <div className="grid grid-cols-4 gap-6 mt-8">
        {handPickedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}