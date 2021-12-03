import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function LineChart() {
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [2018, 2019, 2020, 2021, 2022],
        datasets: [
          {
            data: [1, 3, 5, 7, 2],
          },
        ],
      },
    });
    return () => {
      lineChart.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default LineChart;
