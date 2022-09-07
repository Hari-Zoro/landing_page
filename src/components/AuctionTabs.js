import React, { useState } from "react";
import '../styles/AuctionTabs.css'

function AuctionTabs(props){
    const [auctionTopic,setAuctionTopic] = useState("Cars");

    const onSelect = (e) => {
        setAuctionTopic(e.target.name);
    }

    const onDaysSelect = (e) => { 
        setAuctionTopic(e.target.value);
    }

    return (
        <div className="auction-tabs-wrapper">
           <span className="topics-auction">         
                <input id="cars" checked={auctionTopic === "Cars"} name="Cars" type='radio' onChange={onSelect}></input>
                <label htmlFor="cars" className="cars-label alab">Cars</label>
                <input id="clbs" checked={auctionTopic === "Collectibles"} name="Collectibles" type='radio' onChange={onSelect}></input>
                <label htmlFor="clbs" className="collectibles-label alab">Collectibles</label>
                <input id="reales" checked={auctionTopic === "Real Estate"} name="Real Estate" type='radio' onChange={onSelect}></input>
                <label htmlFor="reales" className="realestate-label alab">Real Estate</label>
           </span>      
        </div>
       );


}

export default AuctionTabs;