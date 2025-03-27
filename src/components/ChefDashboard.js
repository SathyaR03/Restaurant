import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const ChefDashboard = () => {
  const { orders, setOrders } = useContext(OrderContext);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">👨‍🍳 Chef Dashboard</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="flex justify-between bg-green-200 p-2 rounded my-2">
            {order} - 🔥 Cooking...
            <button
              onClick={() => setOrders(orders.filter((_, i) => i !== index))}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              ✅ Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChefDashboard;
