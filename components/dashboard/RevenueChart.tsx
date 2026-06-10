"use client";


import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
];

export default function RevenueChart() {

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-white text-xl font-semibold"> Revenue Overview </h3>
        <p className="text-zinc-400 text-sm mt-1">
          Monthly revenue performance
        </p>
      </div>
      <div className="h-[300px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="month" stroke="#71717a" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#a855f7"
              strokeWidth={4}
              dot={{ r: 4, fill: "#a855f7" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
