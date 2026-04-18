import Rating from "./Rating";

export default function ProductCard({ product }) {
    return (
        <div className="bg-[#f8f8f8] p-4 rounded relative">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-28 object-contain mb-2"
            />

            <p className="text-xs text-gray-500">{product.title}</p>

            <h3 className="text-sm font-medium line-clamp-2">
                {product.name}
            </h3>

            <Rating rating={product.rating}/>

            <p className="text-blue-600 font-bold text-sm mt-1 absolute top-2 left-2">
                ${product.price}
            </p>

        </div>
    );
}