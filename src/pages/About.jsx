// About.jsx
import { Link } from "react-router-dom";
import abouUsBanner from "../assets/images/aboutus-banner.png";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function About() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">

      

      <div className="w-full overflow-hidden">
        <img
          src={abouUsBanner}
          alt="Shop Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto bg-white mt-6 p-6 rounded-md">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h2 className="text-blue-600 font-semibold mb-3">
              About Us
            </h2>

            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <ul className="text-xs text-gray-700 space-y-2 mt-3">
              <li>• High quality products</li>
              <li>• Affordable prices</li>
              <li>• Fast delivery</li>
              <li>• Customer satisfaction</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              className="w-full h-28 object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
              className="w-full h-28 object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              className="w-full h-28 object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              className="w-full h-28 object-cover rounded"
            />
          </div>

        </div>

        <div className="text-center mt-10">
          <h3 className="text-blue-600 text-sm font-semibold mb-4">
            Our Techies
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/HP_logo_2012.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Lenovo_logo_2015.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/AsusTek_Computer_Logo.svg" className="h-6" />
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-6">
        © 2026 Your Website | All Rights Reserved
      </div>

    </div>
    <Footer/>
    </>
  );
}
