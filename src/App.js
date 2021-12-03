import React from "react";
import HorizontalBarChart from "./components/HorizontalBarChart";
import Layout from "./components/Layout";
import LineChart from "./components/LineChart";
import VerticalBarChart from "./components/VerticalBarChart";

function App() {
  return (
    <div>
      <Layout>
        <VerticalBarChart />
        <HorizontalBarChart />
        <LineChart />
      </Layout>
    </div>
  );
}

export default App;
