import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/add-event" element={<EventForm />} />
      </Routes>
    </Router>
  );
}

export default App;
