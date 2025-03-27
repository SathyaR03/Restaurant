const Menu = ({ addToOrder }) => {  // ✅ Receiving addToOrder as a prop
    const menuItems = [
      { id: 1, name: "Pizza", price: "$12" },
      { id: 2, name: "Burger", price: "$8" },
      { id: 3, name: "Pasta", price: "$10" },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">📜 Menu</h2>
        <div className="grid grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>{item.price}</p>
              <button
                onClick={() => addToOrder(item.name)}  // ✅ Correct function reference
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Menu;
  