"use client";

import { ChartIncome } from "../ChartIncome";
import { Container } from "../Container";
import { ListIncomes } from "../ListIncomes";
import { ModalIncomeAdd } from "../ModalIncomeAdd";
import style from "./Income.module.scss";

const Income = () => {
  return (
    <div className={style.root}>
      <Container>
        <div className={style.header_date}>
          <h1>Income</h1>
        </div>
        <ChartIncome />
        <ModalIncomeAdd />
        <ListIncomes />
      </Container>
    </div>
  );
};

export default Income;
