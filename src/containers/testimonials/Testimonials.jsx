import React from 'react';
import './testimonials.css';
import Section_heading from '../../components/section_heading/Section_heading';
import Testimonials_card from '../../components/testimonials_card/Testimonials_card';
import msd from "../../assets/msd.jpg"
import ra from "../../assets/r1.png"
import rb from "../../assets/r2.png"





const Testimonials = (props) => {

  return (
    <>
        <Section_heading heading="Testimonials" />

        <div className="testimonials_wrapper">
        <div className="testimonials_wrapper_inner">
          <Testimonials_card username="Sohan Shinde1" img={ra} />
          <Testimonials_card username="Venkatesh Kamat" img={rb} />
          <Testimonials_card username="Sohan Shinde2" img={ra} />
          <Testimonials_card username="Venkatesh Kamat" img={rb} />
          <Testimonials_card username="Sohan Shinde" img={ra} />
          <Testimonials_card username="Venkatesh Kamat" img={rb} />
          <Testimonials_card username="Sohan Shinde" img={ra} />
          <Testimonials_card username="Venkatesh Kamat" img={rb} />
          <Testimonials_card username="Sohan Shinde" img={ra} />
          <Testimonials_card username="Venkatesh Kamat" img={rb} />
          <Testimonials_card username="Sohan Shinde" img={ra} />
        </div>
         
        </div>
    </>
  );
};

export default Testimonials;