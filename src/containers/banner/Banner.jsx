import React, { useState } from 'react';
import './banner.css';
import Navbar from '../../components/navbar/Navbar';
import Banner_cards from '../../components/banner_cards/Banner_cards';
import img1 from '../../assets/Vector5.png';
import img2 from '../../assets/Vector4.png';
import img3 from '../../assets/Vector6.png';
const Banner = () => {

  return (
    <>
    <Navbar />

    <div className="banner_wrapper">

      <div className="banner_wrapper_left">
        <p className="ban-title"> <span className="ban_att_title">Buy & Sell </span><br /> around the world</p>
        <p className="ban-para">One of the first auction application, in the world which runs on the new and robust web3 technology</p>
        <button className="banner_btn">Explore</button>
      </div>
      <div className="banner_wrapper_right">
        <Banner_cards ban_card={"ban_card_1"} img={img1}/>
        <Banner_cards ban_card={"ban_card_2"} img={img2}/>
        <Banner_cards ban_card={"ban_card_3"} img={img3}/>
      </div>
        
    </div>
    </>
  );      
};

export default Banner;