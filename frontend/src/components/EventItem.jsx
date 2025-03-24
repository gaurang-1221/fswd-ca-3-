function EventItem({ event }) {
    return (
      <div>
        <h3>{event.name}</h3>
        <p>{new Date(event.date).toLocaleDateString()}</p>
      </div>
    );
  }
  
  export default EventItem;
  