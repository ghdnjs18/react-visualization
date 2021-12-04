import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

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

import ScatterChart from "./components/OtherChart/ScatterChart";

function App() {
  const data = [50, 40, 30, 20, 30];
  const labels = [2018, 2019, 2020, 2021, 2022];
  const [csv, setCsv] = useState([]);
  const [monthBasePassenger, setMonthBasePassenger] = useState([]);
  const [busBasePassenger, setBusBasePassenger] = useState([]);
  //
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

  // 데이터 패치용 ( 콜백 사용 )
  useEffect(() => {
    getCsvWithCallback();
  }, [getCsvWithCallback]);

  // console.log(csv);

  // mp 데이터 처리용
  useEffect(() => {
    if (Array.isArray(csv) && csv.length) {
      const monthBase = csv.reduce((acc, cur) => {
        const month = cur["년월"];
        const sum = Number(cur["합계"]);
        const type = cur["구분"];

        if (!acc.has(month)) {
          acc.set(month, {
            sum: 0,
            getIn: 0,
            getOff: 0,
          });
        }
        const thisMonth = acc.get(month);
        const getIn = thisMonth["getIn"];
        const getOff = thisMonth["getOff"];
        acc.set(month, {
          sum: thisMonth["sum"] + sum,
          getIn: type === "승차" ? getIn + sum : getIn,
          getOff: type === "하차" ? getOff + sum : getOff,
        });
        return acc;
      }, new Map());
      // console.log(monthBase);
      // monthBase의 형식에 따라 넘김
      const monthData = Array.from(monthBase, ([key, value]) => ({
        month: key,
        data: value,
      }));
      setMonthBasePassenger(monthData);
      // console.log(monthData);
    }
  }, [csv]);

  // bp 데이터 처리
  useEffect(() => {
    if (Array.isArray(csv) && csv.length) {
      const busBase = csv.reduce((acc, cur) => {
        const busNo = cur["노선"];
        const month = cur["년월"];
        const sum = Number(cur["합계"]);
        const type = cur["구분"];

        if (!acc.has(busNo)) {
          const monthMap = new Map();
          acc.set(
            busNo,
            monthMap.set(month, {
              sum: 0,
              getIn: 0,
              getOff: 0,
            })
          );
        }
        const thisBus = acc.get(busNo);
        const data = thisBus.get(month);
        const getIn = data ? Number(data["getIn"]) : 0;
        const getOff = data ? Number(data["getOff"]) : 0;

        thisBus.set(month, {
          getIn: type === "승차" ? getIn + sum : getIn,
          getOff: type === "하차" ? getOff + sum : getOff,
        });

        return acc;
      }, new Map());
      const bp = Array.from(busBase, ([key, value]) => {
        return {
          busNo: key,
          data: Array.from(value, ([month, data]) => {
            return {
              month: month,
              // data안의 데이터들을 펼쳐준다.
              ...data,
            };
          }),
        };
      });
      setBusBasePassenger(bp);
      // console.log(bp);
    }
  }, [csv]);

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

  return (
    <div>
      <Layout>
        <VerticalBarChart monthBasePassenger={monthBasePassenger} />
        <HorizontalBarChart monthBasePassenger={monthBasePassenger} />
        <StackedBarChart data={data} labels={labels} />
        <StackedBarChartwithGroups monthBasePassenger={monthBasePassenger} />
        <FloatingBars data={data} labels={labels} />
        <BarChartBorderRadius data={data} labels={labels} />

        <LineChart data={data} labels={labels} />
        <MultiAxisLineChart data={data} labels={labels} />
        <SteppedLineCharts data={data} labels={labels} />

        <ScatterChart busBasePassenger={busBasePassenger} />
      </Layout>
    </div>
  );
}

export default App;
