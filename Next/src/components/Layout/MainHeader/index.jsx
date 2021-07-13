import Link from "next/link";
import styles from "./styles.module.css";

export const MainHeader = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link href="/">Next Events</Link>
    </div>
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/events">All Events</Link>
        </li>
      </ul>
    </nav>
  </header>
);
