import React from "react";
import style from "./bracket-matchup.module.css";

export const BracketMatchup = ({
  highseed,
  lowseed,
  left,
  round,
  id,
  gameMatchups,
  setGameMatchups,
}) => {
  const [name, setName] = React.useState("");
  const [teamPowerScore, setTeamPowerScore] = React.useState("");

  React.useEffect(() => {
    if (highseed?.teamPowerScore > lowseed?.teamPowerScore) {
      let placeholder = gameMatchups;
      for (let object of placeholder) {
        if (object.id == id) {
          object.name = highseed.name;
          object.teamPowerScore = highseed.teamPowerScore;
        }
      }
    } else {
      let placeholder = gameMatchups;
      for (let object of placeholder) {
        if (object.id == id) {
          object.name = lowseed?.name;
          object.teamPowerScore = lowseed?.teamPowerScore;
        }
      }
    }
  }, [
    highseed?.teamPowerScore,
    lowseed?.teamPowerScore,
    highseed?.name,
    lowseed?.name,
  ]);

  return (
    <div
      className={style.bracketMatchup}
      style={{
        height: `calc(75px *  ${Math.pow(2, round - 1)})`,
        marginTop: `calc(75px * ${Math.pow(2, round - 1)}`,
        borderLeft: left ? "none" : "1px solid black",
        borderRight: left ? "1px solid black" : "none",
      }}
    >
      <div className={style.highSeed} style={{ right: left ? "" : "0px" }}>
        {highseed?.name}: {highseed?.teamPowerScore}
      </div>
      <div className={style.lowSeed} style={{ right: left ? "" : "0px" }}>
        {lowseed?.name}: {lowseed?.teamPowerScore}
      </div>
    </div>
  );
};
