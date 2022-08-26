import React from 'react';
import './features.css';
import Section_heading from '../../components/section_heading/Section_heading';
import Feature_card from '../../components/feature_card/Feature_card';
import feature_1 from '../../assets/feature-1.png';
import feature_2 from '../../assets/feature-2.png';
import feature_3 from '../../assets/feature-3.png';


const Features = (props) => {

  return (
    <>
    <Section_heading heading="Why Us" />
    <div className="features_wrapper" > 
        <Feature_card heading="Decentralised" feature_img={feature_1} para="We offer complete decentralisation, with the use of the popular blockchain ethereum."/>
        <Feature_card heading="Minimal Fees" feature_img={feature_2} para="We offer an easy to understand and use interface, so any first timer can start working right away."/>
        <Feature_card heading="Easy to use" feature_img={feature_3} para="We offer the most user friendly fees and overhead, to ensure mutual benefit and trust among users."/>
    </div>
    </>
  );
};

export default Features ;