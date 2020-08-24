import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          Java Express Coffee Shop
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/coffee" className="nav-link">
                Coffee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create" className="nav-link">
                Create Coffee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/update" className="nav-link">
                Update Coffee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/delete" className="nav-link">
                Remove Entry
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
