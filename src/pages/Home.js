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
            Home Page
            <Footer/>
        </div>
    )
}

export default Home
