import React, { Component } from "react";
import "./CheckViolation.css";

import { useState, useEffect } from 'react';

import checking from "../../images/checking.jpg";
import checkinformation from "../../images/check-information.jpg";
import praise from "../../images/praise.jfif";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export default class Checklist extends Component {

  render() {

    function handleCLG() {
      var getAPI = "http://localhost:9999/check-violation?id=";

      let violationObject;
      var valueInput = document.getElementById("search-input-id");
      fetch(getAPI + valueInput.value)
        .then(function (response) {
          return response.json();
        })
        .then(function (objectJS) {
          violationObject = Object.assign({}, objectJS);
          const showCongra = document.getElementById("congratulations");
          const showInfor = document.getElementById(
            "violation-information-check"
          );
          if (violationObject.Violation === false) {
            showCongra.style.display = "flex";
            showInfor.style.display = "none";
          } else {
            showCongra.style.display = "none";
            showInfor.style.display = "block";
            let HTML = "";
            HTML = `<td>1</td>
              <td>${violationObject.data.IdStudent}</td>
              <td>${violationObject.data.NameStudent}</td>
              <td>${violationObject.data.Class}</td>
              <td>${violationObject.data.LastTimeViolation}</td>
              <td>${violationObject.data.NumberViolation}</td>
              <td>${violationObject.data.PhoneNumber}</td>`;

            const checkViolation = document.getElementById("myTable");
            checkViolation.innerHTML = HTML;
            console.log(violationObject.data.NameStudent);
          }
        });
    }

    return (
      <div>
        <section className="symptoms" id="violation-list">
          <div className="violation-form">
            <div className="column-content">
              <div className="content-title">
                <img src={checking} alt="" />
                <p className="content-title-require">
                  Please Enter <b className="td1"> Student ID</b> To Check
                  Violation Information !!!
                </p>
              </div>
              <div className="content-search">
                <p className="lable-input">
                  <b>Enter Student ID :</b>
                </p>
                <input
                  className="form-control"
                  id="search-input-id"
                  type="text"
                  placeholder="Enter Student ID"
                  aria-label="Search"
                />
                <button className="btn-search" onClick={handleCLG}>
                  Search
                </button>
              </div>
              <div className="violation-information-form">
                <p>Violation Information</p>
              </div>
              <div className="partition" />

              <div class="congratulations" id="congratulations">
                <img
                  src={checkinformation}
                  alt=""
                  class="congratulations-img"
                />
                <div class="congratulations-content">
                  <div class="congratulations-title">
                    <p>
                      Congratulations !!! You do not exist on the violation list
                    </p>
                  </div>
                  <div class="congratulation-praise">
                    <p>
                      You have had a very good sense of protecting yourself and
                      the community against the Covid-19 pandemic.
                    </p>
                    <p>Always keep the same spirit !!!</p>
                  </div>
                </div>
                <img src={praise} alt="" class="congratulations-img-right" />
              </div>
              <div class="violation-information-check" id="violation-information-check">
                <table class="table" id="check-violation">

                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Number</th>
                      <th scope="col">Student ID</th>
                      <th scope="col">Full Name</th>
                      <th scope="col">Class</th>
                      <th scope="col">Last Time of violation</th>
                      <th scope="col">Number of violation</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>

                  <tbody id="myTable"></tbody>

                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
