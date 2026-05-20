import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  const linkClass =
    "text-white px-4 py-2 hover:bg-blue-700 transition rounded";

  return (
    <>
      <nav className="bg-blue-500 px-4 md:px-6">

        <div className="flex items-center justify-between h-14">

          {/* LOGO */}
          <h1 className="text-white text-xl font-bold">
            My Store
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden text-white text-3xl"
          >
            <HiMenu />
          </button>

        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpenMenu(false)}
            className="text-white text-3xl"
          >
            <HiX />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-4 px-6">

          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Store
          </NavLink>

          <NavLink
            to="/shop?category=mouse"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Mouse
          </NavLink>

          <NavLink
            to="/shop?category=keyboard"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Keyboard
          </NavLink>

          <NavLink
            to="/shop?category=accessories"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Accessories
          </NavLink>

          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
          >
            Contact Us
          </NavLink>

        </div>
      </div>

      {/* OVERLAY */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  );
}