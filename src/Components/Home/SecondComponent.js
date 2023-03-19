import React from "react";
import background1 from "../../Assets/bg1.jpeg";
import background2 from "../../Assets/bg2.jpg";
import background3 from "../../Assets/bg3.jpg";
import background4 from "../../Assets/bg4.jpg";
import background5 from "../../Assets/bg5.jpg";
import {HiChevronRight} from 'react-icons/hi'

export default function SecondComponent () {
  return (
    <div className='second-container'>
      <img src={background1} className='image' alt="resim1"></img>
      <img src={background2} className='image' alt="resim2"></img>
      <img src={background3} className='image' alt="resim1"></img>
      <img src={background4} className='image' alt="resim1"></img>
      <img src={background5} className='image' alt="resim1"></img>
      

      <div className="aboutus">
        <div className="about">About Us</div>
        <h1 className="about2">Affordable, Gorgeous and Beauty Which You Deserves of Our Service</h1>
        <div className="learn">
          <HiChevronRight/>
          Learn More</div>
      </div>
    </div>
  );
};