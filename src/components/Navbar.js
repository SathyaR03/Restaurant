const Navbar = ({ toggleDarkMode }) => {
    return (
      <nav className="flex justify-between bg-blue-600 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold">🍽️ Restaurant App</h1>
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-800 rounded">
          🌙 Toggle Dark Mode
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  