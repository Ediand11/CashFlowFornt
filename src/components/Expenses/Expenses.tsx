import { ChartExpenses } from "../ChartExpenses";
import { Container } from "../Container";
import { ListTransactions } from "../ListTransactions";
import { ModalTransactionAdd } from "../ModalTransactionAdd";
import style from "./Expenses.module.scss";

const Expenses = () => {
  return (
    <div className={style.root}>
      <Container>
        <div className={style.header_date}>
          <h1>Expenses</h1>
        </div>
        <ChartExpenses />
        <ModalTransactionAdd />
        <ListTransactions />
      </Container>
    </div>
  );
};

export default Expenses;
