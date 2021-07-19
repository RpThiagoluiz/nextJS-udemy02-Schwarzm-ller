//import { getFeaturedEvents } from "../dummy-data"; -> pegar do firebase agora
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

//Melhor forma de fazer no next, pre-redering, para melhorar o SEO

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  //Como queremos ela no pre-rendiring.
  //Vamos adcionar nossa funcao ao getStaticProps

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      //pode dar qlq nome, demos o msm nome da funcao ou do return
      //events: featuredEvents
      featuredEvents,
    },
    revalidate: 60 * 30, //30 min
  };
};

export default HomePage;
