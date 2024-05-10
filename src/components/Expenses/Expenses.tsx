import { Chart } from "../Chart";
import { Container } from "../Container";
import style from "./Expenses.module.scss";

const Expenses = () => {
  return (
    <div className={style.root}>
      <Container>
        <div className={style.header_date}>
          <h1>Expenses</h1>
          <h2>01 - 25 March, 2020</h2>
        </div>
        <Chart />
      </Container>
    </div>
  );
};

export default Expenses;
