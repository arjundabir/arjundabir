import React from "react";
import "./css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Animation from "./Animation";
import Projects from "./Projects";

export default function App() {
  return (
    <>
      <Header />
      <Animation />
      <Projects />
      <Footer />
    </>
  );
}
