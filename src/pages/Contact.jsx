import { Phone, Mail, MapPin } from "lucide-react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


export default function Contact() {
  return (
    <>
     <Header />
          <Navbar />
    <div className="px-4 md:px-12 py-12">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-xl font-semibold mb-6">
            We are just a click away
          </h2>

          {/* PHONE */}
          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-blue-600" />
            <span>0044 123 456 789</span>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-blue-600" />
            <span>myemail@email.com</span>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-blue-600" />
            <span>Our Store, University Road Peshawar</span>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow p-6 rounded">

          <h2 className="text-xl font-semibold mb-4">
            Send Message
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border p-2 rounded"
            />

            <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">
              Send Message
            </button>

          </div>

        </div>

      </div>

      {/* MAP SECTION */}
     <div className="mt-12">
  <iframe
    className="w-full h-72 md:h-96 rounded-lg shadow"
    src="https://www.google.com/maps?q=University%20Road%20Peshawar&output=embed"
    loading="lazy"
  ></iframe>
</div>

    </div>
    <Footer />
    </>
  );
}