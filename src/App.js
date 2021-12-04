import React, { useCallback, useEffect, useState } from "react";
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

import axios from "axios";

function App() {
  const data = [50, 40, 30, 20, 30];
  const labels = [2018, 2019, 2020, 2021, 2022];
  const [csv, setCsv] = useState([]);
  const getCsvWithCallback = useCallback(async () => {
    try {
      const url = "http://localhost:3001/csv";
      const axiosObj = await axios.get(url);
      const res = await axiosObj.data;
      setCsv(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // 콜백이용
  useEffect(() => {
    getCsvWithCallback();
    console.log(csv);
  }, [getCsvWithCallback]);

  // 한번만 실행하는데에는 이런식으로 사용을 해도 상관은 없지만,
  // 값에 변경되는 것에 따라 useEffect를 사용하기 위해서는 useCallback을
  // 사용해서 변경사항에 따라 적용을 할 수가 있다?
  // useEffect(() => {
  //   async function fetchDate() {
  //     try {
  //       const url = "http://localhost:3001/csv";
  //       const axiosObj = await axios.get(url);
  //       const res = await axiosObj.data;
  //       setCsv(res);
  //       console.log(csv);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchDate();
  // }, []);

  console.log(csv);

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
