import React, { Component } from "react";
import $ from "jquery";
import Hand from "./Hand/Hand";
import Home from "./HomePage/HomePage";
import Precautions from "./Precautions/Precautions";
import Prevent from "./Prevent/Prevent";
import Symptoms from "./Symptoms/Symptoms";

function TongHop() {
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

export default TongHop;