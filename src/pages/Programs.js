import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Programs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutus">
          <h2>Mission</h2>
          <h4>
            To facilitate youth reintegration into society through positive
            learning, applying strong core values and life skills necessary to
            be successful. Our mission is to empower black youth who have a
            criminal record enter or re-enter the work force. We provide
            mentoring programs for Black and Indigenous youth aimed at breaking
            the cycle of going in and out of jail. Our ultimate goal is to help
            our youth become valued members of society and to be positive voices
            for further change in our neighbourhoods. It is not a secret that
            our justice system disproportionally punishes young offenders of
            african descent, further perpetuating this cycle that has hurt many
            families and robbing the youth of their future. We believe educating
            our youth by promoting Black-Indigenous history, culture, identity
            and leadership skills will inspire them to achieve greatness.
          </h4>
        </div>
        <Footer />
      </div>
    );
  }
}
