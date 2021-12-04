import React, { Component } from "react";
import "./Hand.css";

import imgMain from "../../../images/wash-hands1.png";
import wash1 from "../../../images/wash-a.png";
import wash2 from "../../../images/wash-b.png";
import wash3 from "../../../images/wash-c.png";
import wash4 from "../../../images/wash-d.png";
import wash5 from "../../../images/wash-e.png";
import wash6 from "../../../images/wash-f.png";

export default class Hand extends Component {
  render() {
    return (
      <div>
        <section className="hand-wash" id="hand-wash">
          <h1 className="heading">how to wash hand properly</h1>
          <div className="columnH">
            <div className="box-container">
              <div className="box">
                <img src={wash1} alt="" />
                <h3>water and soap</h3>
              </div>
              <div className="box">
                <img src={wash2} alt="" />
                <h3>palm to palm</h3>
              </div>
              <div className="box">
                <img src={wash3} alt="" />
                <h3>Between Fingurs</h3>
              </div>
              <div className="box">
                <img src={wash4} alt="" />
                <h3>Focus on Thumbs</h3>
              </div>
              <div className="box">
                <img src={wash5} alt="" />
                <h3>Back of Hands</h3>
              </div>
              <div className="box">
                <img src={wash6} alt="" />
                <h3>Focus on wrist</h3>
              </div>
            </div>
            <div className="main-image">
              <img src={imgMain} alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
