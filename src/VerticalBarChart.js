import React, { useEffect, useRef } from "react";
// chart.js 사용 방법 1
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// chart.js 사용 방법 2
import Chart from "chart.js/auto";

function VerticalBarChart() {
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const verticalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [2017, 2018, 2019, 2020, 2021],
        datasets: [
          {
            label: "월별 버스 이용량 통계",
            data: [1, 5, 10, 4, 3],
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
          {
            label: "월별 버스 이용량 통계",
            data: [2, 4, 10, 4, 3],
            backgroundColor: "rgba(0, 255, 0, 0.3)",
          },
          {
            label: "월별 버스 이용량 통계",
            data: [3, 3, 10, 4, 3],
            backgroundColor: "rgba(0, 0, 255, 0.3)",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
    return () => {
      verticalBarChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default VerticalBarChart;
