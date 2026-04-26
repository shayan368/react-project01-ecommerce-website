import { useState } from "react";
import { AiFillInstagram} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-100 px-10 py-12 mt-10">
      <div className="grid grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-blue-600 font-semibold mb-3">Store Name</h2>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <p className="text-gray-500 text-xs mt-4">
            © 2023 W3softwares Inc. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Store</li>
            <li className="cursor-pointer hover:text-blue-600">Accessories</li>
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Our Offers</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
            <li className="cursor-pointer hover:text-blue-600">Information</li>
            <li className="cursor-pointer hover:text-blue-600">Privacy Policy</li>
            <li className="cursor-pointer hover:text-blue-600">
              Terms & Conditions
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-600 text-sm mb-1">
            Subscribe to our emails
          </h3>

          <h2 className="font-semibold mb-4">
            For latest News & Updates
          </h2>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 bg-white px-3 py-2 w-full outline-none text-sm"
            />

            <button
              onClick={handleSubscribe}
              className="bg-blue-500 text-white px-4 text-sm"
            >
              Subscribe
            </button>
          </div>

          <div className="flex gap-3 mt-4 text-black">
            <AiFillInstagram className="cursor-pointer text-2xl" />
            <FaYoutube className="cursor-pointer text-2xl" />
            <CgFacebook className="cursor-pointer text-2xl" />
            <IoLogoTwitter className="cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}