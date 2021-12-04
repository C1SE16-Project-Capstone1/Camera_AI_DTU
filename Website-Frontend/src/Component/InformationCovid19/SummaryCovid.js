import React, { Component } from "react";
import $ from "jquery";
import Hand from "./Hand/Hand";
import Home from "./HomePage/HomePage";
import Precautions from "./Precautions/Precautions";
import Prevent from "./Prevent/Prevent";
import Symptoms from "./Symptoms/Symptoms";

export default class TongHop extends Component {
  render() {
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
    return (
      <div>
        <Home />
        <Prevent />
        <Symptoms />
        <Precautions />
        <Hand />
      </div>
    );
  }
}
