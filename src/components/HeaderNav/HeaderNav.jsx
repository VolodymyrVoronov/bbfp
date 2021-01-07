import React from "react";

import { NavLink } from "react-router-dom";

import "./HeaderNav.scss";

const routes = [
  { path: "/random-character", name: "Random character" },
  { path: "/all-characters", name: "All characters" },
  { path: "/find-a-character", name: "Find a character" },
  { path: "/episodes", name: "Episodes" },
  { path: "/quotes", name: "Quotes" },
];

const HeaderNav = React.memo((prosp) => {
  return (
    <div className="header-nav-container">
      {routes.map((route, index) => {
        const { path, name } = route;
        return (
          <NavLink
            key={name + index}
            to={path}
            className="header-nav-container__nav-btn"
            activeClassName="active-nav-btn"
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
});

export default HeaderNav;
