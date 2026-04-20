import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";



export default function Features() {
  const features = [
    {
      icon: <FaTruckFast size={28} />,
      title: "Free Shipping",
      desc: "Enjoy free shipping on all orders with no minimum purchase required.",
    },
    {
      icon: <RiRefund2Line  size={28} />,
      title: "100% Refund",
      desc: "Not satisfied? Get a full refund within 30 days, no questions asked.",
    },
    {
      icon: <MdSupportAgent  size={28} />,
      title: "Support 24/7",
      desc: "Our support team is available 24/7 to assist you anytime.",
    },
  ];

  return (
    <div className="px-6 lg:px-12 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">

            <div className=" text-blue-600 p-4 mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 max-w-xs">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}