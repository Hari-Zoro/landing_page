import React, { useState } from 'react';
import magglasslogo from "../assets/magglass.svg";
import houselogo from "../assets/house.svg";
import boxlogo from "../assets/box.svg";
import docslogo from "../assets/docs.svg";
import stacklogo from "../assets/stack.svg";
import barslogo from "../assets/bars.svg";
import supportlogo from "../assets/support.svg";
import belllogo from "../assets/bell.svg";
import settingslogo from "../assets/settings.svg";
import historylogo from "../assets/history.svg";
import "../styles/LeftBar.css";
import virat from '../assets/virat.jpg'
function LeftBar(props)
{
    const handlemag = () =>{
        props.setBarOpen(!props.barOpen);
    }
    return(
        <div className={props.barOpen ? 'left-bar-full' :'left-bar'}>
            <div className={props.barOpen ? 'entire-not-logos search-bar-auct':'entire-logos'}>
                <img onClick={handlemag} className='bar-logos mag' src={magglasslogo} alt="home"></img>
                {props.barOpen && <input className='search-bar-auction' type='text'></input>}
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}> 
                <img className={props.barOpen ? 'bar-not-logos home-btn':'bar-logos home-btn'} src={houselogo} alt="home"></img><span className={props.barOpen ? 'info-not-text home-info' :'info-text home-info'}>Home</span>
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos dashboard-btn':'bar-logos dashboard-btn'} src={boxlogo} alt="home"></img><span className={props.barOpen ? 'info-not-text dashboard-info' :'info-text dashboard-info'} >Dashboard</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos ongoing-btn':'bar-logos ongoing-btn'} src={docslogo} alt="home"></img><span className={props.barOpen ? 'info-not-text ongoing-info' :'info-text ongoing-info'}>Ongoing</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos completed-btn':'bar-logos completed-btn'} src={stacklogo} alt="home"></img><span className={props.barOpen ? 'info-not-text completed-info' :'info-text completed-info'}>Completed</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos cancelled-btn':'bar-logos cancelled-btn'} src={barslogo} alt="home"></img><span className={props.barOpen ? 'info-not-text cancelled-info' :'info-text cancelled-info'}>Cancelled</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos history-btn':'bar-logos history-btn'} src={historylogo} alt="home"></img><span className={props.barOpen ? 'info-not-text history-info' :'info-text history-info'}>History</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos bell-btn':'entire-logos bell-btn'}>
                <img className={props.barOpen ? 'bar-not-logos notifs-btn':'bar-logos notifs-btn'} src={belllogo} alt="home"></img><span className={props.barOpen ? 'info-not-text notifs-info' :'info-text notifs-info'}>Notifications</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos support-btn':'bar-logos support-btn'} src={supportlogo} alt="home"></img><span className={props.barOpen ? 'info-not-text support-info' :'info-text support-info'}>Support</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className={props.barOpen ? 'bar-not-logos settings-btn':'bar-logos settings-btn'} src={settingslogo} alt="home"></img><span className={props.barOpen ? 'info-not-text settings-info' :'info-text settings-info'}>Settings</span> 
            </div>
            <div className={props.barOpen ? 'entire-not-logos':'entire-logos'}>
                <img className='user-icon-side' src={virat} alt='user-icon'></img>
            </div>
        </div>
    );
}

export default LeftBar;