import Image from "next/image";
import styles from "./page.module.css";
import { title } from "process";
import book from "../../public/book.png";

export default function Home() {
  return (
    <div className={styles.search}>
      <div className={styles.add}>+</div>
      <p>Campbell Library</p>
      <form className={styles.bar}>
        <input type="text" />
      </form>
    </div>
  );
}
