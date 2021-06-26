import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [close, setClose] = useState([]);
  const [date, setDate] = useState([]);
console.log(window.location.href)
var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
console.log(posSym)
let sym = posSym
console.log(sym)
  const charts = () => {
    let close = [];
    let date = [];
    let sorteddate = [];
    let sortedclose = [];
    axios
      .get("https://stock-prediction-forum-backend.herokuapp.com/api/stock/price/"+sym)
      .then(res => {
        console.log(res);
        console.log(res.data[0].close)
        for (let i = 0; i<res.data.length; i++) {
          close.push(res.data[i].close);
          date.push(res.data[i].date);
        }
        sortedclose = close.sort((a, b) => a - b)
        sorteddate = date.sort((a, b) => new Date(a) - new Date(b))
        console.log(date)
        
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
            }
          ]
        });
      })
      .catch(err => {
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
        <Line
          data={chartData}
          options={{
          }}
        />
      </div>
    // </div>
  );
};
export default Chart;