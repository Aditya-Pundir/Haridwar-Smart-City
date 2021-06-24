import React from "react";
import "./Theme.css";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          title="Haridwar-News"
          activeClassName="navLinkActive"
        >
          HaridwarSmartCity
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div className="toggler toggler1"></div>
            <div className="toggler"></div>
            <div className="toggler"></div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                title="Weather"
                exact
                to="/weather"
                activeClassName="navLinkActive"
              >
                Weather
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                title="Jokes"
                to="/jokes"
                activeClassName="navLinkActive"
              >
                Jokes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                title="Covid19-Tracker"
                exact
                to="/covid"
                activeClassName="navLinkActive"
              >
                Covid Tracker
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
