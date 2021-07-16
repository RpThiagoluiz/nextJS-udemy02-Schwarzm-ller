import { Fragment } from "react";
import { useRouter } from "next/router";

//import { getFilteredEvents } from '../../dummy-data';
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  //Nao ta precisando client-side data Fetching, contudo seria bom para os mecanimos de buscas.
  const {
    hasError,
    filteredEvents,
    date: { year, month },
  } = props;
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

//como tem muitos eventos acontecendo, e diferente posibilidades de filtros, vamos utilizar o server side props.

export const getServerSideProps = async (context) => {
  //pegar os params da rota acessada.
  const { params } = context;
  //filterData ele vai vem pelos parametros da rota, que sao passados e veem do nosso filtro.

  const filterData = params.slug; //slug vem do nome dos arquivos das rotas.

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    }; //retorno de um 404 tbm pode retornar um rediret aq.
  }

  const date = {
    year: numYear,
    month: numMonth,
  };

  const filteredEvents = await getFilteredEvents(date);

  return {
    props: {
      filteredEvents,
      date,
    },
  };
};

export default FilteredEventsPage;
