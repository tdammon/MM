import React, { useState } from "react";
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import Slider from "@mui/material/Slider";

import styles from "./stat-adjustment.module.css";

import { statTitles } from "../../enums/statTitleEnums";

export const StatAdjustment = ({ setWeights, weights }) => {
  function handleCheck({ name, checked }) {
    setWeights({
      ...weights,
      [name]: { enable: checked, value: 0 },
    });
  }

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
        console.log(statTitles[key]);
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

  return (
    <>
      <div className={styles.statAdjustment}>
        <Checkbox
          isChecked={weights.offensiveEfficiency.enable}
          name="offensiveEfficiency"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Offensive Efficiency"
        />
        <Checkbox
          isChecked={weights.defensiveEfficiency.enable}
          name="defensiveEfficiency"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Defensive Efficiency"
        />
        <Checkbox
          isChecked={weights.adjustedEfficiencyMargin.enable}
          name="adjustedEfficiencyMargin"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Adjusted Efficiency Margin"
        />
        <Checkbox
          isChecked={weights.adjustedTempo.enable}
          name="adjustedTempo"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Adjusted Tempo"
        />
        <Checkbox
          isChecked={weights.points.enable}
          name="points"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Points"
        />
        <Checkbox
          isChecked={weights.rebounds.enable}
          name="rebounds"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Rebounds"
        />
        <Checkbox
          isChecked={weights.fieldGoalPercentage.enable}
          name="fieldGoalPercentage"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Field Goal Percentage"
        />
        <Checkbox
          isChecked={weights.opponentPoints.enable}
          name="opponentPoints"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Opponent Poins"
        />
        <Checkbox
          isChecked={weights.opponentRebounds.enable}
          name="opponentRebounds"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Opponent Rebounds"
        />
        <Checkbox
          isChecked={weights.opponentFieldGoalPercentage.enable}
          name="opponentFieldGoalPercentage"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Opponent Field Goal Percentage"
        />
        <Checkbox
          isChecked={weights.pointsDifferential.enable}
          name="pointsDifferential"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Points Differential"
        />
        <Checkbox
          isChecked={weights.reboundsDifferential.enable}
          name="reboundsDifferential"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Rebounds Differential"
        />
      </div>
      <div className={styles.statAdjustment}>{displaySliders()}</div>
    </>
  );
};
