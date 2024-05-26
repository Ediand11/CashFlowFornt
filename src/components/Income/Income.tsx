"use client";

import { incomeGet } from "@/src/api/income/incomeGet";
import { Chart } from "../Chart";
import { Container } from "../Container";
import { ListTransactions } from "../ListTransactions";
import { ModalTransactionAdd } from "../ModalTransactionAdd";
import style from "./Income.module.scss";

const Income = () => {
  async function getIncome() {
    const res = await incomeGet();
    console.log(res.income);
  }
  getIncome();
  return (
    <div className={style.root}>
      <Container>
        <div className={style.header_date}>
          <h1>Income</h1>
          <h2>Must be Date</h2>
        </div>
        <Chart />
        <ModalTransactionAdd />
        <ListTransactions />
      </Container>
    </div>
  );
};

export default Income;
