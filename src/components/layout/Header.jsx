import { ShoppingCart, User, Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const updateData = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      setWishlistCount(wishlist.length);
      setCartCount(cart.length);
    };

    const updateUser = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    updateData();

    window.addEventListener("storage", updateData);
    window.addEventListener("cartUpdated", updateData);
    window.addEventListener("wishlistUpdated", updateData);
    window.addEventListener("userLoggedIn", updateUser);

    return () => {
      window.removeEventListener("storage", updateData);
      window.removeEventListener("cartUpdated", updateData);
      window.removeEventListener("wishlistUpdated", updateData);
      window.removeEventListener("userLoggedIn", updateUser);
    };
  }, []);

  return (
    <>

      <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-gray-200">
        <div className="flex gap-3">
          <span>EN</span>
          <span>|</span>
          <span>USD</span>
        </div>

        <div className="flex gap-5 text-gray-600 items-center">
          <span className="cursor-pointer hover:text-black">
            Track Order
          </span>


          <Link
            to="/wishlist"
            className="flex items-center gap-2 hover:text-black"
          >
            <div className="relative">
              <FaHeart className="text-xl" />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>

            <span>Wishlist</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-white">

        <div className="text-2xl font-bold text-blue-600 cursor-pointer"
             onClick={() => navigate("/")}>
          LOGO HERE
        </div>

        <div className="flex items-center border border-gray-300 rounded overflow-hidden w-[50%]">
          <select className="px-3 py-2 bg-gray-100 outline-none">
            <option>All Categories</option>
            <option>Desktops</option>
            <option>Laptops</option>
            <option>Accessories</option>
          </select>

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-3 py-2 outline-none"
          />

          <button className="bg-blue-500 text-white px-4 py-2">
            <Search size={18} />
          </button>
        </div>

        <div className="flex gap-5 items-center">

          <Link to="/cart" className="relative">
            <ShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <div
            className="cursor-pointer"
            onClick={() => {
              if (user) {
                navigate("/profile");
              } else {
                navigate("/login");
              }
            }}
          >
            {user && user.image ? (
              <img
                src={user.image}
                alt="profile"
                className="w-9 h-9 rounded-full object-cover border hover:ring-2 hover:ring-blue-400 transition"
              />
            ) : (
              <User className="hover:text-blue-500 transition" />
            )}
          </div>

        </div>
      </div>
    </>
  );
}