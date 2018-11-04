import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutus">
          <h2> --Our Mision--</h2>
          <h4>
            To inspire the forgotten youth in Canada and show them they Matter
            in this world.
          </h4>
          <h2> --About-- </h2>
          <h4>
            The Youth United Reintegration Organisation is a non-profit
            organization that is based in the GTA. It is an innovative community
            based organization for youth, particularly offenders of Black and
            Indigenous descent, who face a greater likelihood of discrimination.
            We aim to help all youth between the ages 12-29 focusing on Black
            and Indigenous youth as they are over represented within the
            criminal justice system. Our programs focus on rehabilitation,
            education, mental health and addictions, as well as facilitating
            youth engagement in society; with the hope of moving them toward
            employment. It is set up to help reduce youth crime, and to help
            them re-enter the labour market, with smooth integration into
            society.
          </h4>
        </div>

        <Footer />
      </div>
    );
  }
}
