import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">All Events</Link>
      <Link to="/add-event">Add Event</Link>
    </nav>
  );
}

export default Navigation;
