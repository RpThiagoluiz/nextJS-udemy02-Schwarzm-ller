import { Button } from "../../Button";
import { DateIcon } from "../../icons/dateIcon";
import { AddressIcon } from "../../icons/addressIcon";
import { ArrowRightIcon } from "../../icons/arrowRightIcon";
import styles from "./styles.module.css";

export const EventItem = ({ item }) => {
  //Formatar date aqui, contudo o melhor local para formatar ela sempre sera aonde vc chama a funcion

  const formatDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = item.location.replace(", ", "\n"); //Replace na , por uma quebra de linha

  const link = `/events/${item.id}`;

  //!lembrando que isso aqui ma pratica, melhor é formatar diretamente na chamada antes de enviar os dados para o component.
  return (
    <li className={styles.item}>
      <img
        src={`/` + item.image}
        alt={`Imagem do local ${item.title} reprensentado.`}
      />
      <div className={styles.content}>
        <div>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{formatDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={link}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
