import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Chef = () => {
  const { orders, setOrders } = useContext(OrderContext);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Chef</h2>
      <ul>
        {orders.map((item, index) => (
          <li key={index} className="p-1 border-b">Cooking {item}...</li>
        ))}
      </ul>
      <button onClick={() => setOrders([])} className="mt-2 bg-red-500 text-white px-4 py-2">Clear Orders</button>
    </div>
  );
};

export default Chef;
