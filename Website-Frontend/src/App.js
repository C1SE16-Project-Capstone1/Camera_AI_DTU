import "./App.css";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Menu from "./Component/HeaderNavigation/HeaderNavigation";
import Footer from "./Component/FooterWebsite/FooterWebsite";
import SummaryCovid from "./Component/InformationCovid19/SummaryCovid";
import CheckValidation from "./Component/CheckViolation/CheckViolation";
import Summary from "./Component/InformationDTU/SummaryDTU/Summary";
import { Routes, Route } from "react-router-dom";
import SummaryPage from "./Component/InformationDTU/Pages/SummaryPage/SummaryPage";
import Team from "./Component/InformationDTU/Pages/Team/Team";
import Overview from "./Component/InformationDTU/Pages/Overview/Overview";
import Mission from "./Component/InformationDTU/Pages/Mission/Mission";
import Traditional from "./Component/InformationDTU/Pages/Traditional/Traditional";
import Research from "./Component/InformationDTU/Pages/Research/Research";
import Prevent from "./Component/InformationCovid19/Prevent/Prevent";
import Hand from "./Component/InformationCovid19/Hand/Hand";
import Precautions from "./Component/InformationCovid19/Precautions/Precautions";
import Symptoms from "./Component/InformationCovid19/Symptoms/Symptoms";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 350px;
  color: 0BA587;
  border-color: 0BA587;`
;

function App() {
  $(document).ready(function () {
    $("#menu").click(function () {
      $(this).toggleClass("fa-times");
      $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("load scroll", function () {
      $("#menu").removeClass("fa-times");
      $(".navbar").removeClass("nav-toggle");

      if ($(window).scrollTop() > 0) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }

      if ($(window).scrollTop() > 0) {
        $(".scroll-top").show();
      } else {
        $(".scroll-top").hide();
      }

      $("section").each(function () {
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr("id");
        let height = $(this).height();

        if (top > offset && top < offset + height) {
          $(".navbar a").removeClass("active");
          $(".navbar").find(`[href="#${id}"]`).addClass("active");
        }
      });
    });

    // scoll
    $('a[href*="#"]').on("click", function (e) {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
      );
    });
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <div className="App">
      {
        loading ?
          <HashLoader css={override} loading={loading} size={50} />
          :
          <div>
            <Menu />
            <Routes>
              <Route exact path="/" loading element={<SummaryCovid />} />
              <Route path="/over" element={<Summary />} />
              <Route path="/check" element={<CheckValidation />} />
              <Route path="/summarypage" element={<SummaryPage />}>
                <Route path="overview" element={<Overview />} />
                <Route path="mission" element={<Mission />} />
                <Route path="traditional" element={<Traditional />} />
                <Route path="research" element={<Research />} />
                <Route path="team" element={<Team />} />
              </Route>
              <Route path="/prevent" element={<Prevent />} />
              <Route path="/hand-wash" element={<Hand />} />
              <Route path="/precautions" element={<Precautions />} />
              <Route path="/symptoms" element={<Symptoms />} />
            </Routes>
            <Footer />
          </div>
      }

    </div>
  );
}


export default App;
