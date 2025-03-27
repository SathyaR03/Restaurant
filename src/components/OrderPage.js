import Customer from "./Customer";
import Waiter from "./Waiter";
import Chef from "./Chef";

const OrderPage = () => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    <Customer />
    <Waiter />
    <Chef />
  </div>
);

export default OrderPage;
