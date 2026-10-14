import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">MyCompany</span>
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;