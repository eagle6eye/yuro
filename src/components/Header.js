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
            <div>
              <img src={logo} height="160px" alt="logo" />
            </div>
          </NavLink>
        </div>
        <div className="nav-links">
          <div>
            <NavLink to="/about">
              <div>About us</div>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/programs">
              <div>Programs</div>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <div>Partners</div>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <div>Contact</div>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
