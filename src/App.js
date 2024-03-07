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
  });

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
      <Bracket />
    </div>
  );
}

export default App;
