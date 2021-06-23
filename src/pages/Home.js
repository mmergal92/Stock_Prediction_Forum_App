import React from 'react'

// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Home() {
    console.log(localStorage.getItem('sessionEmail'))
    let x;
    console.log(x)
  
    return (
        <div>
            <Header/>
            <h3>Welcome to our Stocks Prediction App</h3>
            <Footer/>
        </div>
    )
}

export default Home;
