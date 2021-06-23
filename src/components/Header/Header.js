import React from "react";

// Components
import SignUpComponent from "./SignUpComponent";
import SignInComponent from "./SignInComponent";
import StocksComponent from "./StocksComponent";
import HomeComponent from "./HomeComponent";
// import DropDown from './DropDown'
import LogOut from "./LogOut";

function Header() {
  return (
    <div className="navbar">
      <ul>
      <li id="HomeIcon"><HomeComponent/></li>
      <li><StocksComponent/></li>
      {/* <li><DropDown/></li> */}
      {/* {localStorage.getItem('ProfileImg') !== null ? <li><img className="userprofilepic" src={localStorage.getItem('ProfileImg')} alt="" /></li> : ''} */}
      {localStorage.getItem('sessionEmail') === null ? <li><SignInComponent/></li> : ''}
      {localStorage.getItem('sessionEmail') !== null ? <li><LogOut/></li> : ''}
      {/* <li><SignUpComponent/></li> */}
      </ul>
    </div>
  );
}

export default Header;
