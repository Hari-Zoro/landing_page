import React from 'react';
import './section_heading.css';

const Section_heading = (props) => {

  return (
    <p className="heading">{props.heading}</p>
  );
};

export default Section_heading;