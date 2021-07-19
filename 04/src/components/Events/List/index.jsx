import { EventItem } from "../Item";
import { list } from "./styles.module.css";

//o outro import que vc nomeia ele como styles, e passa o metodo dele para o className eu acho mais intuitivo para indender oq ta acontecendo.
export const EventList = ({ items }) => {
  return (
    <ul className={list}>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
