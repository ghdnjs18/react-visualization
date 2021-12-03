import React from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import LineChart from "./LineChart";
import VerticalBarChart from "./VerticalBarChart";

function App() {
  return (
    <div>
      <VerticalBarChart />
      <HorizontalBarChart />
      <LineChart />
    </div>
  );
}

export default App;
