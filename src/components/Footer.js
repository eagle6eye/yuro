import React, { Component } from "react";
import "../app.css";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footers">
          <h2>About</h2>
          <h4>
            <NavLink to="/about">
              <a href="#">About</a>
            </NavLink>
          </h4>
          <h4>
            <a href="#">Our Team</a>
          </h4>
          <h4>
            <a href="#">Mission</a>
          </h4>
        </div>
        <div className="footers">
          <h2>Programs</h2>
          <h4>
            <a href="#">Job Skills</a>
          </h4>
          <h4>
            <a href="#">Physical and Mental Health</a>
          </h4>
          <h4>
            <a href="#">After-School Programs</a>
          </h4>
        </div>
        <div className="footers">
          <h2>Support</h2>
          <h4>
            <a href="#">Community Outreach</a>
          </h4>
          <h4>
            <a href="#">Parents Info</a>
          </h4>
          <h4>
            <a href="#">What we do</a>
          </h4>
        </div>
        <div className="footers">
          <h2>
            Join our Email list to receive our latest news and stores directly
          </h2>
        </div>
      </footer>
    );
  }
}
