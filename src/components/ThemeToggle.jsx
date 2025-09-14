import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
