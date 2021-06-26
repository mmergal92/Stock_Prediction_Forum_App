import React, {useState} from 'react'
import CommentBox from '../components/Dashboard/CommentBox'
import Chart from '../components/Dashboard/Chart'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import StockTweets from '../components/Dashboard/StockTweets'

const SingleStock = (props) =>{
        //Currency symbol from URL param
        console.log(props)
        console.log(props.match.params.symbol)
        const symbol = props.match.params.symbol;
        const url = "https://stock-prediction-forum-backend.herokuapp.com/" + "api/stock/price/" + symbol;
        //STATE
        const [stock, setStock] = useState('null');
        //fetch stock data
        const getStock = async() =>{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
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
                    {/* <Header /> */}
                    <div className = "stockInfo">
                    <h1>Symbol: {stock[i].symbol}</h1>
                    <h2>Date: {stock[i].label}</h2>
                    <h3>Percent change: {stock[i].changePercent}%</h3>
                    <h3>Current Price: ${stock[i].open}</h3>
                    </div>
                    <Chart />
                    <div className = "stockFlexComponents">
                        <div className = "stockCommentComponent">
                    <CommentBox />
                    </div>
                    <div className = "stockTwitterComponent">
                    <StockTweets />
                    </div>
                    </div>
                    {/* <Footer /> */}
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
