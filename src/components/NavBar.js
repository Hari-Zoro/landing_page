import React, { useState } from 'react';
import "../styles/NavBar.css";
import sidebarlogo from "../assets/barsside.svg";
import {Link} from 'react-router-dom';

function NavBar(props)
{
    const moveBar = () => {
        props.setBarOpen(!props.barOpen);
    }

        return(
        <div className='nav-bar-auctions'>
            <nav>  
            <ul className='main-list'>
                    <li>
                        Logo
                    </li>
                    <li>
                        <img onClick={moveBar} className='open-side' src={sidebarlogo} alt='open side bar'></img>
                    </li>
                    <li >
                        <Link className='link' to='/'>
                        Home
                        </Link>
                    </li>

                    <li>
                        About
                    </li>

                    <li>
                        Auctions
                    </li>

                    <li>
                        Sell a Product
                    </li>
                    <div className='connect-now-btn'>
                        Connect Now
                    </div>
                </ul>
            
            
            </nav>
        </div>
    );
}

export default NavBar;