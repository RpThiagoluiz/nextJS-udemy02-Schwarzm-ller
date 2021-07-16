import { Fragment } from "react";
import { useRouter } from "next/router";

import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage(props) {
  //Os dados estavam vindo da propria pasta, agora eles vem de um api externa,
  //const router = useRouter();
  //const eventId = router.query.eventId;
  //const event = getEventById(eventId);
  const { event } = props;

  if (!event) {
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <Fragment>
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
    </Fragment>
  );
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30, // 30 sec
  };
};

//getStaticPaths - lembra que vc utiliza os paths, porq o Next nao sabe quantas paginas ele precisa pre rendizar elas.
export const getStaticPaths = async () => {
  //const events = await getAllEvents(); //ta puxando todos, o legal seria pegar alguns somente, para nao deixar tudo pre render.
  //pode pegar somente os primeiros eventos, os mais proximos, o ultimos. vc pode trabalhar de uma forma melhor o array antes de trazer a informacao.
  const events = await getFeaturedEvents();
  const pathsEvent = events.map((event) => ({ params: { eventId: event.id } }));
  //paths ja vai ser um array, logo nao precisa passar um array dentro de um array.
  //Fallback, precisa saber oq fazer com as paginas que nao existem, ou nao foram carregadas
  // false, caso nao tenha a pagina no pre-rendering, ele retorna um 404 | notfound
  //true, ele vai buscar outras paginas que ainda nao foram pre renderizadas
  //blocking, o NextJS nao vai fazer nda ate ele terminar de gerar toda a pagina, ele nao vai trazer uma mensagem de loading nem nda do tipo ate ele terminar de renderizar a pagina.
  return {
    paths: pathsEvent,
    fallback: true,
  };
};

export default EventDetailPage;
