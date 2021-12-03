import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function FloatingBars(props) {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const floatingBars = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data.map((d) => {
              return [d, d + 10];
            }),
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
          {
            data: data.map((d) => {
              return [d, d + 20];
            }),
            backgroundColor: "rgba(0, 255, 0, 0.3)",
          },
          {
            data: data.map((d) => {
              return [d, d - 10];
            }),
            backgroundColor: "rgba(0, 0, 255, 0.3)",
          },
        ],
      },
    });
    return () => {
      floatingBars.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default FloatingBars;
