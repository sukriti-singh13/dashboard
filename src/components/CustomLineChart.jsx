import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
const CustomLineChart = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1000) {
        setChartWidth(800);
        setChartHeight(200);
      } else if (screenWidth <= 999 && screenWidth >= 400) {
        setChartWidth(500);
        setChartHeight(200);
      } else {
        setChartWidth(300);
        setChartHeight(200);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
