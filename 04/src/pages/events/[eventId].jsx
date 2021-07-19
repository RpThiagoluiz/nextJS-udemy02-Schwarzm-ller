import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import { EventSummary } from "../../components/Events/detail/event-summary";
import { EventContent } from "../../components/Events/detail/event-content";
import { EventLogistics } from "../../components/Events/detail/event-logistics";

const EventDetail = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  //Verificar o event recebido pela route
  if (!event) {
    return <p>No Event Found! - Component </p>;
  }

  //pegar o id da nossa request.
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetail;
