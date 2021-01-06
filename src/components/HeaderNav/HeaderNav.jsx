import React from "react";

import { NavLink } from "react-router-dom";

import "./HeaderNav.scss";

const HeaderNav = React.memo((prosp) => {
  return (
    <div className="header-nav-container">
      <NavLink
        to="/random-character"
        className="header-nav-container__nav-btn"
        activeClassName="active-nav-btn"
      >
        Random character
      </NavLink>
      <NavLink
        to="/all-characters"
        className="header-nav-container__nav-btn"
        activeClassName="active-nav-btn"
      >
        All characters
      </NavLink>
      <NavLink
        to="/find-a-character"
        className="header-nav-container__nav-btn"
        activeClassName="active-nav-btn"
      >
        Find a character
      </NavLink>
      <NavLink
        to="/episodes"
        className="header-nav-container__nav-btn"
        activeClassName="active-nav-btn"
      >
        Episodes
      </NavLink>
      <NavLink
        to="/quotes"
        className="header-nav-container__nav-btn"
        activeClassName="active-nav-btn"
      >
        Quotes
      </NavLink>
    </div>
  );
});

export default HeaderNav;
