import React,{ useState } from "react";
import "../styles/AuctionCards.css";

function AuctionCards(props)
{
    return(
        <div className={!props.barOpen ? "all-cards":"all-cards-open"}>
            {props.auctionData.map((data,key) => {
            return (
                <div key={key} className="auction-icon-wrapper">
                        <div className="auction-wrapper">
                            <img className="auction-icon" src={data.icon} alt='Auction Item'></img>
                            <div className="ends-in">
                            Ends in {data.ends} days
                            </div>
                        </div>
                       <div>
                            <div className="latest-title">
                                <div className="auction-name">
                                    <span>{data.title}</span><span className="auction-unique-id">#{data.unique_id}</span>
                                </div>
                                <div className="auction-details-titles">
                                        Latest Bid
                                </div>
                            </div>
                            <div className="more-eth">
                                <div className="more-details">
                                    <span className="specs-deets">1.6 SPX VIIT XXXXXxxxxxxxxxxXXXX</span>
                                </div>
                                <div className="eth-price">
                                    {data.latest} ETH
                                </div>
                            </div>    
                            <div className="auction-bid-details">
                                <div className="specs">
                                    <span>75.8km</span><span>Diesel</span><span>Manual</span>
                                </div>
                                <div className="price-dollars-eth">
                                    $120000
                                </div>
                            </div>
                        </div>
                        <div className="bid-now">
                            Bid Now
                        </div>

                </div>
            );
           })}
        </div>
        
    );
}

export default AuctionCards;