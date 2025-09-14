import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Progress = ({ user }) => {
  const data = user?.habits?.map((h, i) => ({
    name: h.name,
    completed: h.completed.length,
  })) || [];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Progress</h1>
      <div className="w-full h-64 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="completed" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Progress;
