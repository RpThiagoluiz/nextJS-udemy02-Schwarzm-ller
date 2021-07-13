import Link from "next/link";
import styles from "./styles.module.css";

export const Button = ({ link, onClick, children }) => {
  //anchor tag quando vc for passar classes, se vc passar diretamente o Next vai intender que vc ta subescrevendo o estilo, e transforma o link em uma ancho, tirando o efeito de `velocidade` dele.

  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
