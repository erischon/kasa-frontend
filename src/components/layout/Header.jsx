import { NavLink } from "react-router-dom";

import logo from "../../assets/kasa_logo.png";

const header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(page) => (page.isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(page) => (page.isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
