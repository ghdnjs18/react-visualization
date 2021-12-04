import React, { useEffect, useRef } from "react";
// chart.js 사용 방법 1
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// chart.js 사용 방법 2
import Chart from "chart.js/auto";

function VerticalBarChart(props) {
  const { monthBasePassenger: mp } = props;
  console.log(mp);
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const verticalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => row.month),
        datasets: [
          {
            label: "월별 버스 이용량",
            data: mp.map((row) => row.data.sum),
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
          {
            label: "월별 버스 승차",
            data: mp.map((row) => row.data.getIn),
            backgroundColor: "rgba(0, 255, 0, 0.3)",
          },
          {
            label: "월별 버스 하차",
            data: mp.map((row) => row.data.getOff),
            backgroundColor: "rgba(0, 0, 255, 0.3)",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            position: "right",
          },
        },
      },
    });
    return () => {
      verticalBarChart.destroy();
    };
  }, [mp]);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default VerticalBarChart;
