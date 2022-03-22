import React, { useEffect, useState } from "react";

import { makeStyles } from "@mui/styles";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import * as styles from "../styles/Nav.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgba(0, 0, 0, 0.493) !important",
  },
}));

export default function Navigation() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  useEffect(() => {
    let home = document.querySelector("#home");
    let contact = document.querySelector("#contact");
    let projects = document.querySelector("#projects");

    document.addEventListener("scroll", () => {
      if (checkVisible(home, 400)) setValue(0);

      if (checkVisible(projects, 400)) setValue(1);

      if (checkVisible(contact, 400)) setValue(2);
    });

    return () => {
      document.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={styles.container}>
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.appBar}
      >
        <BottomNavigationAction
          value="0"
          className={value == 0 ? styles.selected : styles.icon}
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            document.querySelector("#home").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />

        <BottomNavigationAction
          value="1"
          className={value == 1 ? styles.selected : styles.icon}
          label="Portfolio"
          icon={<GavelIcon />}
          onClick={() => {
            document.querySelector("#projects").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />

        <BottomNavigationAction
          value="2"
          className={value == 2 ? styles.selected : styles.icon}
          label="Contact"
          icon={<AddIcCallIcon />}
          onClick={() => {
            document.querySelector("#contact").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </BottomNavigation>
    </div>
  );
}

function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || "visible";

  var rect = elm.getBoundingClientRect() || 0;
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  return mode === "above" ? above : mode === "below" ? below : !above && !below;
}
