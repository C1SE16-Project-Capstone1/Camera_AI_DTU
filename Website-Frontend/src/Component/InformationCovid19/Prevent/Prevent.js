import React, { Component } from "react";
import "./Prevent.css";
import pre1 from "../../../images/prevent-1.png";
import pre2 from "../../../images/prevent-2.png";
import pre3 from "../../../images/prevent-3.png";
import pre4 from "../../../images/prevent-4.png";
import pre5 from "../../../images/coronavirus1.png";
import pre6 from "../../../images/prevent-6.png";

export default class Prevent extends Component {
  render() {
    return (
      <div>
        <section className="prevent" id="prevent">
          <h1 className="heading">how to prevent virus</h1>
          <div className="box-container">
            <div className="box">
              <img src={pre1} alt="" className="prevent-img" />
              <h3>Check body temperature </h3>
              <p>
                On average it takes 5–6 days from when someone is infected with
                the virus for symptoms to show, however it can take up to 14
                days. So, regularly check your body temperature to prevent a
                pandemic.
              </p>
            </div>
            <div className="box">
              <img src={pre2} alt="" className="prevent-img" />
              <h3>Regularly clean the place</h3>
              <p>
                Cleaning with a household cleaner that contains soap or
                detergent reduces the amount of germs on surfaces and decreases
                risk of infection from surfaces. So you should regularly clean
                the place.
              </p>
            </div>
            <div className="box">
              <img src={pre3} alt="" className="prevent-img" />
              <h3>Avoid Contact With Peoples</h3>
              <p>
                Human-To-Human Contact Is The Most Common Way That A Person With
                COVID-19 Can Infect Other People. To Limit Exposure, Health
                Organizations Are Urging People To Keep Safe Distances From Each
                Other And Avoid Touching Others.!!!
              </p>
            </div>
            <div className="box">
              <img src={pre4} alt="" className="prevent-img" />
              <h3>wash your hand</h3>
              <p>
                Washing hands can keep you healthy and prevent the spread of
                respiratory and diarrheal infections from one person to the
                next.
              </p>
            </div>
            <div className="box">
              <img src={pre5} alt="" className="prevent-img" />
              <h3>covid-19 vaccination</h3>
              <p>
                COVID-19 vaccines can help end the pandemic. They are a key
                first step to end the COVID-19 pandemic so we can get back to
                doing the things we enjoy, with the people we love.
              </p>
            </div>
            <div className="box">
              <img src={pre6} alt="" className="prevent-img" />
              <h3>Wear A Face Mask</h3>
              <p>
                A face covering without vents or holes will also filter out
                particles containing the virus from inhaled and exhaled air,
                reducing the chances of infection.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
