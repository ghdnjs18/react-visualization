import React, { useEffect, useRef } from "react";
// chart.js 사용 방법 1
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// chart.js 사용 방법 2
import Chart from "chart.js/auto";

function VerticalBarChart(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const verticalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "월별 버스 이용량 통계",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
          {
            label: "월별 버스 이용량 통계",
            data: data,
            backgroundColor: "rgba(0, 255, 0, 0.3)",
          },
          {
            label: "월별 버스 이용량 통계",
            data: data,
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
