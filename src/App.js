import React, { useEffect, useRef } from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import VerticalBarChart from "./VerticalBarChart";

function App() {
  return (
    <div>
      <VerticalBarChart />
      <HorizontalBarChart />
    </div>
  );
}

export default App;
