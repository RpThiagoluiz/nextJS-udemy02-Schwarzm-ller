import { EventList } from "../components/Events/List";
import { getFeaturedEvents } from "../../dummy-data";

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};
export default Home;
