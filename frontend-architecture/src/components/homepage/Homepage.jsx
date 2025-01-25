import React, { useState, useEffect } from 'react';
import './homepage.css';
import menuItem1Image from '../architercter img/building img 1.jpg';
import menuItem2Image from '../architercter img/building img 2.jpg';
import menuItem3Image from '../architercter img/bulding img 4.jpg';

const Homepage = () => {
  const [sketchData, setSketchData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentSketchImages, setCurrentSketchImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getdata');
        if (response.ok) {
          const data = await response.json();
          setSketchData(data.data); // Assuming 'data' contains the sketches
        } else {
          console.error('Failed to fetch sketch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const openPopup = (sketchImages, index) => {
    setCurrentSketchImages(sketchImages); // Set the images for the clicked sketch
    setActiveImageIndex(index);  // Set the active image to the clicked one
    setShowPopup(true);  // Open the popup
  };

  const closePopup = () => {
    setShowPopup(false);  // Close the popup
  };

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % currentSketchImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + currentSketchImages.length) % currentSketchImages.length
    );
  };

  return (
    <>
      {/* Carousel Section */}
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
            <button className='btn btn-warning'>Read More</button>
          </div>
        </div>
      </div>

      {/* Sketches Gallery */}
      <div className="our-gallery">
        <h1>Sketches</h1>
        <div className="main-gallery mt-5">
          {sketchData.length > 0 ? (
            sketchData.map((sketch, index) => (
              <div key={index} className="inner-gallery">
                <img
                  src={`http://localhost:5000/uploads/${sketch.image[0]}`}  // Show the first image
                  alt={`Sketch ${index + 1}`}
                  className="img-fluid"
                  onClick={() => openPopup(sketch.image, 0)}  // Open the popup on click
                />
              </div>
            ))
          ) : (
            <p>No sketches uploaded yet.</p>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-image-container">
              <img
                src={`http://localhost:5000/uploads/${currentSketchImages[activeImageIndex]}`}
                alt={`Popup image ${activeImageIndex + 1}`}
                className="popup-image"
              />
              <div className="popup-controls">
                <button className="popup-prev" onClick={prevImage}>❮</button>
                <button className="popup-next" onClick={nextImage}>❯</button>
              </div>
            </div>
            <button className="popup-close" onClick={closePopup}>✖</button> {/* Close button */}
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
