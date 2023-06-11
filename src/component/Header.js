import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            ALL
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/your/1">
            YOUR
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/blocked">
            BLOCKED
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
