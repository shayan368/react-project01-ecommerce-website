import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function RecoverEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    navigate("/verify", { state: { email } });
  };

  return (
    <>
    <Header/>
    <Navbar/>

    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleContinue}
        className="w-[410px] bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">Recover Account</h2>

        <p className="text-black text-sm mb-6 border-b-2 pb-4 border-gray-200">
          Enter your registered email to receive verification code
        </p>

        <div className="mb-8">
          <label className="text-sm text-black">Email</label>

          <input
            type="email"
            placeholder="Email"
            className="rounded-lg w-full p-2 mt-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Continue
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}