import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="NavBar">
          <NavLink className="NavLink" exact to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" exact to="/sodas">
            Sodas
          </NavLink>
          <NavLink className="NavLink" exact to="/chips">
            Chips
          </NavLink>
          <NavLink className="NavLink" exact to="/snickers">
            Snickers
          </NavLink>
        </nav>
      );
};

export default Navbar;