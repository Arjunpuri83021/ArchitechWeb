import React from 'react'
import './homepage.css'
import menuItem1Image from '../architercter img/building img 1.jpg'
import menuItem2Image from '../architercter img/building img 2.jpg'
import menuItem3Image from '../architercter img/bulding img 4.jpg'

import Image1 from '../architercter img/sketches2.jpg';
import Image2 from '../architercter img/sketches3.jpg'
import Image3 from '../architercter img/sketches4.jpg'
import Image4 from '../architercter img/sketches5.jpg'
import Image5 from '../architercter img/sketches6.jpg'
import Image6 from '../architercter img/sketches7.jpg'

const Homepage = () => {
  return (
    <>


<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="image carousel-item active">
                        <img src={menuItem1Image} alt="Image" className="rounded-md " />
                    </div>
                    <div className="image carousel-item">
                        <img src={menuItem2Image} alt="Image" className="rounded-md " />
                    </div>
                    <div className="image carousel-item">
                        <img src={menuItem3Image} alt="Image" className="rounded-md " />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="inner-back-text">
    <h1>Sanjay puri <br />
      <span>Creative &amp; Professional</span></h1>
    <p>
    Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.
      </p>
    <div className="inner-back-btn">
    <button className='btn btn-warning'>Read More </button>
    </div>
  </div>
            </div>


            <div className="our-gallery">
  <h1>sketches </h1>
  <div className="main-gallery mt-5">
    <div className="inner-gallery">
      <img src={Image1} alt />
    </div>
    <div className="inner-gallery">
      <img src={Image2} alt />
    </div>
    <div className="inner-gallery">
      <img src={Image3} alt />
    </div>
    <div className="inner-gallery">
      <img src={Image4} alt />
    </div>
    <div className="inner-gallery">
      <img src={Image5} alt />
    </div>
    <div className="inner-gallery">
      <img src={Image6} alt />
    </div>
  </div>
</div>
    

    



    
    
    
    </>
  )
}

export default Homepage
