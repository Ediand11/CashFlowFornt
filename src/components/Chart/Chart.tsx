"use client";

import { transactionGet } from "@/src/api/transaction/transactionGet";
import { useTransactionsStore } from "@/src/store/transactionsStore";
import { BarChart } from "@mui/x-charts";
import { useCallback, useEffect, useState } from "react";
import style from "./Chart.module.scss";

const valueFormatter = (value: number | null) => `${value ? value : 0}$`;
const Months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Chart = () => {
  const { transactions, setTransactions } = useTransactionsStore();
  const [monthlySums, setMonthlySums] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { transaction } = await transactionGet();
        if (transaction) {
          setTransactions(transaction);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [setTransactions]);

  const calculateMonthlySums = useCallback(() => {
    const sums = Array(12).fill(0);
    transactions.forEach(({ date, price }) => {
      const month = new Date(date).getMonth();
      sums[month] += parseFloat(price);
    });
    setMonthlySums(sums);
  }, [transactions, setMonthlySums]);

  useEffect(() => {
    if (transactions.length) {
      calculateMonthlySums();
    }
  }, [transactions, calculateMonthlySums]);

  return (
    <div className={style.root}>
      <BarChart
        height={300}
        series={[{ data: monthlySums, label: "spending", id: "uvId", color: "#ff9292", valueFormatter }]}
        xAxis={[{ data: Months, scaleType: "band" }]}
      />
    </div>
  );
};

export default Chart;
