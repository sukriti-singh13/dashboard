import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  {  value: 400 },
  {  value: 300 },
  { value: 300 },
  {  value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CustomPieChart = ({  }) => {
  return ( 
  <PieChart width={400} height={400}>
  <Pie
    dataKey="value"
    startAngle={360}
    endAngle={0}
    data={data}
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="#8884d8"
    labelLine={false}
  >
{
  data.map((el,index)=>(
    <Cell key={`cell-${index}`} fill={COLORS[index]} />
  ))
}

  </Pie>
</PieChart>);
};

export default CustomPieChart;
