import { FaUserCircle } from "react-icons/fa";

export default function ProfileHome() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div>
      <h2 className="font-semibold mb-4">Home</h2>

      <div className="flex items-center gap-6">

        {user.image ? (
          <img
            src={user.image}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="text-6xl text-gray-400" />
        )}

        <div>
          <h3 className="font-semibold">
            {user.name || "Full Name"}
          </h3>
          <p className="text-gray-500">
            {user.email}
          </p>
        </div>

      </div>

      <p className="mt-4 text-gray-500 text-sm max-w-lg">
        This is your profile dashboard where you can manage your account,
        orders and addresses.
      </p>
    </div>
  );
}