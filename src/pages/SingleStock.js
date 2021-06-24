import React, {useState} from 'react'
import CommentBox from '../components/Dashboard/CommentBox'
import Chart from '../components/Dashboard/Chart'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

//In singleStock component we receive props.. 
const SingleStock = (props) =>{
        //Currency symbol from URL param. Uses match params.
        console.log(props)
        console.log(props.match.params.symbol)
        //We are defining the stock symbol as a variable by grabbing props.
        const symbol = props.match.params.symbol;
        //Here we are just defining the URL that points to the data.
        const url = "https://stock-prediction-forum-backend.herokuapp.com/" + "api/stock/price/" + symbol;
        //STATE... first part is the value. second part is the "setter".
        //Const stock.. this defines the variable for our data.. which we use later in the for loop.
        //Use state will always return two values. The value + the setter.
        const [stock, setStock] = useState('null');
        //Define function to call later to fetch stock data.
        //Async is used so we can await for promises inside of async function
        const getStock = async() =>{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setStock(data);
        }
        //useEffect... Useeffect is uses to make sure we only call something once. or when we need to call it.
        //getStock() calls the function to get data.
        React.useEffect(() => {
            getStock();
        }, [])
    //Here are define a function and load it into the loaded function
    //We will code in the h1 tags to display the stock symbol/date/percentage change from props and the json data.
    //The for loop grabs the first item in the json data.
        const loaded = () =>{
            for (let i=0; i<stock.length; i++){
                return(
                    <div>
                    <Header />
                    <h1>Symbol: {stock[i].symbol}</h1>
                    <h2>Date: {stock[i].date}</h2>
                    <h3>Percent change: {stock[i].changePercent}</h3>
                    <Chart />
                    <CommentBox />
                    <Footer />
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
