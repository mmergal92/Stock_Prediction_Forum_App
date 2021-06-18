import React from "react";

// Components
import SignUpComponent from "./SignUpComponent";
import SignInComponent from "./SignInComponent";
import StocksComponent from "./StocksComponent";
import HomeComponent from "./HomeComponent";

function Header() {
  return (
    <div className="navbar">
      <ul>
      <li id="HomeIcon"><HomeComponent/></li>
      <li><StocksComponent/></li>
      <li><SignInComponent/></li>
      <li><SignUpComponent/></li>
      </ul>
    </div>
  );
}

export default Header;
