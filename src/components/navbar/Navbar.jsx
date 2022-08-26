import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.png';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="adapp_navbar">
      {/* <div className=""> */}
        <img className="logo_img" src={logo} />
      
      {/* <div className="navbar_links"> */}
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Auctions</a>
        <a href="#">Sell a Product</a>
      {/* </div> */}
      {/* <div className="connect_now_btn"> */}
        <button className="nav_btn">Connect Now</button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;