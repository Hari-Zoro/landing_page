import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo2.png';
import './banner_cards.css';
import Car from '../../assets/Car.png';
const Banner_cards = (props) => {

  return (
    <>
        <div className={`${props.ban_card} ban_cards`}>
            <div className="ban_card_img_section">
                
                <div className="ban_card_img" style={{backgroundImage: `url(${props.img})`}}>
                <p>{props.angle}</p>
                </div>
            </div>
            <div className="ban_card_content">
                <div className="ban_card_content_left">
                    <p className="card_title">Ford Mustand <span className="card_id">#5436</span></p>
                    <p className="card_desc">1.6 SX OPT VTVT</p>
                    <p className="card_elements"><span>75.8K KM</span> &nbsp; <span>Diesel</span> &nbsp; <span>Manual</span></p>
                </div>
                <div className="ban_card_content_right">
                    <p className="latest_bid">latest Bid</p>
                    <p className="Bid_amount_eth">24 ETH</p>
                    <p className="Bid_amount_dollor">$34575.12</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Banner_cards;