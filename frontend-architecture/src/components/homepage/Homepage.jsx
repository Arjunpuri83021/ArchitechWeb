import React from 'react'
import './homepage.css'

const Homepage = () => {
  return (
    <>
      <div  id="carouselExampledark" className="carousel carousel-dark slide ">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampledark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div  className="carousel-inner">
        <div className="carousel-item active">
          <img src="./image/bg7.jpg" className="d-block w-100 h-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
        <img src="./image/bg9.jpg" className="d-block w-100 h-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="./image/bg8.jpg" className="d-block w-100 h-100" alt="Slide 3" />
        </div>
      </div>
      <button  className="carousel-control-prev " type="button" data-bs-target="#carouselExampledark" data-bs-slide="prev">
        <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampledark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    



    
    
    
    </>
  )
}

export default Homepage
