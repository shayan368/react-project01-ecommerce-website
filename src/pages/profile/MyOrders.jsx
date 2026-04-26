import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MyOrders() {
  const navigate = useNavigate();

  const [orders] = useState([
    {
      id: "#273648",
      date: "12/05/2023",
      total: 599,
      status: "Pending",
    },
    {
      id: "#273648",
      date: "05/04/2023",
      total: 599,
      status: "Completed",
    },
  ]);

  return (
    <div>
      <h2 className="font-semibold mb-4">My Orders</h2>

      <table className="w-full text-sm bg-gray-50 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">SN</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-2">{String(i + 1).padStart(2, "0")}</td>
              <td className="text-blue-500">{o.id}</td>
              <td>{o.date}</td>
              <td>${o.total}</td>
              <td className={o.status === "Completed" ? "text-green-500" : "text-orange-500"}>
                {o.status}
              </td>
              <td>
                <button
                  onClick={() => navigate(`/profile/orders/${i}`)}
                  className="text-blue-500 underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}