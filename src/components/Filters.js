import React from 'react';
import { useState } from 'react';
import arrowdrpdwn from '../assets/arrowdrpdwn.svg'; 
import '../styles/Filters.css';
import AuctionTypes from './AuctionTypes';
import SortingOptions from './SortingOptions';
import FiltersDrpDwn from './FiltersDrpDwn';

function Filters(props){
    const [isFiltered,setIsFiltered] = useState(false);
    const [sortType,setSortType] = useState("Sort");
    const [auctionType,setAuctionType] = useState("Auction Type");

    const openList = () =>{
        setIsFiltered(!isFiltered);
    }

    return(
        <span className='filter-wrapper'>
            <div onClick={openList} className='filter-container'>
                <span className='besides-img'>{props.title === "Sort" ? sortType: props.title === "Auction Type" ? auctionType:props.title}</span>
                <img className={`image-root ${isFiltered ? 'image-flip' : ''}`}  src={arrowdrpdwn} alt="dropdown"></img>
            </div>
            <div className={isFiltered ? 'drp-dwn-content-show drp-dwn-open':"drp-dwn-content-hide drp-dwn-close"}>
                {props.title === "Filters" && <FiltersDrpDwn/>}
                {props.title === "Sort" && <SortingOptions setSortType = {setSortType} setIsFiltered={setIsFiltered}/>}
                {props.title === "Auction Type" && <AuctionTypes setAuctionType = {setAuctionType} setIsFiltered={setIsFiltered}/>}
            </div>
        </span>
    );
}

export default Filters;