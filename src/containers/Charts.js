import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  linearGradient,
  Label,
} from "recharts";

export default function Charts({ color, label }) {
  const data = [
    {
      name: "Jun'19",
      uv: 3,
    },
    {
      name: "Jul'19",
      uv: 6,
    },
    {
      name: "Aug'19",
      uv: 5,
    },
    {
      name: "Sep'19",
      uv: 3,
    },
    {
      name: "Oct'19",
      uv: 3,
    },
    {
      name: "Nov'19",
      uv: 6,
    },
    {
      name: "Dec'19",
      uv: 10,
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <AreaChart
        data={data}
        margin={{ top: 15, right: 0, left: -30, bottom: 0 }}
      >
        <defs>
          <linearGradient id={`colorUv1+${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.first} stopOpacity={1} />
            <stop offset="100%" stopColor={color.second} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tick={{ stroke: "#cccccc", strokeWidth: 0.2, color: "#cccccc" }}
        ></XAxis>

        <YAxis
          tick={{ stroke: "#cccccc", strokeWidth: 0.2, color: "#cccccc" }}
        ></YAxis>
        <CartesianGrid strokeDasharray="1" stroke="none" />
        <Tooltip />
        <Legend
          iconSize={0}
          margin={{ bottom: "-10px" }}
          wrapperStyle={{
            color: "#cccccc",
            fontSize: "130%",
          }}
          layout="horizontal"
          verticalAlign="top"
          align="center"
          payload={[{ id: "pv", value: label, color: "black" }]}
        />
        <Area
          type="monotone"
          dataKey="uv"
          fillOpacity={1}
          stroke="transparent"
          fill={`url(#colorUv1+${label})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
