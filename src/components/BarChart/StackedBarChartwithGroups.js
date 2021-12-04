import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackedBarChartwithGroups(props) {
  const { monthBasePassenger: mp } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const stackedBarChartwithGroups = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => row.month),
        datasets: [
          {
            label: "월별 버스 이용 총 승객",
            data: mp.map((row) => row.data.sum),
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            stack: "Group 0",
          },
          {
            label: "승차 승객수",
            data: mp.map((row) => row.data.getIn),
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            stack: "Group 1",
          },
          {
            label: "하차 승객수",
            data: mp.map((row) => row.data.getOff),
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
  }, [mp]);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default StackedBarChartwithGroups;
