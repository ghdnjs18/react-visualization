import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function HorizontalBarChart() {
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const horizontalBarChart = new Chart(ctx, {});
    return () => {
      horizontalBarChart.destroy();
    };
  }, []);
  return (
    <div>
      <canvas />
    </div>
  );
}

export default HorizontalBarChart;
