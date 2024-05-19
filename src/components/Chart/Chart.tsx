"use client";

import { transactionGet } from "@/src/api/transctions/transctionsGet";
import { useTransactionsStore } from "@/src/store/transactionsStore";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import style from "./Chart.module.scss";

const valueFormatter = (value: number | null) => `${value ? value : 0}$`;
const Months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Chart = () => {
  const { transactions, setTransactions } = useTransactionsStore();
  const [monthlySums, setMonthlySums] = useState<number[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const resp = await transactionGet();
        if (resp.transaction) {
          setTransactions(resp.transaction);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [setTransactions]);

  useEffect(() => {
    const calculateMonthlySums = () => {
      const sums = new Array(12).fill(0);
      transactions.forEach((transaction) => {
        const date = new Date(transaction.date);
        const month = date.getMonth();
        sums[month] += parseFloat(transaction.price);
      });
      setMonthlySums(sums);
    };

    calculateMonthlySums();
  }, [transactions]);

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
