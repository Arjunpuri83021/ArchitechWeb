import React, { useState, useEffect } from 'react';
import './homepage.css';

const Homepage = () => {
  const [sketchData, setSketchData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentSketchImages, setCurrentSketchImages] = useState([]);
  const [homeImagesData, setHomeImagesData] = useState([]); // New state to store home images

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

  useEffect(() => {
    const fetchHomeImagesData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Homeimagespost');
        if (response.ok) {
          const data = await response.json();
          setHomeImagesData(data.data); // Assuming 'data' contains the home images
        } else {
          console.error('Failed to fetch home images data');
        }
      } catch (error) {
        console.error('Error fetching home images data:', error);
      }
    };
    fetchHomeImagesData();
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
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
        <div className="carousel-indicators">
          {homeImagesData.length > 0 && homeImagesData[0].image && homeImagesData[0].image.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {homeImagesData.length > 0 && homeImagesData[0].image && homeImagesData[0].image.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={`http://localhost:5000/uploads/${image}`} // Show each image
                alt={`Home Image ${index + 1}`}
                className="d-block w-100 border"
                style={{ height: '90vh' }}
              />
            </div>
          ))}
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
