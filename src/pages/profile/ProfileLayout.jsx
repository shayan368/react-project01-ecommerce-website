import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function ProfileLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="flex px-10 py-10 gap-10">


        <div className="w-[220px] border-r">

          <h2 className="font-semibold mb-6">User Profile</h2>

          <div className="flex flex-col gap-4 text-sm">

            <Link to="/profile">Home</Link>
            <Link to="/profile/orders">My Orders</Link>
            <Link to="/profile/addresses">Addresses</Link>
            <Link to="/profile/settings">Account Settings</Link>

            <button
              onClick={logout}
              className="text-red-500 text-left"
            >
              Logout
            </button>
          </div>
        </div>


        <div className="flex-1">
          <Outlet />
        </div>

      </div>

      <Footer />
    </>
  );
}