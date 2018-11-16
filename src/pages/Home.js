import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="hero">
          <div>
            <h1>Youth United Reintegration Organization</h1>
            <h3>Re-shaping the Narrative of Black Youth in Canada</h3>
          </div>
          <a href="#" className="action-btn">
            More Info
          </a>
        </div>

        <section className="section">
          <div className="about">
            <h3>PROBLEM FACING US</h3>
            <h2>
              The Youth United Reintegration Organisation is a non-profit
              organisation that is based in the GTA. It is an innovative
              community based organisation for youth offenders particularly
              Indigenous and Black youth discrimination. We aim to help all
              youth between the ages 12-29 focusing on Black and Indigenous
              youth as they are over represented within the criminal justice
              system.{" "}
            </h2>
          </div>
          <div className="goals">
            <h3>OUR OBJECTIVES</h3>
            <ol className="goal">
              <li>Empower Youth</li>
              <li>Create Programs</li>
              <li>Promote Skills/Job Training</li>
              <li>Instill passion for Learning</li>
              <li>Eliminate the cycle of crime</li>
            </ol>
          </div>
          <div className="info">
            <h3>PROGRAMS</h3>
            <h2>
              Our program is designed to aid incarcerated youths and to improve
              the lives of at risk kids by ensuring quality interactive formats.
              It’s our goal to encourage them to become involved in their
              community and have a positive impact through participation in
              community activities. Positive reinforcement is an instrument that
              we opt to introduce in our youth transitioning journey.{" "}
            </h2>
          </div>
          <section className="programs">
            <div className="program skills">
              <h3>Pre-employment Skills Training</h3>
              <ul>
                <li> leadership/Mentoring Programs</li>
                <li>Helping with resumes and cover letter</li>
                <li> Preparing and teaching youth to dress professionally </li>
                <li> Job search and Job Fairs Placement</li>
                <li>Life Skills programs: cooking, sewing, and baking</li>
              </ul>
            </div>
            <div className="program health">
              <h3>Physical &amp; Mental Health</h3>
              <p>
                We’ve set programs to help Youth who are coming out jail or are
                in conflict with the law to help deal with their mental health
                issues.
              </p>
            </div>
            <div className="program community">
              <h3>Community Outreach</h3>
              <ul>
                <li>
                  {" "}
                  Visit the jails to educative the youth about the resources
                  that are available for them within the society and how they
                  can access them ones they are out of jail
                </li>
                <li>
                  Help them re-enter the labour market towards employment{" "}
                </li>
                <li> Cultural Event and black history programs </li>
                <li>
                  {" "}
                  Youth sharing real life stories about jail system to motivate,
                  inspire other youth
                </li>
              </ul>
            </div>
            <div className="program parents">
              <h3>Concern Parents Program</h3>
              <ul>
                <li> leadership/Mentoring Programs</li>
                <li>Helping with resumes and cover letter</li>
                <li> Preparing and teaching youth to dress professionally </li>
                <li> Job search and Job Fairs Placement</li>
                <li>Life Skills programs: cooking, sewing, and baking</li>
              </ul>
            </div>
            <div className="program after-school">
              <h3>After School Program </h3>
              <p>
                Help kids with home work, cultural classes, sports, recreational
                activities such as Marshal arts, Soccer, and Summer camp etc. We
                work with at risk kids by indulging them in mentoring,
                counseling, inspiring, and motivation.{" "}
              </p>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}
