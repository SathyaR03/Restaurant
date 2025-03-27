import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addToOrder = (foodItem) => {
    setOrders([...orders, foodItem]);
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
