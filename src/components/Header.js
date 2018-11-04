import React, { Component } from "react";
import logo from "../images/logo.png";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Contact from "../pages/Contact";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <a>
              <img src={logo} height="160px" alt="logo" />
            </a>
          </NavLink>
        </div>
        <div className="nav-links">
          <div>
            <NavLink to="/about">
              <a>About us</a>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/programs">
              <a href="#">Programs</a>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <a href="#">Partners</a>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <a href="#">Contact</a>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
