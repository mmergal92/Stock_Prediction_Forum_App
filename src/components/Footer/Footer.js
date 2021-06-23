import React from 'react'
import AboutComponent from './AboutComponent'
import SocialMedia from './SocialMedia'
import SupportComponent from './SupportComponent'
import Privacy from './Privacy'


function Footer() {
    return (
        <div className="footer">
            <ul>

            <li><SupportComponent/></li>
            <li><AboutComponent/></li>
            <li><Privacy/></li>
            </ul>
           
            
        </div>
    )
}

export default Footer
