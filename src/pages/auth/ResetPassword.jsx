import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handle = () => {
    if (!pass || !confirm) return alert("Fill all fields");
    if (pass !== confirm) return alert("Passwords do not match");

    alert("Updated");
    navigate("/login");
  };

  return (

    <>
    <Header/>
    <Footer/>

    <div className="flex justify-center items-center h-screen">
      <div className="w-[380px] bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-2">
          Recover Account
        </h2>

        <p className="text-black text-sm mb-6 border-b-2 pb-4 border-gray-200">
          Please create a new password
        </p>

        <div className="mb-4 relative">
          <label className="text-bold text-black">New Password</label>

          <input
            type={showPass ? "text" : "password"}
            placeholder="........"
            className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
            onChange={(e) => setPass(e.target.value)}
          />

          {showPass ? (
            <FaEyeSlash
              onClick={() => setShowPass(false)}
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={() => setShowPass(true)}
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
            />
          )}
        </div>

        <div className="mb-4 relative">
          <label className="text-sm text-black">
            Confirm New Password
          </label>

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="........"
            className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) => setConfirm(e.target.value)}
          />

          {showConfirm ? (
            <FaEyeSlash
              onClick={() => setShowConfirm(false)}
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={() => setShowConfirm(true)}
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
            />
          )}
        </div>

        <button
          onClick={handle}
          className="bg-blue-500 hover:bg-blue-600 transition text-white w-full py-2 rounded-lg font-medium"
        >
          Update Password
        </button>

      </div>
    </div>
    <Footer/>
    </>
  );
}