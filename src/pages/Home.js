import React from 'react'


// Components
import Dashboard from '../components/Dashboard/Dashboard'
// import StockImage from '../StockImage.jpg'

function Home() {


    console.log(localStorage.getItem('sessionEmail'))
    let x;
    console.log(localStorage.getItem('symbol'));
    console.log(x)
    return (
        <div className = "home">
            <div className = "home-heading">
            <h1>Welcome to ProfitHippo</h1>
            <h2>Your Investing Community</h2>
            </div>
            <div className = "home-content">
            {/* <img src = {StockImage} alt = "Image of Stock charts" /> */}

            {localStorage.getItem('sessionEmail') ? `Welcome back, ${localStorage.getItem('userfRealName')}` : <p>Please <strong>Login</strong> to access all the features of this site.</p>}
            </div>
            {/* <Dashboard/> */}
        </div>
    )
}

export default Home
// company name, commentbody, useremail, | AMZN, 