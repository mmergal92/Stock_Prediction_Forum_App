import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {Link} from 'react-router-dom'


const StockList = (props) => {

    const stockCos = [
        { name: "Apple", symbol: "AAPL"},
        { name: "Amazon", symbol: "AMZN"},
        { name: "Boeing", symbol: "BA"},
        { name: "Ebay", symbol: "EBAY"},
        { name: "Ford", symbol: "F"},
        { name: "Microsoft", symbol: "MSFT"},
        { name: "Netflix", symbol: "NFLX"},
        { name: "Qualcomm", symbol: "QCOM"},
        { name: "Tesla", symbol: "TSLA"},
        { name: "Twitter", symbol: "TWTR"},
    ]
return (
    <div className= "stockInfo">
            <Header/>
            {stockCos.map((symbolLetters) => {
            const {name, symbol} = symbolLetters;
            return (
                <Link to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                </Link>
            );
        })}
            <Footer/>
    </div>
    )
}

export default StockList
