import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Verification() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "your@email.com";

  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Timer logic
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const handleContinue = () => {
    if (code.length !== 6) return alert("Enter 6 digit code");
    navigate("/reset-password");
  };

  const handleResend = () => {
    setSeconds(30);
    setCanResend(false);
    alert("Code Resent");
  };

  return (

    <>
      <Header />
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="w-[380px] bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-semibold mb-2">
            Recover Account
          </h2>

          <p className="text-black text-sm mb-6 border-b-2 pb-4 border-gray-200">
            A 6 digit code has been sent to your email address {email}
            <span
              onClick={() => navigate("/recover")}
              className="text-blue-500 cursor-pointer ml-2 underline"
            >
              Change Email
            </span>
          </p>

          <div className="mb-4">
            <label className="text-bold text-black">Verification Code</label>
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6 digit code"
              className="rounded-lg w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#e8f0fe]"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <button
            onClick={handleContinue}
            className="bg-blue-500 hover:bg-blue-600 transition text-white w-full py-2 rounded-lg font-medium"
          >
            Continue
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            {canResend ? (
              <span
                onClick={handleResend}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Resend Code
              </span>
            ) : (
              <>Resend in {seconds}s</>
            )}
          </p>

        </div>
      </div>  
      <Footer />
    </>
  );
}