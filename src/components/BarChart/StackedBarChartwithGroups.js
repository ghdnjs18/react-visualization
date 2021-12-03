import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackedBarChartwithGroups(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const stackedBarChartwithGroups = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Chart.js Bar Chart - Stacked",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            stack: "Group 0",
          },
          {
            label: "Chart.js Bar Chart - Stacked",
            data: data,
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            stack: "Group 0",
          },
          {
            label: "Chart.js Bar Chart - Stacked",
            data: data,
            backgroundColor: "rgba(0, 0, 255, 0.3)",
            stack: "Group 1",
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
    return () => {
      stackedBarChartwithGroups.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default StackedBarChartwithGroups;
