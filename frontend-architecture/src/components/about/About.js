import React from 'react'

import menuItem2Image from '../architercter img/Construction1.jpg';
import menuItem3Image from '../architercter img/Construction2.jpg'
import menuItem4Image from '../architercter img/Construction3.jpg'
import menuItem5Image from '../architercter img/Construction4.jpg'
import menuItem6Image from '../architercter img/Construction5.jpg'
import menuItem7Image from '../architercter img/Construction6.jpg'


export default function About() {
    return (
        <>
           <div className="background-image">
  <div className="inner-back-text">
    <h1>ROCK  WORLD <br />
      <span>Creative &amp; Professional</span></h1>
    <p>
    Online Shopping Site for Fashion & Lifestyle in India. Buy Shoes, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store Easy returns and exchanges
      </p>
    <div className="inner-back-btn">
    <button className='btn btn-warning'>Read More </button>
    </div>
  </div>
</div>

    <div className="our-gallery">
  <h1>Made <span>my company</span> and our team </h1>
  <div className="main-gallery mt-5">
    <div className="inner-gallery">
      <img src={menuItem2Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem3Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem4Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem5Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem6Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem7Image} alt />
    </div>
  </div>
</div>








        </>
    )
}
