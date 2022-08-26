import React from 'react';
import './feature_card.css';

const Feature_card = (props) => {

  return (

    <div className="feature_card">

        <p className="feature_card_title">{props.heading}</p>
        <img className="feature_card_img" src ={props.feature_img}/>
        <p className="feature_card_para">{props.para}</p>
     

    </div>
  );
};

export default Feature_card;