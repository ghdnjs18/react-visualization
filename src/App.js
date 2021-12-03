import React from "react";
import Layout from "./components/Layout";

import BarChartBorderRadius from "./components/BarChart/BarChartBorderRadius";
import FloatingBars from "./components/BarChart/FloatingBars";
import HorizontalBarChart from "./components/BarChart/HorizontalBarChart";
import StackedBarChart from "./components/BarChart/StackedBarChart";
import StackedBarChartwithGroups from "./components/BarChart/StackedBarChartwithGroups";
import VerticalBarChart from "./components/BarChart/VerticalBarChart";

import LineChart from "./components/LineChart/LineChart";
import MultiAxisLineChart from "./components/LineChart/MultiAxisLineChart";
import SteppedLineCharts from "./components/LineChart/SteppedLineCharts";

function App() {
  const data = [50, 40, 30, 20, 30];
  const labels = [2018, 2019, 2020, 2021, 2022];
  return (
    <div>
      <Layout>
        <VerticalBarChart data={data} labels={labels} />
        <HorizontalBarChart data={data} labels={labels} />
        <StackedBarChart data={data} labels={labels} />
        <StackedBarChartwithGroups data={data} labels={labels} />
        <FloatingBars data={data} labels={labels} />
        <BarChartBorderRadius data={data} labels={labels} />

        <LineChart data={data} labels={labels} />
        <MultiAxisLineChart data={data} labels={labels} />
        <SteppedLineCharts data={data} labels={labels} />
      </Layout>
    </div>
  );
}

export default App;
