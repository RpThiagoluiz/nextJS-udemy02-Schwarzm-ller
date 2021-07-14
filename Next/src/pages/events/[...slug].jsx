import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import { Button } from "../../components/Button";
import { EventList } from "../../components/Events/List";
import { ResultsTitle } from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  //simple filter
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">
            Invalid filter.{`\n`} Please adjust your values!
          </p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events fond for the chosen filter!</p>
        </ErrorAlert>

        <Button link="/events">Show All Events</Button>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1); //!important o date comeca do 0 por isso o -1

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
