import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const WaiterDashboard = () => {
  const { orders, setOrders } = useContext(OrderContext);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">🍽️ Waiter Dashboard</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="flex justify-between bg-yellow-200 p-2 rounded my-2">
            {order}
            <button
              onClick={() => setOrders(orders.filter((_, i) => i !== index))}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              ✅ Serve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaiterDashboard;
