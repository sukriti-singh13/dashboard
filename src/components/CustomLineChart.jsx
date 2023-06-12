import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
const CustomLineChart = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(300);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setChartWidth(200);
    } else if (window.innerWidth > 500 && window.innerWidth <= 1400) {
      setChartWidth(600);
    }
  }, [window.innerWidth]);
  return (
    <div className="line-chart-wrapper">
      <h3>Activities</h3>
      <LineChart width={chartWidth} height={chartHeight} data={data}>
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
        <Legend />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
