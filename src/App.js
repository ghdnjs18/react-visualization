import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
import Chart from "chart.js/auto";

function App() {
  console.log();
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            data: [1, 5],
          },
        ],
      },
    });
    return () => {
      barChart.destroy();
    };
  }, []);
  return (
    <div>
      Hello React
      <canvas ref={canvasDom} />
    </div>
  );
}

export default App;
