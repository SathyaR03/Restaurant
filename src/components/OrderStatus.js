import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const OrderStatus = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">📦 Order Status</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="p-2 bg-gray-200 my-2 rounded">
            {order} - ⏳ Preparing...
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
