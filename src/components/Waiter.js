import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Waiter = () => {
  const { orders } = useContext(OrderContext);
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Waiter</h2>
      <ul>
        {orders.map((item, index) => (
          <li key={index} className="p-1 border-b">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Waiter;
