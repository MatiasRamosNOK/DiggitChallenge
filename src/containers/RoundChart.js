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
  PieChart,
  Cell,
  Pie,
} from "recharts";
export default function RoundChart() {
  const sumData = (data) => {
    let num = 0;
    for (let i = 0; i < data.length; i++) {
      num += data[i].value;
    }

    return num;
  };

  const data = [
    {
      name: "Individuals",
      value: 284,
    },
    {
      name: "Companies",
      value: 364,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          stroke="none"
          innerRadius={75}
          outerRadius={"50%"}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#8884d8"
        >
          <Label
            value={sumData(data)}
            position="center"
            style={{
              textAnchor: "middle",
              fontSize: "170%",
              fill: "white",
              fontFamily: "MontserratBold",
            }}
          />
          {data.map((entry, index) => (
            <Cell
              fill={index == 0 ? "rgb(255, 86, 238)" : "rgb(78, 255, 207)"}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
