import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setDate(new Date(year, month - 1, 1))}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Prev
          </button>
          <button
            onClick={() => setDate(new Date(year, month + 1, 1))}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-semibold">{d}</div>
        ))}
        {days.map((d, i) => (
          <div
            key={i}
            className={`h-12 flex items-center justify-center rounded ${
              d
                ? "bg-white dark:bg-gray-800 border dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-600 cursor-pointer"
                : "bg-transparent"
            }`}
          >
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
