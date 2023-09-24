import React from "react";
import "./css/Animation.css";
import Spline from "@splinetool/react-spline";

export default function Animation() {
  return (
    <div>
      <h1 class="center" id="top">
        Hello I'm
      </h1>
      <Spline
        style={{ paddingLeft: "1rem" }}
        scene="https://prod.spline.design/Q8Uk5cPjxxwNw7Ej/scene.splinecode"
      />
      <h1 class="center" id="bottom">
        Welcome to my website!{" "}
      </h1>
    </div>
  );
}
