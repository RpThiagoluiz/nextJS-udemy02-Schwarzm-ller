import { getAllEvents } from "../../../dummy-data";
import { EventList } from "../../components/Events/List";
import { EventsSearch } from "../../components/Events/Search";

const Events = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default Events;
