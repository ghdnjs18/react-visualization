import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function ScatterChart(porps) {
  const { busBasePassenger: bp } = porps;
  const canvasDom = useRef(null);
  console.log(bp);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const scatterChart = new Chart(ctx, {
      type: "scatter",
      data: {
        labels: bp.map((row) => row.busNo),
        datasets: [
          //   {
          //     data: [
          //       {
          //         x: 500000,
          //         y: 200000,
          //       },
          //       {
          //         x: 550000,
          //         y: 250000,
          //       },
          //     ],
          //   },
          // 구조가 간단했을 때는 map로 뽑아 올수 있다.
          //   {
          //     data: bp.map((row) => {
          //       return [row.data.getIn, row.data.getOff];
          //     }),
          //     backgroundColor: "rgba(0, 0, 255, 0.5)",
          //   },
          // 여러 구조를 가지고 올때는 reduce를 사용해서 타고들어가야한다.
          {
            data: bp.reduce((acc, cur) => {
              cur["data"].forEach((summary) => {
                acc.push([summary.getIn, summary.getOff]);
              });
              return acc;
            }, []),
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      scatterChart.destroy();
    };
  }, [bp]);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default ScatterChart;
