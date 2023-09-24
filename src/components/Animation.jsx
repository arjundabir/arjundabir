import React from "react";
import "./css/Animation.css";
import Spline from "@splinetool/react-spline";

export default function Animation() {
  return (
    <div>
      <Spline
        style={{ paddingLeft: "1rem" }}
        scene="https://prod.spline.design/Q8Uk5cPjxxwNw7Ej/scene.splinecode"
      />
      <div id="scroll-prompt">
        <h2 class="text-5xl font-medium text-inherit flex justify-start pt-6 pl-12">
          My Projects
        </h2>
      </div>
    </div>
  );
}
