import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* future pages */}
            {/* <Route path="/shop" element={<Shop />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    );
}