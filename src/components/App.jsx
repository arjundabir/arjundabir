import React, { useState } from "react";
import "./css/App.css";

import Header from "./Header";
import Footer from "./Footer";
import Animation from "./Animation";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

import projects from "../projects.js";
console.log(projects);

export default function App() {
  let [scroll, setScroll] = useState(false);
  const mouseOver = () => {
    if (window.scrollY) {
      console.log(window.scrollY);
      setScroll(true);
    }
  };
  return (
    <>
      <div class="" onMouseOver={mouseOver}>
        <Header />
        <Animation />
        {!scroll && (
          <div id="anothertest" class="animate-bounce flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        )}

        <AboutMe />
        <div
          id="projects"
          class=" snap-start snap-mandatory flex justify-center flex-wrap"
        >
          {projects.map((project) => (
            <Projects
              link={project.link}
              image={project.image}
              date={project.date}
              title={project.title}
              content={project.content}
              teamMembers={project.teamMembers}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
