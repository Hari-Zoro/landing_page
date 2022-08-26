import React from 'react';
import './guide_card.css';

const Guide_card = (props) => {

  return (

    <div className="guide_card">

        <p className="guide_card_title">{props.heading}</p>
        <img className="guide_card_img" src ={props.guide_img}/>
        <p className="guide_card_para">{props.para}</p>

    </div>
  );
};

export default Guide_card;