import React, { Component } from "react";
import "./HeaderNavigation.css";
import $ from "jquery";
import { Routes, Route, Link } from "react-router-dom";

export default class Menu extends Component {
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
        <header>
          <a href="/" className="logo">
            c<span className="fas fa-virus" />
            vid-19
          </a>
          <div id="menu" className="fas fa-bars" />
          <nav className="navbar">
            <Link className="active" to="/">
              Home
            </Link>
            <Link to="/prevent">prevent</Link>
            <Link to="/symptoms">symptoms</Link>
            <Link to="/precautions">precautions</Link>
            <Link to="/hand-wash">hand-wash</Link>
            <Link to="/over">Duy Tan University</Link>
            <Link to="/check">Check for Violation</Link>
          </nav>
        </header>
      </div>
    );
  }
}
