import Link from "next/link";
import { Logo } from "../logo";
import styles from "./styles.module.css";

// Link, se vc nao pasar 1 texto dentro dele vc precisa passar uma ancor nele. seja um component ou imagem.
export const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
