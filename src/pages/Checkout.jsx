import { useState } from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const shipping = 20;
  const vat = 5;
  const total = subtotal + shipping + vat;

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    if (!form.address.trim()) return "Address is required";
    if (!form.city.trim()) return "City is required";
    if (!form.zip.trim()) return "Zip code is required";
    if (!form.card.trim()) return "Card number is required";
    if (!form.expiry.trim()) return "Expiry date is required";
    if (!form.cvv.trim()) return "CVV is required";
    return null;
  };

  const handleSubmit = () => {
    const err = validateForm();

    if (err) {
      setError(err);
      return;
    }

    setError("");
    localStorage.removeItem("cart");
    navigate("/order-success");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="px-6 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">


        <div className="space-y-8">

   
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div>
            <h2 className="text-[18px] font-semibold mb-5">ADDRESS</h2>

            <input
              placeholder="House no 7, Achini Payan, Ring Road"
              className="w-full bg-[#f6f7f8] p-3 mb-4 outline-none"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />

            <input
              placeholder="Peshawar"
              className="w-full bg-[#f6f7f8] p-3 mb-4 outline-none"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="KP"
                className="bg-[#f6f7f8] p-3 outline-none"
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
              <input
                placeholder="25000"
                className="bg-[#f6f7f8] p-3 outline-none"
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-semibold mb-5">
              Credit Card Information
            </h2>

            <input
              placeholder="As shown on card"
              className="w-full bg-[#f6f7f8] p-3 mb-4 outline-none"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <div className="relative mb-4">
              <input
                placeholder="**** **** **** 1234"
                className="w-full bg-[#f6f7f8] p-3 outline-none"
                onChange={(e) => setForm({ ...form, card: e.target.value })}
              />
              <img
                src="https://img.icons8.com/color/48/mastercard-logo.png"
                className="w-8 absolute right-3 top-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="02/2028"
                className="bg-[#f6f7f8] p-3 outline-none"
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              />
              <input
                placeholder="CVV"
                className="bg-[#f6f7f8] p-3 outline-none"
                onChange={(e) => setForm({ ...form, cvv: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" />
              <span className="text-sm text-gray-500">
                Save Credit card information for next time
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#eff4f8] p-6 w-full max-w-md">

          <h2 className="font-semibold mb-5">Order Summary</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Order Total</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>VAT</span>
              <span>${vat}</span>
            </div>

            <hr className="my-3 border-[#eff4f8]" />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping fee</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between">
              <span>Coupon</span>
              <span>No</span>
            </div>

            <hr className="my-3 border-[#eff4f8]" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#33A0FF] text-white py-3 mt-6 rounded"
          >
            Check out
          </button>

          <div className="flex mt-4">
            <input
              placeholder="Coupon code"
              className="flex-1 bg-[#f6f7f8] p-2 outline-none"
            />
            <button className="bg-[#33A0FF] text-white px-4">
              Redeem
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}