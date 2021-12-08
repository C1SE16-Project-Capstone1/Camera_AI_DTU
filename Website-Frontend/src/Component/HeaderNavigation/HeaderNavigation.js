import React, { Component } from "react";
import "./HeaderNavigation.css";
import $ from "jquery";
import {HashLink as NavLink} from 'react-router-hash-link'
import { Routes, Route, Link } from "react-router-dom";

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
            <NavLink smooth className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink smooth className="nav-link" to="/prevent">
              prevent
            </NavLink>
            <NavLink smooth className="nav-link" to="/symptoms">
              symptoms
            </NavLink>
            <NavLink smooth className="nav-link" to="/precautions">
              precautions
            </NavLink>
            <NavLink smooth className="nav-link" to="/hand-wash">
              hand-wash
            </NavLink>
            <NavLink smooth className="nav-link" to="/over">
              Duy Tan University
            </NavLink>
            <NavLink smooth className="nav-link" to="/check">
              Check for Violation
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}
