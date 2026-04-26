import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [strength, setStrength] = useState("");

  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const checkStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/^(?=.*[A-Z])(?=.*[0-9])/)) return "Strong";
    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      return alert("Fill all fields");
    }

    if (!isValidEmail(form.email)) {
      return alert("Invalid email format");
    }

    if (form.password !== form.confirm) {
      return alert("Passwords do not match");
    }

    alert("Account Created Successfully");
    navigate("/login");
  };

  return (
      <>
    <Header/>
    <Navbar/>

    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[380px] bg-white p-8 rounded-xl shadow-md"
      >
     
        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>

        <p className="text-black text-sm mb-6 border-b-2 pb-4 border-gray-200">
          Upgrade your tech game with us!
        </p>

        <div className="mb-4">
          <label className="text-sm text-black">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-black">Email</label>
          <input
            type="email"
            placeholder="myemail@email.com"
            className="rounded-lg w-full p-2 mt-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="mb-2 relative">
          <label className="text-sm text-black">Password</label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="........"
            className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setStrength(checkStrength(e.target.value));
            }}
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

        {form.password && (
          <p
            className={`text-sm mb-3 ${
              strength === "Strong"
                ? "text-green-500"
                : strength === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            Password Strength: {strength}
          </p>
        )}

        <div className="mb-4 relative">
          <label className="text-sm text-black">
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="........"
            className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) =>
              setForm({ ...form, confirm: e.target.value })
            }
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

        <button className="bg-blue-500 hover:bg-blue-600 transition text-white w-full py-2 rounded-lg font-medium">
          Sign Up
        </button>

        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
    <Footer/>
    </>
  );
}