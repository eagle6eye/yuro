import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  render() {
    return (
      <form className="contact-card">
        <h2>Contact Us</h2>
        <input placeholder="Name" name="name" onChange={e => this.change(e)} />
        <input
          placeholder="Email"
          name="email"
          onChange={e => this.change(e)}
        />
        <input
          placeholder="Phone"
          name="phone"
          onChange={e => this.change(e)}
          type="number"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          onChange={e => this.change(e)}
        />
        <button className="btn" onClick={e => this.onSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}
