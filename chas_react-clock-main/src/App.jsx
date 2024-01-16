import { React } from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div className="chas_Clock">
      <div className="klocka">
        <Clock city="Stockholm" timeZone="Europe/Stockholm" />
        <Clock city="London" timeZone="Europe/London" />
        <Clock city="New York" timeZone="America/New_York" />
      </div>
      <div className="timer">
        <Timer timer="Stopwatch 1min" startTime={60} />
        <Timer timer="Stopwatch 2min" startTime={120} />
        <Timer timer="Stopwatch 5min" startTime={300} />
      </div>
    </div>
  );
}

export default App;
