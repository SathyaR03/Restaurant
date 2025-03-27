import Ingredients from "./Ingredients";
import Shopkeeper from "./Shopkeeper";

const Inventory = () => (
  <div className="grid grid-cols-2 gap-4 mt-4">
    <Ingredients />
    <Shopkeeper />
  </div>
);

export default Inventory;
