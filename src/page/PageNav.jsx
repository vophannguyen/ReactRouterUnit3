import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="blue">Blue</NavLink>
        </li>
        <li>
          <NavLink to="red"> Red</NavLink>
        </li>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
