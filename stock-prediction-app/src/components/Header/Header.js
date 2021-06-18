import React from "react";

// Components
import SignUpComponent from "./SignUpComponent";
import SignInComponent from "./SignInComponent";
import StocksComponent from "./StocksComponent";
import HomeComponent from "./HomeComponent";
import LogOut from "./LogOut";

function Header() {
  return (
    <div className="navbar">
      <ul>
      <li id="HomeIcon"><HomeComponent/></li>
      <li><StocksComponent/></li>
      {localStorage.getItem('sessionEmail') === null ? <li><SignInComponent/></li> : ''}
      {localStorage.getItem('sessionEmail') !== null ? <li><LogOut/></li> : ''}
      {/* <li><SignUpComponent/></li> */}
      </ul>
    </div>
  );
}

export default Header;
