import React, { useState } from "react";
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import Slider from "@mui/material/Slider";

import styles from "./stat-adjustment.module.css";

import { statTitles } from "../../enums/statTitleEnums";
import { Chips } from "../../Components/Chips/Chips";

export const StatAdjustment = ({ setWeights, weights }) => {
  function handleCheck(name) {
    setWeights({
      ...weights,
      [name]: { enable: !weights[name].enable, value: 0 },
    });
  }

  return (
    <>
      <div className={styles.statAdjustment}>
        <Chips
          isChecked={weights.offensiveEfficiency.enable}
          name="offensiveEfficiency"
          setIsChecked={(e) => handleCheck("offensiveEfficiency")}
          text="Offensive Efficiency"
        />
        <Chips
          isChecked={weights.defensiveEfficiency.enable}
          name="defensiveEfficiency"
          setIsChecked={(e) => handleCheck("defensiveEfficiency")}
          text="Defensive Efficiency"
        />
        <Chips
          isChecked={weights.adjustedEfficiencyMargin.enable}
          name="adjustedEfficiencyMargin"
          setIsChecked={(e) => handleCheck("adjustedEfficiencyMargin")}
          text="Adjusted Efficiency Margin"
        />
        <Chips
          isChecked={weights.adjustedTempo.enable}
          name="adjustedTempo"
          setIsChecked={(e) => handleCheck("adjustedTempo")}
          text="Adjusted Tempo"
        />
        <Chips
          isChecked={weights.points.enable}
          name="points"
          setIsChecked={(e) => handleCheck("points")}
          text="Points"
        />
        <Chips
          isChecked={weights.rebounds.enable}
          name="rebounds"
          setIsChecked={(e) => handleCheck("rebounds")}
          text="Rebounds"
        />
        <Chips
          isChecked={weights.fieldGoalPercentage.enable}
          name="fieldGoalPercentage"
          setIsChecked={(e) => handleCheck("fieldGoalPercentage")}
          text="Field Goal Percentage"
        />
        <Chips
          isChecked={weights.opponentPoints.enable}
          name="opponentPoints"
          setIsChecked={(e) => handleCheck("opponentPoints")}
          text="Opponent Poins"
        />
        <Chips
          isChecked={weights.opponentRebounds.enable}
          name="opponentRebounds"
          setIsChecked={(e) => handleCheck("opponentRebounds")}
          text="Opponent Rebounds"
        />
        <Chips
          isChecked={weights.opponentFieldGoalPercentage.enable}
          name="opponentFieldGoalPercentage"
          setIsChecked={(e) => handleCheck("opponentFieldGoalPercentage")}
          text="Opponent Field Goal Percentage"
        />
        <Chips
          isChecked={weights.pointsDifferential.enable}
          name="pointsDifferential"
          setIsChecked={(e) => handleCheck("pointsDifferential")}
          text="Points Differential"
        />
        <Chips
          isChecked={weights.reboundsDifferential.enable}
          name="reboundsDifferential"
          setIsChecked={(e) => handleCheck("reboundsDifferential")}
          text="Rebounds Differential"
        />
        <Chips
          isChecked={weights.threePointPercentage.enable}
          name="threePointPercentage"
          setIsChecked={(e) => handleCheck("threePointPercentage")}
          text="Three Point Percentage"
        />
        <Chips
          isChecked={weights.assists.enable}
          name="assists"
          setIsChecked={(e) => handleCheck("assists")}
          text="Assists"
        />
        <Chips
          isChecked={weights.steals.enable}
          name="steals"
          setIsChecked={(e) => handleCheck("steals")}
          text="Steals"
        />
        <Chips
          isChecked={weights.turnoverDifferential.enable}
          name="turnoverDifferential"
          setIsChecked={(e) => handleCheck("turnoverDifferential")}
          text="Turnover Differential"
        />
      </div>
    </>
  );
};
