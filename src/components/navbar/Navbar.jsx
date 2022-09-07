import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo2.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="adapp_navbar">
      <div className="nav_logo_section">
        <a className="nav_logo" href="#">
          Auction
        </a>
      </div>

      <div className="adapp_navbar_container">
        <div className="adapp_navbar_links">
          <a className="nav_link" href="#">
            Home
          </a>
          <Link className="nav_link" to="/about">
            About
          </Link>
          <Link className="nav_link" to="/auction">
            Auctions
          </Link>
          <a className="nav_link" href="#">
            Sell a Product
          </a>
        </div>

        

        <div className="adapp_navbar_menu">
          {toggleMenu ? (
            <RiCloseLine
            className="RiCloseLine"
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
            className="RiMenu3Line"
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="adapp_navbar_menu_container scale-up-center">
              <div className="adapp_navbar_menu_links">
                <a className="nav_link" href="#">
                  Home
                </a>
                <a className="nav_link" href="#">
                  About
                </a>
                <a className="nav_link" href="#">
                  Auctions
                </a>
                <a className="nav_link" href="#">
                  Sell a Product
                </a>
              </div>
              <div className="connect_now_menu_section">
                <button className="btn-grad">Connect Now</button>
              </div>
            </div>
          )}
        </div>

        <div className="connect_now_section">
          <button className="btn-grad">Connect Now</button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
