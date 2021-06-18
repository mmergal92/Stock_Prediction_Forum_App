import React from 'react'
import AboutComponent from './AboutComponent'
import SocialMedia from './SocialMedia'
import SupportComponent from './SupportComponent'


function Footer() {
    return (
        <div className="footer">
            <ul>

            <li><SupportComponent/></li>
            <li><AboutComponent/></li>
            </ul>
           
            
        </div>
    )
}

export default Footer
