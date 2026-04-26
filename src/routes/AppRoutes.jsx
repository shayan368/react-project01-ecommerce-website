import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";


import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import RecoverEmail from "../pages/auth/RecoverEmail";
import Verification from "../pages/auth/Verification";
import ResetPassword from "../pages/auth/ResetPassword";


import ProfileLayout from "../pages/profile/ProfileLayout";
import ProfileHome from "../pages/profile/ProfileHome";
import MyOrders from "../pages/profile/MyOrders";
import Addresses from "../pages/profile/Addresses";
import AccountSettings from "../pages/profile/AccountSettings";
import OrderDetails from "../pages/profile/OrderDetails";

export default function AppRoutes() {
  return (
    <Routes>


      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover" element={<RecoverEmail />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfileHome />} />
        <Route path="orders" element={<MyOrders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="settings" element={<AccountSettings />} />
      </Route>

    </Routes>
  );
}