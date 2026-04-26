import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();

  const order = {
    product: "Gaming Laptop",
    subtotal: 500,
    delivery: 50,
    total: 550,
    user: {
      name: "User Name",
      email: "user@email.com",
      type: "Delivery",
      address: "Street 123, City",
    },
  };

  return (
    <div className="p-6 space-y-6">

      <div className="border p-4 rounded flex justify-between">


        <div>
          <h3 className="font-semibold mb-2">Product</h3>

          <p>{order.product}</p>

          <div className="mt-4 text-sm text-gray-600">
            <p>Subtotal: ${order.subtotal}</p>
            <p>Delivery: ${order.delivery}</p>
            <p className="font-semibold text-black">
              Total: ${order.total}
            </p>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-2">Price</h3>

          <div className="mt-6 text-right">
            <p>${order.subtotal}</p>
            <p>${order.delivery}</p>
            <p className="font-semibold">${order.total}</p>
          </div>
        </div>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold mb-4">Shipping Details</h3>

        <div className="grid grid-cols-2 gap-6 text-sm">

          <div className="text-gray-500">
            <p>Name</p>
            <p>Email</p>
            <p>Type</p>
            <p>Address</p>
          </div>

          <div>
            <p>{order.user.name}</p>
            <p>{order.user.email}</p>
            <p>{order.user.type}</p>
            <p>{order.user.address}</p>
          </div>

        </div>
      </div>
    </div>
  );
}