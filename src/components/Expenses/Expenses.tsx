import { transactionGet } from "@/src/api/transctions/transctionsGet";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { Chart } from "../Chart";
import { Container } from "../Container";
import { ListTransactions } from "../ListTransactions";
import { ModalTransactionAdd } from "../ModalTransactionAdd";
import style from "./Expenses.module.scss";

async function getData(cookie: RequestCookie | undefined) {
  const res = await transactionGet(cookie);

  if (res.error || !res.transaction) {
    return [];
  } else {
    return res.transaction;
  }
}

const Expenses = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  const data = await getData(accessToken);
  return (
    <div className={style.root}>
      <Container>
        <div className={style.header_date}>
          <h1>Expenses</h1>
          <h2>Must be Date</h2>
        </div>
        <Chart />
        <ListTransactions transactions={data} />
        <ModalTransactionAdd />
      </Container>
    </div>
  );
};

export default Expenses;
