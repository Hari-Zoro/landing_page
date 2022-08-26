import React from 'react';
import './testimonials.css';
import Section_heading from '../../components/section_heading/Section_heading';
import Testimonials_card from '../../components/testimonials_card/Testimonials_card';

const Testimonials = (props) => {

  return (
    <>
        <Section_heading heading="Testimonials" />

        <div className="testimonials_wrapper">
        </div>
    </>
  );
};

export default Testimonials;