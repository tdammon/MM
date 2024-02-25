import "./App.css";
import { Bracket } from "./Views/Bracket/Bracket";
import { Rankings } from "./Views/Rankings/Rankings";
import { StatAdjustment } from "./Views/StatAdjustment/StatAdjustment";

function App() {
  return (
    <div className="App">
      <StatAdjustment />
      <Rankings />
      <Bracket />
    </div>
  );
}

export default App;
