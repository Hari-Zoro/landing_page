import React,{useState} from 'react'
import './SellAProduct.css'
import LeftBar from '../LeftBar'
import NavBar from '../NavBar'
import AuctionTitle from '../AuctionTitle';
import AuctionTabs from '../AuctionTabs';
import "../../App.css";
import AuctionCards from '../AuctionCards';
import auctionData from '../../assets/generated.json';


function SellAproduct() {
    const [barOpen,setBarOpen] = useState(false);
  return (
    <>
    <NavBar barOpen={barOpen} setBarOpen={setBarOpen} />
      <LeftBar barOpen={barOpen} setBarOpen={setBarOpen} />
      <div className={barOpen ? "content-wrapper-open" : "content-wrapper"}>
        {/* <p className='ABC' >SSohan</p> */}
        <AuctionTitle />
        <AuctionTabs />
       
        <div className='ABC' >
        <p>Hello</p>
      </div>


     </div>
 
    
    
    </>
  ) 
}

export default SellAproduct