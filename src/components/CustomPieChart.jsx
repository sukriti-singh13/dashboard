import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [{ value: 400 }, { value: 300 }, { value: 300 }];
const COLORS = ["#98D89E", "#F7DC7D", "#EE8484"];
const CustomPieChart = () => {
  return (
    <PieChart width={145} height={145}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
        labelLine={false}
      >
        {data.map((el, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
