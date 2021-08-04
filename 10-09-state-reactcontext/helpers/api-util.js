import { api } from "../services/api";

export async function getAllEvents() {
  const response = await fetch(`${api}/events.json`);
  const data = await response.json();

  const formatedData = Object.entries(data).map(([key, value]) => {
    return {
      id: key,
      ...value,
    };
  });

  return formatedData;

  // const events = [];

  // for (const key in data) {
  //   events.push({
  //     id: key,
  //     ...data[key],
  //   });
  // }

  // return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
