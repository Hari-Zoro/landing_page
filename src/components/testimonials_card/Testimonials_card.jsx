import React from 'react';
import './testimonials_card.css';

const Testimonials_card = (props) => {

  return (
    <>
<div className="testimonial_box_outer">


<div className="testimonial_box">
        <div className="testimonial_username">
            <p>{props.username} </p>
        </div>
        
        <div className="">
            <img className='testimonial_img' src={props.img} alt="" />
        </div>

        <div className="testimonial_icons">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>

        <div className="testimonial_comment">
            <p>Lorem Ipsum is simply dummy  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th {props.comment} </p>
        </div>

    </div>
    </div>

    </>
  );
};

export default Testimonials_card;