"use client";

import { BarChart } from "@mui/x-charts";

const valueFormatter = (value: number | null) => `${value ? value : 0}$`;

const MOCK = [122, 400, 5000, 4000, 400, 400, 4000, 400, 400, 4000, 400, 400];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const Months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Chart = () => {
  return (
    <div>
      <BarChart
        width={900}
        height={300}
        series={[{ data: uData, label: "spending", id: "uvId", color: "#ff9292", valueFormatter }]}
        xAxis={[{ data: Months, scaleType: "band" }]}
      />
    </div>
  );
};

export default Chart;
