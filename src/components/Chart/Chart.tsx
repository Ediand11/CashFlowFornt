"use client";

import { BarChart } from "@mui/x-charts";

const valueFormatter = (value: number | null) => `${value}$`;

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  series: [{ label: "Seoul rainfall", valueFormatter }],
  height: 300,
};

const MOCK = [122, 400, 5000, 4000, 400, 400, 4000, 400, 400, 4000, 400, 400];

const uData = [40100, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = ["Jun", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"];

const Chart = () => {
  return (
    <div>
      <BarChart
        width={900}
        height={300}
        series={[{ data: uData, label: "spending", id: "uvId", color: "#df0000", valueFormatter }]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </div>
  );
};

export default Chart;
