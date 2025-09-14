import React from "react";

const Sidebar = ({ setRoute, setUser, theme, setTheme }) => {
  return (
    <div className="w-64 h-screen bg-gray-100 dark:bg-gray-800 dark:text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Habit Tracker</h2>
      <nav className="flex flex-col gap-3">
        <button onClick={() => setRoute("dashboard")} className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
          Dashboard
        </button>
        <button onClick={() => setRoute("habits")} className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
          Habits
        </button>
        <button onClick={() => setRoute("calendar")} className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
          Calendar
        </button>
        <button onClick={() => setRoute("progress")} className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
          Progress
        </button>
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-2 bg-gray-300 dark:bg-gray-600 rounded"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button
          onClick={() => setUser(null)}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
