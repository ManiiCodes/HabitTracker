import React, { useState } from "react";

const Habits = ({ user, setUser }) => {
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (!newHabit.trim()) return;
    const updated = {
      ...user,
      habits: [...(user.habits || []), { name: newHabit, completed: [] }],
    };
    setUser(updated);
    setNewHabit("");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Habits</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add new habit..."
          className="px-3 py-2 border rounded flex-1 dark:bg-gray-700 dark:text-white"
        />
        <button onClick={addHabit} className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {user.habits?.map((habit, i) => (
          <li key={i} className="p-3 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
            <span>{habit.name}</span>
            <button className="text-green-500 hover:text-green-700">✔️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
