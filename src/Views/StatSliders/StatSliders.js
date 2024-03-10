import React from "react";
import Slider from "@mui/material/Slider";

import styles from "./stat-sliders.module.css";

import { statTitles } from "../../enums/statTitleEnums";

export const StatSliders = ({ setWeights, weights }) => {
  const handleSlide = (event, newValue) => {
    setWeights({
      ...weights,
      [event.target.name]: {
        enable: weights[event.target.name].enable,
        value: newValue,
      },
    });
  };

  function displaySliders() {
    return Object.keys(weights).map((key, index) => {
      if (weights[key].enable) {
        return (
          <div className={styles.slider} key={index}>
            <label>{statTitles[key]}</label>
            <div className={styles.sliderBarHolder}>
              <Slider
                name={key}
                onChange={handleSlide}
                valueLabelDisplay="auto"
                max={100}
                min={0}
                value={weights[key].value}
              />
            </div>
          </div>
        );
      }
    });
  }

  return <div className={styles.statSliders}>{displaySliders()}</div>;
};
