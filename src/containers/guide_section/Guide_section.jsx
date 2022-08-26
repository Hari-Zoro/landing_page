import React from 'react';
import './guide_section.css';
import Section_heading from '../../components/section_heading/Section_heading';
import Guide_card from '../../components/guide_card/Guide_card';
import guide_1 from '../../assets/Guide1.png';
import guide_2 from '../../assets/Guide2.png';
import guide_3 from '../../assets/Guide3.png';


const Guide_section = (props) => {

  return (

    <div className="guide_section_wrapper">

        <div className="guide_section_left">
            <p className="guide_section_title">Getting Started</p>
            <p className="guide_section_para">Quick Start guide to  our website</p>
        </div>
        <div className="guide_section_right">
            <Guide_card heading="Connect" guide_img={guide_1} para="Connect your wallet"/>
            <Guide_card heading="Create" guide_img={guide_2} para="Create an auction"/>
            <Guide_card heading="Participate" guide_img={guide_3} para="Bid on auctions"/>
        </div>
    </div>
  );
};

export default Guide_section;