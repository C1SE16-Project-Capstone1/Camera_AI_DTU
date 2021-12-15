import React, { Component } from "react";
import "./HomePage.css";

import imgHome from "../../../images/home.svg";
import imgAbout from "../../../images/about.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="home" id="/">
          <div className="container home-page-one">
            <div className="row min-vh-100 align-items-center pt-5">
              <div className="col-md-6 img-home">
                <img src={imgHome} className="w-100" alt="" />
              </div>
              <div className="col-md-6 content text-center text-md-start pl-md-5 content-home">
                <h5>Prevention from Corona Virus (COVID-19)</h5>
                <span>stay home, stay safe</span>
                <h3>protect yourself from covid-19</h3>
                <a href="#" className="link-btn">
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="container home-page-two">
            <div className="row align-items-center flex-wrap-reverse">
              <div className="col-md-6 content">
                <h3>What Is Coronavirus Pandemic?</h3>
                <p>
                  Coronavirus disease (COVID-19) is an infectious disease caused
                  by the SARS-CoV-2 virus.
                </p>
                <p>
                  The best way to prevent and slow down transmission is to be
                  well informed about the disease and how the virus spreads.
                  Protect yourself and others from infection by staying at least
                  1 meter apart from others, wearing a properly fitted mask, and
                  washing your hands or using an alcohol-based rub frequently.
                  Get vaccinated when it’s your turn and follow local guidance.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/COVID-19_pandemic"
                  target="_blank"
                  className="link-btn"
                >
                  learn more
                </a>
              </div>
              <div className="col-md-6">
                <img src={imgAbout} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
