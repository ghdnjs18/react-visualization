import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

const SteppedLineCharts = (props) => {
  const { data, labels } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    const steppedLineCharts = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            stepped: true,
            backgroundColor: "rgba(0, 0, 255, 0.3)",
          },
        ],
      },
    });
    return () => {
      steppedLineCharts.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
};

export default SteppedLineCharts;
