import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Error extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h2>
            The page that you have requested does not EXIST. Please double check
            the path.
          </h2>
        </div>
        <Footer />
      </div>
    );
  }
}
