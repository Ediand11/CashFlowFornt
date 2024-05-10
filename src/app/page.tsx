import { Login } from "../components/Login";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
