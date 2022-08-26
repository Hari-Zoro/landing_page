import React, { useState } from 'react';
import './categories.css';
import Car from '../../assets/Car.png';
import Collectibles from '../../assets/Collectables.png';
import House from '../../assets/House.png';
import Categories_card from '../../components/categories_card/Categories_card';
import Section_heading from '../../components/section_heading/Section_heading';

const Categories = () => {

  return (
    <>
    
    <Section_heading heading="Explore categories" />
    
    <div className="categories_wrapper" >
        <Categories_card title="Car" bgimg={Car}/>
        <Categories_card title="Real-Estate" bgimg={House}/>
        <Categories_card title="Collectibles" bgimg={Collectibles}/>
    </div>
    </>
  );
};

export default Categories;

