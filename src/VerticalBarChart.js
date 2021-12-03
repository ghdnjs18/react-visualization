import React, { useEffect, useRef } from "react";
// chart.js 사용 방법 1
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// chart.js 사용 방법 2
import Chart from "chart.js/auto";

function VerticalBarChart() {
  console.log();
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const verticalBarChart = new Chart(ctx, {
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
      verticalBarChart.destroy();
    };
  }, []);
  return (
    <div>
      Hello React
      <canvas ref={canvasDom} />
    </div>
  );
}

export default VerticalBarChart;
