import React from 'react'
import cus1 from '../../Assets/bg5.jpg'
import cus2 from '../../Assets/bg4.jpg'
function ThirdComponent() {
  return (
    <div class="third-container">
      <div class="box">
        <div>Testimonal</div>
        <h1>What Our Customers Say About Urban</h1>
        <img src={cus1} alt="Fotoğraf 1" />
        <p>Açıklama 1</p>
      </div>
      <div class="box">
        <img src={cus2} alt="Fotoğraf 2" />
        <p>Açıklama 2</p>
      </div>
    </div>

  )
}

export default ThirdComponent;