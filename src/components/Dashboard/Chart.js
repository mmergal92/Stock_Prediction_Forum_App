import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';

const ChartGraph = () => {
// var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
// // console.log(posSym)
// let sym = posSym
// console.log(sym)

// const url = "https://stock-prediction-forum-backend.herokuapp.com/" + "api/stock/price/" + sym;
// console.log(url)

// const [chartData, setChartData] = useState('null');

// const getChartData = async() =>{
//   const response = await fetch(url);
//   const chartdataset = await response.json();
//   console.log(chartdataset)
//   setChartData(chartdataset)
// }
// React.useEffect(() =>{
//   getChartData();
// },[])

// var excludeAfterIndex = 30;

// data.reduce((mappedArray, item, index) =>{
//   if (index > excludeAfterIndex) {
//     mappedArray.push(<data key={index} data={item}/>)
//   }
//   return mappedArray;
// },[])

// const data = ()=> {
//   for (let i=0; i<chartData.length; i++){
//     console.log(chartData[i].close)
//   }
//   // labels: ['1', '2', '3', '4', '5', '6'],
//   // datasets: [
//   //   {
//   //     label: '# of Votes',
//   //     data: [chartData],
//   //     fill: false,
//   //     backgroundColor: 'rgb(255, 99, 132)',
//   //     borderColor: 'rgba(255, 99, 132, 0.2)',
//   //   },
//   // ],
// };
// data()

// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

// const Chart = () => (
return(
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <div className="chartdiv">
    {/* <Line data={data} /> */}
    </div>
    
  </>
);

// const loading =()=>{
//   return <h1>Loading ...</h1>
// }
// return chartData ? Chart(): loading();
}
export default ChartGraph;