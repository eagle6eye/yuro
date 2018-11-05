import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="contact-header">
          <div className="contact-text">
            <h3>CONTACT US</h3>
            <h3>
              If you would like to support us or volunteer with us, we would
              love to hear from you. Please get in touch below
            </h3>
          </div>
          <div className="contact" />
        </main>
        <section className="contact-section">
          <Form />
          <div>telajsss</div>
        </section>

        <Footer />
      </div>
    );
  }
}
