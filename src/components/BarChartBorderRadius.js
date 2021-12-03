import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function BarChartBorderRadius(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const barChartBorderRadius = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Fully Rounded",
            data: data,
            backgroundColor: "rgba(0, 0, 255, 0.3)",
            borderColor: "rgba(255, 0, 0, 0.3)",
            borderWidth: 2,
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: "Small Radius",
            data: data,
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            borderWidth: 2,
            borderRadius: 40,
          },
        ],
      },
    });
    return () => {
      barChartBorderRadius.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default BarChartBorderRadius;
