import React from "react";

import Button from "@mui/material/Button";

import hap from "../images/hap.png";

import fps from '../images/fps.png'

import GitHubIcon from '@mui/icons-material/GitHub';

import * as styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div>
      <div className={styles.projectsContainer}>
        <img
          className={styles.img}
          style={{
            cursor: "pointer",
          }}
          onClick={() => window.open('https://hapdev.vercel.app/landing')}
          src={hap}
        />
        <div className={styles.projectDescription}>
          <h1           onClick={() => window.open('https://hapdev.vercel.app/landing')}
 className={styles.title}>Housing Assistance Portal</h1>
          <p className={styles.description}>
            The Housing Assistance Portal connects applicants in need with the
            housing resources they qualify for, all in one, easy-to-use
            location.
          </p>
          <div className={styles.buttons}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => window.open('https://github.com/fp-rap-build/hap', )}
              type="contained"
              endIcon={<GitHubIcon style={{marginBottom: '4px'}} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <img
          className={styles.img}
          style={{
            cursor: "pointer",
          }}
          onClick={() => window.open('https://fpspokane.vercel.app/')}
          src={fps}
        />
        <div className={styles.projectDescription}>
          <h1           onClick={() => window.open('https://fpspokane.vercel.app/')}
 className={styles.title}>Family Promise of Spokane</h1>
          <p className={styles.description}>
            Website revamp using GatsbyJS + WordPress CMS
          </p>
          <div className={styles.buttons}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => window.open('https://github.com/fp-rap-build/fpspokane')}
              type="contained"
              endIcon={<GitHubIcon style={{marginBottom: '4px'}} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
