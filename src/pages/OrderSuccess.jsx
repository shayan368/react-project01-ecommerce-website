import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";


export default function OrderSuccess() {
  const navigate = useNavigate();

  const trackingId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <Header />
      <Navbar />

      <div className="flex flex-col items-center justify-center py-20 text-center">


<h2 className="text-xl font-semibold mb-2">
          Your order has been placed
        </h2>

        <div className="relative mb-6">
          <div className="text-9xl text-black ">
           <BsFillCartCheckFill />

          </div>

          <FaCheckCircle className="text-blue-500 text-3xl absolute -bottom-2 -right-2 bg-white rounded-full" />
        </div>
        

        <p className="text-gray-500 text-sm mb-4">
          Your order tracking ID:{" "}
          <span className="font-semibold text-black">
            {trackingId}
          </span>
        </p>

        <p className="text-black font-semibold max-w-md mb-2">
          Thank you for making us a part of your digital lifestyle! 
          
        </p>
<p className="text-gray-400 text-sm max-w-md mb-3">
  You will receive confirmation email with order details shortly.</p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-30 py-2 rounded hover:bg-blue-600"
        >
          Continue
        </button>

      </div>

      <Footer />
    </>
  );
} 