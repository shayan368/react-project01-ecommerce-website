import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const changeQty = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") item.qty += 1;
        if (type === "dec" && item.qty > 1) item.qty -= 1;
      }
      return item;
    });
    updateCart(updated);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = cart.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <Navbar />

      <div className="px-6 lg:px-12 py-10">


        <div className="grid grid-cols-4 font-semibold border-b pb-3 mb-4 text-sm">
          <p>PRODUCT</p>
          <p>PRICE</p>
          <p>QTY</p>
          <p>TOTAL</p>
        </div>

        {cart.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            Your cart is empty
          </p>
        )}


        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center py-4 border-b text-sm"
          >
            <div className="flex items-center gap-3">
              <FaTimes
                onClick={() => removeItem(item.id)}
                className="cursor-pointer text-gray-400 hover:text-red-500"
              />
              <img src={item.image} className="w-16" />
              <p>{item.name}</p>
            </div>

            <p>${item.price}</p>

            <div className="flex items-center gap-2">
              <button onClick={() => changeQty(item.id, "dec")}>
                <FaMinus />
              </button>

              <span>{item.qty}</span>

              <button onClick={() => changeQty(item.id, "inc")}>
                <FaPlus />
              </button>
            </div>

            <p>${item.price * item.qty}</p>
          </div>
        ))}

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 mt-5"
          >
            Delete All Items
          </button>
        )}

        {cart.length > 0 && (
          <div className="flex justify-end mt-10">
            <div className="w-[300px] space-y-2 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping fee</span>
                <span>${shipping}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-blue-500 text-white py-2 mt-3"
              >
                Check out
              </button>

            </div>
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}