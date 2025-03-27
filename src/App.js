import { useContext, useState } from "react";
import { OrderProvider, OrderContext } from "./context/OrderContext";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import OrderStatus from "./components/OrderStatus";
import WaiterDashboard from "./components/WaiterDashboard";
import ChefDashboard from "./components/ChefDashboard";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <OrderProvider>
      <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white min-h-screen"}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <MainContent />
      </div>
    </OrderProvider>
  );
};

const MainContent = () => {
  const { addToOrder } = useContext(OrderContext);

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      <Menu addToOrder={addToOrder} />  {/* ✅ Now passing addToOrder */}
      <OrderStatus />
      <WaiterDashboard />
      <ChefDashboard />
    </div>
  );
};

export default App;
