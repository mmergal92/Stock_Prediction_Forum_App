import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
require('dotenv').config()
const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [close, setClose] = useState([]);
  const [date, setDate] = useState([]);
  console.log(window.location.href);
  var posSym = window.location.href.split("/stocks/").pop().replace("?", "");
  console.log(posSym);
  let sym = posSym;
  console.log(sym);
  const charts = () => {

    let STOCK_API = process.env.REACT_APP_STOCK_API;
    let today = new Date();
    let priorDate = new Date().setDate(today.getDate() - 30);
    priorDate = new Date(priorDate).toLocaleDateString("en-US", {
      timeZone: "America/New_York",
    });
    priorDate = priorDate.split("/");

    let yesterday = [];

    if (priorDate[0] < 10 && priorDate[1] < 10) {
      priorDate[0] = 0 + priorDate[0];
      priorDate[1] = 0 + priorDate[1];
    } else if (priorDate[1] < 10) {
      priorDate[1] = 0 + priorDate[1];
    } else if (priorDate[0] < 10) {
      priorDate[0] = 0 + priorDate[0];
    }

    yesterday[0] = priorDate[2];
    yesterday[1] = priorDate[0];
    yesterday[2] = priorDate[1];

    let lastmonth = yesterday.join().replace(/,/g, "-");

    console.log(lastmonth);

    let actualDateToday = new Date(Date.now()).toLocaleDateString();
    actualDateToday = new Date(actualDateToday).toLocaleDateString("en-US", {
      timeZone: "America/New_York",
    });
    actualDateToday = actualDateToday.split("/");

    let todayJoined = [];

    if (actualDateToday[0] < 10 && actualDateToday[1] < 10) {
      actualDateToday[0] = 0 + actualDateToday[0];
      actualDateToday[1] = 0 + actualDateToday[1];
    } else if (actualDateToday[1] < 10) {
      actualDateToday[1] = 0 + actualDateToday[1];
    } else if (actualDateToday[0] < 10) {
      actualDateToday[0] = 0 + actualDateToday[0];
    }

    todayJoined[0] = actualDateToday[2];
    todayJoined[1] = actualDateToday[0];
    todayJoined[2] = actualDateToday[1];
    console.log(STOCK_API)
    let todayVar = todayJoined.join().replace(/,/g, "-");
    console.log(todayVar);

    let close = [];
    let date = [];
    let sorteddate = [];
    let sortedclose = [];
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${sym}?from=${lastmonth}&to=${todayVar}&apikey=${STOCK_API}`
      )
      .then(res => {
        console.log(res)
        console.log('hi')
        // console.log(res);
        // console.log(res.data[0].close);
        for (let i = 0; i < res.data.historical.length; i++) {
          close.push(res.data.historical[i].close);
          date.push(res.data.historical[i].date);
        }
        console.log(res)
        sortedclose = close.sort((a, b) => a - b);
        sorteddate = date.sort((a, b) => new Date(a) - new Date(b));
        console.log(date);

        setChartData({
          labels: sorteddate,
          datasets: [
            {
              label: "Stock Price By Day",
              data: sortedclose,
              backgroundColor: ["#5887FF"],
              hoverBackgroundColor: "orange",

              borderColor: ["#5887FF"],
              hoverBorderColor: "orange",
              fill: false,
              tension: 0.1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(date);
  };
  useEffect(() => {
    charts();
  }, []);
  return (
    // <div className="App">
    <div className="chartdiv">
      <Line data={chartData} options={{}} />
    </div>
    // </div>
  );
};
export default Chart;
