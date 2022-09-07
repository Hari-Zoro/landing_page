import React from "react";
import '../styles/AuctionTypes.css';

function AuctionTypes(props) {

  const handleAuctions = (e) => {
      console.log(e.target.innerHTML);
      props.setAuctionType(e.target.innerHTML)
      props.setIsFiltered(false);
  }

  return (
    <div className="auction-opts">
          <div onClick={handleAuctions} className="type-auction">
            Private Auction
          </div>  
          <div onClick={handleAuctions} className="type-auction">
          Public Auction
          </div>
          <div onClick={handleAuctions} className="type-auction">
            Both
          </div>
    </div>
  );
}

export default AuctionTypes;