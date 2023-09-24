import React from "react";
import "./css/Animation.css";
import Spline from "@splinetool/react-spline";

export default function Animation() {
  return (
    <div id="test">
      <Spline
        style={{ paddingLeft: "1rem" }}
        scene="https://prod.spline.design/Q8Uk5cPjxxwNw7Ej/scene.splinecode"
      />
    </div>
  );
}
