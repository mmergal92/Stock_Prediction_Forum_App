import React from 'react'



// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dashboard from '../components/Dashboard/Dashboard'

function Home() {
    console.log(localStorage.getItem('sessionEmail'))
    let x;
    console.log(localStorage.getItem('symbol'));
    console.log(x)
    return (
        <div className = "home">
            <Header/>
            {/* <Dashboard/> */}

            <Footer/>
        </div>
    )
}

export default Home
// company name, commentbody, useremail, | AMZN, 