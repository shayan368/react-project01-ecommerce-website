import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "text-white px-4 py-2 hover:bg-blue-700 transition";

  return (
    <nav className="bg-blue-500 px-6">
      <div className="flex items-center justify-center gap-16 h-12">

        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/shop" className={linkClass}>
          Store
        </NavLink>

        <NavLink to="/shop?category=mouse" className={linkClass}>
          Mouse
        </NavLink>

        <NavLink to="/shop?category=keyboard" className={linkClass}>
          Keyboard
        </NavLink>

        <NavLink to="/shop?category=accessories" className={linkClass}>
          Accessories
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About Us
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact Us
        </NavLink>

      </div>
    </nav>
  );
}