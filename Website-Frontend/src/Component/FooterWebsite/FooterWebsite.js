import React, { Component } from "react";
import "./FooterWebsite.css";
import imgScoll from "../../images/scroll-img.png";
import Overview from "../InformationDTU/Pages/Overview/Overview";
import { Link } from "react-router-dom";
import ScrollToTop from "../InformationDTU/Pages/SideNavigation/ScrollTop";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="box-container">
            <div className="box box-content">
              <h3>about project</h3>
              <p>
                DTU AI Camera allows to easily detect students not wearing a
                mask or wearing a mask incorrectly automatically, reducing the
                supervisor's workload, avoiding situations where omission when
                there are many students.In the pandemic COVID-19, DTU AI Camera
                will help raise awareness and responsibility of Duy Tan
                University students in specifics and improve community health in
                general.!!!
              </p>
            </div>
            <div className="box">
              <h3>follow us</h3>
              <a href="#">
                <i className="fab fa-facebook footer-icon" />
                facebook
              </a>
              <a href="#">
                <i className="fab fa-twitter-square footer-icon" />
                twitter
              </a>
              <a href="#">
                <i className="fab fa-instagram-square footer-icon" />
                instagram
              </a>
              <a href="#">
                <i className="fab fa-linkedin footer-icon" />
                linkedin
              </a>
              <a href="#">
                <i className="fab fa-youtube footer-icon" />
                youtube
              </a>
            </div>
            <div className="box">
              <h3>quick links</h3>
              <Link to="/">
                <i className="fas fa-home footer-icon" />
                home
              </Link>
              <Link to="/prevent">
                <i className="fas fa-link footer-icon" />
                prevent
              </Link>
              <Link to="symptoms">
                <i className="fas fa-link footer-icon" />
                symptoms
              </Link>
              <Link to="/precautions">
                <i className="fas fa-link footer-icon" />
                precautions
              </Link>
              <Link to="/hand-wash">
                <i className="fas fa-hands footer-icon" />
                hand-wash
              </Link>
              <Link to="/over">
                <i className="fas fa-university footer-icon" />
                Duy Tan University
              </Link>
              <Link to="/check">
                <i className="fas fa-search footer-icon" />
                Check For Violation
              </Link>
            </div>
            <div className="box box-content">
              <h3>Duy Tan University</h3>
              <p>
                Duy Tan University is the first private university in Central
                Vietnam, established in 1994. The university is present in a
                number of university rankings such as: QS Rankings, CWUR, URAP,
                Nature Index, ShanghaiRanking Consultancy.
              </p>
              <p>
                Phone Number: (+84) 236.3650403 - (+84) 236.3827111{" "}
                <i className="fas fa-phone-square" />
              </p>
              <Link
                className="footer-readmore"
                to="/summarypage/overview"
                element={<Overview />}
              >
                Read More
              </Link>
            </div>
          </div>
          <h1 className="credit">
            created by <a href="#">C1SE.16 Team</a> ?? copyright @ 2021
          </h1>
        </div>

        <Link to className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
          <img src={imgScoll} alt="" />
        </Link>
        {/* <a href className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
          <img src={imgScoll} alt="" />
        </a> */}
      </div>
    );
  }
}
