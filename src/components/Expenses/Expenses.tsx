import { Chart } from "../Chart";
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
          <h2>Must be Date</h2>
        </div>
        <Chart />
        <ModalTransactionAdd />
        <ListTransactions />
      </Container>
    </div>
  );
};

export default Expenses;
