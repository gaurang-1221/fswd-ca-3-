import { useState } from "react";

function EventForm() {
  const [eventData, setEventData] = useState({ name: "", date: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });
    if (response.ok) {
      alert("Event added successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventData.name}
        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        required
      />
      <input
        type="date"
        value={eventData.date}
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
