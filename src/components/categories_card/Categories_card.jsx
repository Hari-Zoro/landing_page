import React from 'react';
import './categories_card.css';
import Car from '../../assets/Car.png';

const Categories_card = (props) => {

  return (

    <div className="category_card">
      <div className="category_card_img_section">
        <div className="category_card_img" style={{backgroundImage: `url(${props.bgimg})`}}>
        
        </div>
      </div>
      <div className="category_card_title_section">
        <p className="category_card_title">{props.title}</p>
      </div>

    </div>
  );
};

export default Categories_card;