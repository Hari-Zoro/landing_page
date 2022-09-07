import AuctionTabs from '../AuctionTabs';
import AuctionTitle from '../AuctionTitle';
import Filters from '../Filters';
import auctionData from '../../assets/generated.json';
// import "./App.css";
import AuctionCards from '../AuctionCards';
import LeftBar from '../LeftBar';
import { useState } from 'react';
import NavBar2 from '../NavBar.js';

function AuctionCard() {
    const [barOpen,setBarOpen] = useState(false);
  return (
    <>
      <NavBar2 barOpen={barOpen} setBarOpen={setBarOpen} />
      <LeftBar barOpen={barOpen} setBarOpen={setBarOpen} />
      <div className={barOpen ? "content-wrapper-open" : "content-wrapper"}>
        <AuctionTitle />
        <AuctionTabs />
        <div className="filter-drp-dwns">
          <span>
            <Filters title="Filters" />
          </span>
          <Filters title="Sort" />
          <Filters title="Auction Type" />
        </div>
        <AuctionCards barOpen={barOpen} auctionData={auctionData} />
      </div>
    </>
  );
}

export default AuctionCard;
