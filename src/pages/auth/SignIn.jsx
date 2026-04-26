import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Fill all fields");


const user = {
  name: "User Name",
  email: email,
  phone: "",
  image: "", 
};

localStorage.setItem("user", JSON.stringify(user));

  
    window.dispatchEvent(new Event("userLoggedIn"));

    alert("Login Success");

    navigate("/profile");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleLogin}
          className="w-[380px] bg-white p-8 rounded-xl shadow-md"
        >

          <h2 className="text-2xl font-semibold mb-2">
            Sign In
          </h2>

          <p className="text-black text-sm mb-6 border-b-2 pb-4 border-gray-200">
            Upgrade your tech game with us!
          </p>

          <div className="mb-4">
            <label className="text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2 relative">
            <label className="text-sm text-black">Password</label>

            <input
              type={showPass ? "text" : "password"}
              placeholder="........"
              className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="text-right mb-4">
            <span
              onClick={() => navigate("/recover")}
              className="text-sm text-blue-500 cursor-pointer hover:underline"
            >
              Forgot Password?
            </span>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 transition text-white w-full py-2 rounded-lg font-medium">
            Sign In
          </button>

          <p className="text-sm text-center mt-5 text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}