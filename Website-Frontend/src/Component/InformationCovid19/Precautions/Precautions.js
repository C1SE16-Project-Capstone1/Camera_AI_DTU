import React, { Component } from "react";
import "./Precautions.css";

import imgDo1 from "../../../images/wash-your-hands.png";
import imgDo2 from "../../../images/face-mask.png";
import imgDo3 from "../../../images/doctor.png";

import imgDont1 from "../../../images/dont-img1.png";
import imgDont2 from "../../../images/dont-img2.png";
import imgDont3 from "../../../images/coronavirus.png";

export default class Precautions extends Component {
  render() {
    return (
      <div>
        <section className="precautions" id="precautions">
          <h1 className="heading">take precautions against covid-19</h1>
          <div className="columnP">
            <div className="box-container">
              <h3 className="title">things you should DO</h3>
              <div className="box">
                <img src={imgDo1} alt="" />
                <div className="info">
                  <h3>wash your hand</h3>
                  <p>
                    Wash your hands often. Use soap and water or an
                    alcohol-based hand sanitizer. Even at home, you should still
                    wash your hands often to keep yourself clean!!!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={imgDo2} alt="" />
                <div className="info">
                  <h3>always wear a mask</h3>
                  <p>
                    Wear a mask in public, especially when indoors or when
                    social distancing is not possible. Keep a safe distance from
                    others (at least 1 meter), even if they are not showing
                    symptoms.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={imgDo3} alt="" />
                <div className="info">
                  <h3>stay home during fever</h3>
                  <p>
                    Stay home when you feel unwell. When coughing or sneezing,
                    cover your nose and mouth with a tissue or your elbow. Seek
                    medical attention if you have a fever, cough, and difficulty
                    breathing. Be sure to call ahead so your healthcare provider
                    can direct you to the right medical facility. This helps
                    protect you and prevents the spread of viruses and other
                    infectious diseases.!
                  </p>
                </div>
              </div>
            </div>
            <div className="box-container">
              <h3 className="title">things you should NOT DO</h3>
              <div className="box">
                <img src={imgDont1} alt="" />
                <div className="info">
                  <h3>avoid close contact with animals</h3>
                  <p>
                    The virus can spread from people to animals during close
                    contact. More studies are needed to understand if and how
                    different animals could be affected by COVID-19. People with
                    suspected or confirmed COVID-19 should avoid contact with
                    animals, including pets, livestock, and wildlife.!!!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={imgDont2} alt="" />
                <div className="info">
                  <h3>avoid close contact with peoples</h3>
                  <p>
                    Human-to-human contact is the most common way that a person
                    with COVID-19 can infect other people. To limit exposure,
                    health organizations are urging people to keep safe
                    distances from each other and avoid touching others.!!!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={imgDont3} alt="" />
                <div className="info">
                  <h3>avoid crowded area</h3>
                  <p>
                    The practice of social distancing means staying home and
                    away from others as much as possible to help prevent spread
                    of COVID-19. The practice of social distancing encourages
                    the use of things such as online video and phone
                    communication instead of in-person contact.!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
