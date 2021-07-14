import { useRouter } from "next/router";
import { getAllEvents } from "../../../dummy-data";
import { EventList } from "../../components/Events/List";
import { EventsSearch } from "../../components/Events/Search";

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();
  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </>
  );
};

export default Events;
