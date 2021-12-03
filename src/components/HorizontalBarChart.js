import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function HorizontalBarChart(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const horizontalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "세로정렬",
            data: data,
          },
        ],
      },
      options: {
        indexAxis: "y",
      },
    });
    return () => {
      horizontalBarChart.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default HorizontalBarChart;
