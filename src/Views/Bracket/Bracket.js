import React from "react";
import styles from "./bracket.module.css";
import { BracketMatchup } from "../../Components/BracketMatchup/BracketMatchup";

export const Bracket = ({ data, gameMatchups, setGameMatchups }) => {
  const [secondRound, setSecondRound] = React.useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [thirdRound, setThirdRound] = React.useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [fourthRound, setFourthRound] = React.useState([{}, {}, {}, {}]);
  const [roundWinners, setRoundWinners] = React.useState([
    { name: "", teamPowerScore: "" },
    { name: "", teamPowerScore: "" },
    { name: "", teamPowerScore: "" },
    { name: "", teamPowerScore: "" },
  ]);

  function getTeam(name) {
    for (let item of data) {
      if (item.name === name) {
        return item;
      }
    }
    return { name: "Undefined" };
  }

  function displaySecondRound(quarter) {
    return secondRound?.map(
      (match, index) =>
        index >= (quarter - 1) * 4 &&
        index < (quarter - 1) * 4 + 4 && (
          <BracketMatchup
            highseed={match[0]}
            lowseed={match[1]}
            round={2}
            id={index + 33}
            setGameMatchups={setGameMatchups}
            gameMatchups={gameMatchups}
            left={quarter < 3}
          />
        )
    );
  }

  function displayThirdRound(quarter) {
    return thirdRound?.map(
      (match, index) =>
        index >= (quarter - 1) * 2 &&
        index < (quarter - 1) * 2 + 2 && (
          <BracketMatchup
            highseed={match[0]}
            lowseed={match[1]}
            round={3}
            id={index + 49}
            setGameMatchups={setGameMatchups}
            gameMatchups={gameMatchups}
            left={quarter < 3}
          />
        )
    );
  }

  function displayFourthRound(quarter) {
    return fourthRound?.map(
      (match, index) =>
        index >= quarter - 1 &&
        index < quarter - 1 + 1 && (
          <BracketMatchup
            highseed={match[0]}
            lowseed={match[1]}
            round={4}
            id={index + 57}
            setGameMatchups={setGameMatchups}
            gameMatchups={gameMatchups}
            left={quarter < 3}
          />
        )
    );
  }

  function getPairs(index1, index2) {
    const pairs = [];
    for (let i = index1; i < index2; i += 2) {
      pairs.push([gameMatchups[i], gameMatchups[i + 1]]);
    }
    return pairs;
  }

  const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

  async function generateArray() {
    const matchups2 = getPairs(0, 31);
    const matchups3 = getPairs(32, 47);
    const matchups4 = getPairs(48, 55);
    setSecondRound(matchups2);
    await wait();
    setThirdRound(matchups3);
    await wait();
    setFourthRound(matchups4);
    await wait();

    setRoundWinners([
      {
        name: gameMatchups[56].name,
        teamPowerScore: gameMatchups[56].teamPowerScore,
      },
      {
        name: gameMatchups[57].name,
        teamPowerScore: gameMatchups[57].teamPowerScore,
      },
      {
        name: gameMatchups[58].name,
        teamPowerScore: gameMatchups[58].teamPowerScore,
      },
      {
        name: gameMatchups[59].name,
        teamPowerScore: gameMatchups[59].teamPowerScore,
      },
    ]);
  }

  React.useEffect(() => {}, [secondRound, thirdRound, fourthRound]);

  return (
    <>
      <div className={styles.bracket}>
        <div style={{ display: "flex", alignItems: "start" }}>
          <button
            onClick={generateArray}
            style={{
              backgroundColor: "black",
              padding: "10px 20px",
              borderRadius: "10px",
              color: "white",
              border: "none",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Generate Bracket
          </button>
        </div>
        <h1>MIDWEST</h1>
        <div className={styles.bracketQuarter}>
          <div className={styles.bracketColumn}>
            <BracketMatchup
              highseed={getTeam("Purdue")}
              lowseed={getTeam("Norfolk State")}
              round={1}
              id="1"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Texas Tech")}
              lowseed={getTeam("Boise State")}
              round={1}
              id="2"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Clemson")}
              lowseed={getTeam("Princeton")}
              round={1}
              id="3"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Kentucky")}
              lowseed={getTeam("Appalachian State")}
              round={1}
              id="4"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Wisconsin")}
              lowseed={getTeam("Indiana State")}
              round={1}
              id="5"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Marquette")}
              lowseed={getTeam("Charleston")}
              round={1}
              id="6"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />

            <BracketMatchup
              highseed={getTeam("Nevada")}
              lowseed={getTeam("Mississippi State")}
              round={1}
              id="7"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("ISU")}
              lowseed={getTeam("Sam Houston")}
              round={1}
              id="8"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px / 2)" }}
          >
            {displaySecondRound(1)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px - (75px / 2))" }}
          >
            {displayThirdRound(1)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-225px - (75px / 2) )" }}
          >
            {displayFourthRound(1)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(550px)" }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                width: "150px",
                height: "75px",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: "0" }}>
                {gameMatchups[56].name}
                {gameMatchups[56].name && ":"} {gameMatchups[56].teamPowerScore}
              </div>
            </div>
          </div>
        </div>
        <h1>WEST</h1>
        <div className={styles.bracketQuarter}>
          <div className={styles.bracketColumn}>
            <BracketMatchup
              highseed={getTeam("Tennessee")}
              lowseed={getTeam("Stetson")}
              round={1}
              id="9"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Texas")}
              lowseed={getTeam("Nebraska")}
              round={1}
              id="10"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("San Diego State")}
              lowseed={getTeam("Grand Canyon")}
              round={1}
              id="11"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Illinois")}
              lowseed={getTeam("UC Irvine")}
              round={1}
              id="12"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Utah State")}
              lowseed={getTeam("Virginia")}
              round={1}
              id="13"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Baylor")}
              lowseed={getTeam("Morehead State")}
              round={1}
              id="14"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />

            <BracketMatchup
              highseed={getTeam("Gonzaga")}
              lowseed={getTeam("Colorado State")}
              round={1}
              id="15"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
            <BracketMatchup
              highseed={getTeam("Arizona")}
              lowseed={getTeam("East Washington")}
              round={1}
              id="16"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              left={true}
            />
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px / 2)" }}
          >
            {displaySecondRound(2)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px - (75px / 2))" }}
          >
            {displayThirdRound(2)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-225px - (75px / 2) )" }}
          >
            {displayFourthRound(2)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(550px)" }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                width: "150px",
                height: "75px",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: "0" }}>
                {gameMatchups[57].name}
                {gameMatchups[57].name && ":"} {gameMatchups[57].teamPowerScore}
              </div>
            </div>
          </div>
        </div>
        <h1>EAST</h1>
        <div className={styles.bracketQuarter}>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(550px)" }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                width: "150px",
                height: "75px",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: "0" }}>
                {gameMatchups[58].name}
                {gameMatchups[58].name && ":"} {gameMatchups[58].teamPowerScore}
              </div>
            </div>
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-225px - (75px / 2) )" }}
          >
            {displayFourthRound(3)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px - (75px / 2))" }}
          >
            {displayThirdRound(3)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px / 2)" }}
          >
            {displaySecondRound(3)}
          </div>
          <div className={styles.bracketColumn}>
            <BracketMatchup
              highseed={getTeam("UConn")}
              lowseed={getTeam("Longwood")}
              round={1}
              id="17"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"left"}
            />
            <BracketMatchup
              highseed={getTeam("Northwestern")}
              lowseed={getTeam("Oklahoma")}
              round={1}
              id="18"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("BYU")}
              lowseed={getTeam("Richmond")}
              round={1}
              id="19"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Auburn")}
              lowseed={getTeam("Samford")}
              round={1}
              id="20"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("South Carolina")}
              lowseed={getTeam("New Mexico")}
              round={1}
              id="21"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Kansas")}
              lowseed={getTeam("Toledo")}
              round={1}
              id="22"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />

            <BracketMatchup
              highseed={getTeam("Saint Mary's")}
              lowseed={getTeam("Seton Hall")}
              round={1}
              id="23"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("North Carolina")}
              lowseed={getTeam("Quinnipiac")}
              round={1}
              id="24"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
          </div>
        </div>
        <h1>SOUTH</h1>
        <div className={styles.bracketQuarter}>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(550px)" }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                width: "150px",
                height: "75px",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: "0" }}>
                {gameMatchups[59].name} {gameMatchups[59].name && ":"}{" "}
                {gameMatchups[59].teamPowerScore}
              </div>
            </div>
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-225px - (75px / 2) )" }}
          >
            {displayFourthRound(4)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px - (75px / 2))" }}
          >
            {displayThirdRound(4)}
          </div>
          <div
            className={styles.bracketColumn}
            style={{ marginTop: "calc(-75px / 2)" }}
          >
            {displaySecondRound(4)}
          </div>
          <div className={styles.bracketColumn}>
            <BracketMatchup
              highseed={getTeam("Houston")}
              lowseed={getTeam("South Dakota State")}
              round={1}
              id="25"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Michgan State")}
              lowseed={getTeam("Florida Atlantic")}
              round={1}
              id="26"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Washington State")}
              lowseed={getTeam("McNeese State")}
              round={1}
              id="27"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Alabama")}
              lowseed={getTeam("Vermont")}
              round={1}
              id="28"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Florida")}
              lowseed={getTeam("South Florida")}
              round={1}
              id="29"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Creighton")}
              lowseed={getTeam("Oakland")}
              round={1}
              id="30"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />

            <BracketMatchup
              highseed={getTeam("Dayton")}
              lowseed={getTeam("TCU")}
              round={1}
              id="31"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
            <BracketMatchup
              highseed={getTeam("Duke")}
              lowseed={getTeam("Colgate")}
              round={1}
              id="32"
              setGameMatchups={setGameMatchups}
              gameMatchups={gameMatchups}
              side={"right"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
