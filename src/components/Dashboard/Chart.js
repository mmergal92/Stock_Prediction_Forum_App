import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [close, setClose] = useState([]);
  const [date, setDate] = useState([]);

  const charts = () => {
    let close = [];
    let date = [];
    axios
      .get("https://stock-prediction-forum-backend.herokuapp.com/api/stock/price/AMZN")
      .then(res => {
        console.log(res);
        console.log(res.data[0].close)
        for (let i = 0; i<res.data.length; i++) {
          close.push(res.data[i].close);
          date.push(res.data[i].date);
        }
        console.log(close)
        setChartData({
          labels: date,
          datasets: [
            {
              label: "Stock Price By Day",
              data: close,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(close, date);
  };

  useEffect(() => {
    charts();
  }, []);
  return (
    <div className="App">
      <h1>Amazon Stock Price</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'YYYY-MM-DD',

                    },                            
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }                        
            }]           ,
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chart;