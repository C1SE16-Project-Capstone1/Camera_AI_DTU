import React, { Component } from "react";
import "./HeaderNavigation.css";
import $ from "jquery";
import { Routes, Route, Link, NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="/" className="logo">
            c<span className="fas fa-virus" />
            vid-19
          </a>
          <div id="menu" className="fas fa-bars" />
          <nav className="navbar">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/prevent">
              prevent
            </NavLink>
            <NavLink className="nav-link" to="/symptoms">
              symptoms
            </NavLink>
            <NavLink className="nav-link" to="/precautions">
              precautions
            </NavLink>
            <NavLink className="nav-link" to="/hand-wash">
              hand-wash
            </NavLink>
            <NavLink className="nav-link" to="/over">
              Duy Tan University
            </NavLink>
            <NavLink className="nav-link" to="/check">
              Check for Violation
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}
