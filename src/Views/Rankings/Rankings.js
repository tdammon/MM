import React from "react";
import styles from "./rankings.module.css";

export const Rankings = ({ data, setData, weights }) => {
  function calculateRanking() {
    const tempData = data;
    tempData.map((element) => {
      element.teamPowerScore = Math.floor(
        element.adjustedEfficiencyMargin *
          weights.adjustedEfficiencyMargin.value +
          element.adjustedTempo * weights.adjustedTempo.value -
          element.defensiveEfficiency * weights.defensiveEfficiency.value +
          element.fieldGoalPercentage * weights.fieldGoalPercentage.value +
          element.offensiveEfficiency * weights.offensiveEfficiency.value -
          element.opponentFieldGoalPercentage *
            weights.opponentFieldGoalPercentage.value -
          element.opponentPoints * weights.opponentPoints.value -
          element.opponentRebounds * weights.opponentRebounds.value +
          element.points * weights.points.value +
          element.pointsDifferential * weights.pointsDifferential.value +
          element.rebounds * weights.rebounds.value +
          element.reboundsDifferential * weights.reboundsDifferential.value
      );

      // setData({ ...data, teamPowerScore: teamPowerScore });
    });

    const myData = []
      .concat(tempData)
      .sort((a, b) => (a.teamPowerScore < b.teamPowerScore ? 1 : -1))
      .map((item, i) => (
        <div key={i}>
          {item.name} : {item.teamPowerScore}
        </div>
      ));

    return myData;
  }

  return <div className={styles.rankings}>{calculateRanking()}</div>;
};
