import React, { useEffect } from "react";
import Navigation from "../components/BottomNavigation";
import Button from "../components/Button";
import Particles from "../components/Particles";
import Project from "../components/Project";
import Projects from "../components/Projects";

import Contact from '../components/Contact'

import * as styles from "../styles/Home.module.css";

export default function Index() {

  useEffect(() => {
    let canvas = document.querySelector('canvas')

    canvas.setAttribute('style', 'width: 100% !important; height: 100% !important; position: absolute !important; z-index: 0 !important; top: 0px !important; left: 0px !important; pointer-events: initial;')

  }, [])

  return (
    <div styles={{ padding: "10rem" }}>
      <div id='home' className={styles.headerContainer} >
         <Particles />
        <div className={styles.headerContent}>
          <h1>Isaiah Fowler</h1>
          <h2>Fullstack Software Engineer</h2>
          <h4>
            {" "}
            <a

              target="_blank"
              href="https://isaiah-j.github.io/resume/resume.pdf"
            >
              Resume
            </a>{" "}
            /{" "}
            <a target="_blank" href="https://github.com/isaiah-j">
              GitHub
            </a>{" "}
            /{" "}
            <a target="_blank" href="https://www.linkedin.com/in/isaiah-fowler">
              LinkedIn
            </a>{" "}
          </h4>
          <div className={styles.buttons}></div>
        </div>
        <Navigation />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
