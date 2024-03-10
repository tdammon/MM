import React, { useEffect, useState } from "react";
import "./App.css";
import { Bracket } from "./Views/Bracket/Bracket";
import { Rankings } from "./Views/Rankings/Rankings";
import { StatAdjustment } from "./Views/StatAdjustment/StatAdjustment";
import { StatSliders } from "./Views/StatSliders/StatSliders";

function App() {
  const [data, setData] = useState([]);
  const [weights, setWeights] = useState({
    offensiveEfficiency: { enable: false, value: 0 },
    defensiveEfficiency: { enable: false, value: 0 },
    adjustedEfficiencyMargin: { enable: false, value: 0 },
    adjustedTempo: { enable: false, value: 0 },
    points: { enable: false, value: 0 },
    rebounds: { enable: false, value: 0 },
    fieldGoalPercentage: { enable: false, value: 0 },
    opponentPoints: { enable: false, value: 0 },
    opponentRebounds: { enable: false, value: 0 },
    opponentFieldGoalPercentage: { enable: false, value: 0 },
    pointsDifferential: { enable: false, value: 0 },
    reboundsDifferential: { enable: false, value: 0 },
    threePointPercentage: { enable: false, value: 0 },
    assists: { enable: false, value: 0 },
    steals: { enable: false, value: 0 },
    turnovers: { enable: false, value: 0 },
  });

  const [gameMatchups, setGameMatchups] = useState([
    {
      id: "1",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "2",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "3",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "4",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "5",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "6",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "7",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "8",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "9",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "10",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "11",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "12",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "13",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "14",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "15",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "16",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "17",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "18",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "19",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "20",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "21",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "22",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "23",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "24",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "25",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "26",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "27",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "28",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "29",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "30",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "31",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "32",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "33",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "34",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "35",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "36",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "37",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "38",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "39",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "40",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "41",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "42",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "43",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "44",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "45",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "46",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "47",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "48",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "49",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "50",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "51",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "52",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "53",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "54",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "55",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "56",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "57",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "58",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "59",
      name: "",
      teamPowerScore: 0,
    },
    {
      id: "60",
      name: "",
      teamPowerScore: 0,
    },
  ]);

  useEffect(() => {
    fetch(
      "https://v25y3jl9q4.execute-api.us-east-1.amazonaws.com/default/getMarchMadnessData"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <StatAdjustment weights={weights} setWeights={setWeights} />
      <div style={{ display: "flex", width: "1200px" }}>
        <StatSliders weights={weights} setWeights={setWeights} />
        <Rankings data={data} weights={weights} setData={setData} />
      </div>
      {data.length && (
        <Bracket
          data={data}
          gameMatchups={gameMatchups}
          setGameMatchups={setGameMatchups}
        />
      )}
    </div>
  );
}

export default App;
