import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <NavLink to="/" exact activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to="/episodes" activeClassName="selected">
          EPISODES
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
