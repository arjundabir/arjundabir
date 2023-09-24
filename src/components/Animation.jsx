import React from "react";
import "./css/Animation.css";
import Spline from "@splinetool/react-spline";

export default function Animation() {
  return (
    <div>
      {/* <h1 id="top">Hello! I am</h1> */}
      <Spline
        style={{ paddingLeft: "1rem" }}
        scene="https://prod.spline.design/Q8Uk5cPjxxwNw7Ej/scene.splinecode"
      />
      {/* <h1 id="bottom">Welcome to my website! </h1> */}
      <div id="scroll-prompt">
        <h2>See my projects</h2>
      </div>
    </div>
  );
}
