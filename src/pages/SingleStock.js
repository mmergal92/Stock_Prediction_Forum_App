import React, {useState} from 'react'
import CommentBox from '../components/Dashboard/CommentBox'
import Chart from '../components/Dashboard/Chart'
import StockTweets from '../components/Dashboard/StockTweets'
import Like from '../components/Dashboard/Like'
import Dislike from '../components/Dashboard/Dislike'
import LikenDislike from '../components/Dashboard/LikenDislike'
import calculate from '../utils/Calculate'

const SingleStock = (props) =>{
        //Currency symbol from URL param
        // console.log(props)
        console.log(props.match.params.symbol)
        const symbol = props.match.params.symbol;
        const url = "https://stock-prediction-forum-backend.herokuapp.com/" + "api/stock/price/" + symbol;
        //STATE
        const [stock, setStock] = useState('null');
        //fetch stock data
        const getStock = async() =>{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            setStock(data);
        }
        //useEffect
        React.useEffect(() => {
            getStock();
        }, [])
    
        const loaded = () =>{
            for (let i=0; i<stock.length; i++){
                return(
                    <div className = "wholeStockPage">
                    <div className = "stockInfo">
                    <h1>Symbol: {stock[i].symbol}</h1>
                    <h3>Date:  {stock[i].date}<br/>
                    Percent change:  {stock[i].changePercent}%<br/>
                    Current Price:  ${stock[i].open}<br/>
                    </h3>
                    <div className = "prediction">
                        <strong>Stock Prediction: </strong>{calculate(stock)}<br/>
                        This prediction is based on the net change of the stock prices.
                    </div>
                    </div>
                    <Chart />
                    {/* <Like/> */}
                    <LikenDislike/>
                    {/* <Dislike/> */}
                    <div className = "stockFlexComponents">
                        <div className = "stockCommentComponent">
                        <CommentBox />
                        </div>
                        <div className = "stockTwitterComponent">
                        <StockTweets />
                         </div>
                    </div>
                    </div>
                )
            }

        }
    
        const loading =()=>{
            return <h1>Loading ...</h1>
        }
        return stock ? loaded(): loading();
    }
export default SingleStock
