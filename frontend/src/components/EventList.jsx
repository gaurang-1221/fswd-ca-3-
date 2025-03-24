import { useEffect, useState } from "react";
import EventItem from "./EventItem";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
