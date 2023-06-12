import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const CustomLineChart = ({ data }) => {
  return (
    <div className="line-chart-wrapper">
      <LineChart width={820} height={250} data={data}>
        <Line type="monotone" dataKey="priceUsd" stroke="#9BDD7C" />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "14px",
            color: "#858585",
          }}
        />
        <YAxis
          tick={{
            fontFamily: "Lato",
            fontWeight: "400",
            fontSize: "14px",
            color: "#858585",
          }}
        />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
