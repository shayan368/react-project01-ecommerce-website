import { ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
    return (
        <>
            {/* 🔵 TOP BAR */}
            <div className="flex justify-between items-center px-6 py-2 text-sm bg-gray-50 border-b">
                
                <div className="flex gap-3">
                    <span>EN</span>
                    <span>|</span>
                    <span>USD</span>
                </div>
                <div className="container"></div>

                <div className="flex gap-5 text-gray-600">
                    <span className="cursor-pointer hover:text-black">Track Order</span>
                    <span className="cursor-pointer hover:text-black">Wishlist</span>
                </div>
            </div>

            {/* 🔵 MAIN HEADER */}
            <div className="flex items-center justify-between px-6 py-4 bg-white">

                {/* LOGO */}
                <div className="text-2xl font-bold text-blue-600">
                    LOGO HERE
                </div>

                {/* SEARCH BAR */}
                <div className="flex items-center border rounded overflow-hidden w-[50%] shadow-sm">

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

                {/* ICONS */}
                <div className="flex gap-5 items-center">

                    <div className="relative cursor-pointer">
                        <ShoppingCart />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                            0
                        </span>
                    </div>

                    <User className="cursor-pointer" />
                </div>

            </div>
        </>
    );
}