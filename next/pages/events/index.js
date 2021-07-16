import { Fragment } from "react";
import { useRouter } from "next/router";

//import { getAllEvents } from '../../dummy-data';
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  const router = useRouter();
  // const events = getAllEvents();

  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60, // 1min
  };
};

export default AllEventsPage;
