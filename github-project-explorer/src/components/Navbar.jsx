import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);

    if (!dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">GitHub Explorer</h1>

      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Bookmarks</Link>

        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          🌙 Dark Mode
        </button>
      </div>
    </nav>
  );
}