import banner from "../../assets/images/macbook-banner.png"; // your full design image
import { Link } from "react-router-dom";

export default function MacbookBanner() {
  return (
    <div className="px-6 lg:px-12 py-10">

      <Link to="/product/1">
        <div className="w-full rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer">
          
          <img
            src={banner}
            alt="MacBook Banner"
            className="w-full h-full object-cover"
          />

        </div>
      </Link>

    </div>
  );
}