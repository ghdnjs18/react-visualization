import React from "react";
import FloatingBars from "./components/FloatingBars";
import HorizontalBarChart from "./components/HorizontalBarChart";
import Layout from "./components/Layout";
import LineChart from "./components/LineChart";
import StackedBarChart from "./components/StackedBarChart";
import StackedBarChartwithGroups from "./components/StackedBarChartwithGroups";
import VerticalBarChart from "./components/VerticalBarChart";

function App() {
  const data = [50, 40, 30, 20, 30];
  const labels = [2018, 2019, 2020, 2021, 2022];
  return (
    <div>
      <Layout>
        <VerticalBarChart data={data} labels={labels} />
        <HorizontalBarChart data={data} labels={labels} />
        <LineChart data={data} labels={labels} />
        <StackedBarChart data={data} labels={labels} />
        <StackedBarChartwithGroups data={data} labels={labels} />
        <FloatingBars data={data} labels={labels} />
      </Layout>
    </div>
  );
}

export default App;
