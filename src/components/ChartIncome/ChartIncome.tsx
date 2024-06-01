"use client";

import { incomeGet } from "@/src/api/income/incomeGet";
import { useIncomesStore } from "@/src/store/incomeStore";
import { BarChart } from "@mui/x-charts";
import { useCallback, useEffect, useState } from "react";
import style from "./ChartIncome.module.scss";

const valueFormatter = (value: number | null) => `${value ? value : 0}$`;
const Months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ChartIncome = () => {
  const { incomes, setIncomes } = useIncomesStore();
  const [monthlySums, setMonthlySums] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const { income } = await incomeGet();
        if (income) {
          setIncomes(income);
        }
      } catch (error) {
        console.error("Ошибка при получении доходов:", error);
      }
    };

    fetchIncomes();
  }, [setIncomes]);

  const calculateMonthlySums = useCallback(() => {
    const sums = Array(12).fill(0);
    incomes.forEach(({ date, amount }) => {
      const month = new Date(date).getMonth();
      sums[month] += parseFloat(amount);
    });
    setMonthlySums(sums);
  }, [incomes, setMonthlySums]);

  useEffect(() => {
    if (incomes.length) {
      calculateMonthlySums();
    }
  }, [incomes, calculateMonthlySums]);

  return (
    <div className={style.root}>
      <BarChart
        height={300}
        series={[{ data: monthlySums, label: "income", id: "uvId", color: "#92ff92", valueFormatter }]}
        xAxis={[{ data: Months, scaleType: "band" }]}
      />
    </div>
  );
};

export default ChartIncome;
