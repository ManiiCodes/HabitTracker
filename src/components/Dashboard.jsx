import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome back, {user?.username} 👋</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">🔥 Streak: 7 days</div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">✅ Habits Completed: 12</div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">📅 This Month: 45%</div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">🏆 Best Streak: 21 days</div>
      </div>
    </div>
  );
};

export default Dashboard;
