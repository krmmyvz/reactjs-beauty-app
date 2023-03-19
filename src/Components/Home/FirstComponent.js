import React from "react";
import woman from "../../Assets/wn2.png";

const firstComponent = () => {
  return (
        <div className='showcase'>
            <img src={woman} alt='Woman' className='showcase-img' />
            <div className='showcase-header'>
              <h1>Glow Your Face & Vitality With Our Best Service</h1>
              <p>We provide beauty and treatment services with best quality, believe us.</p>
            </div>

            <div className='showcase-def'>
              <p>Urban is a spa and beauty place that serves the best quality with professionals </p>
            </div>

        </div>

  )
};

export default firstComponent;