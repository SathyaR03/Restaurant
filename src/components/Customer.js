import { useState, useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Customer = () => {
  const { setOrders } = useContext(OrderContext);
  const [order, setOrder] = useState("");

  const placeOrder = () => {
    if (order) {
      setOrders((prev) => [...prev, order]);
      setOrder("");
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Customer</h2>
      <input
        type="text"
        placeholder="Enter food item"
        className="border p-2 w-full mt-2"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      <button onClick={placeOrder} className="mt-2 bg-green-500 text-white px-4 py-2">Order</button>
    </div>
  );
};

export default Customer;
