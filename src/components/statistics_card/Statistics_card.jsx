import React from 'react';
import './statistics_card.css';

const statistics_card = (props) => {

  return (
    <div className="stats_card">

        
        <p className="stats_key">{props.ke}</p>
        <p className="stats_value">{props.value}</p>
    </div>
  );
};

export default statistics_card;