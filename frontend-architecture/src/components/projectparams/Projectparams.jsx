import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './projectparams.css';

const Projectparams = () => {
  const [product, setProduct] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/findbyid/${id}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchById();
  }, [id]);

  // Handle image click to open popup
  const openPopup = (index) => {
    setActiveImageIndex(index);
    setShowPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Go to the next image
  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length
    );
  };

  return (
    <>
      {product && (
        <div className="container">
          <div className="row border-bottom">
            <h2 className="text-center">{product.Address}</h2>
          </div>
          <div className="row d-flex p-4">
            {product.image && product.image.map((img, index) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 sideimages d-flex flex-wrap mb-3" key={index}>
                <img
                  src={`http://localhost:5000/uploads/${img}`}
                  alt={`${product.name} ${index + 1}`}
                  className="img-fluid"
                  onClick={() => openPopup(index)}  // Open popup on click
                />
              </div>
            ))}
          </div>
          <div className="row border">
            <div className="col-lg-7 col-md-6 col-sm-12 border-end mb-3 mb-md-0">
              <p>{product.desc}</p>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="d-flex justify-content-between mb-3">
                <h6>Location <br /> <p className="small-text">{product.Address}</p></h6>
                <h6>Area <br /> <p className="small-text">{product.Area}</p></h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Date of completion <br /> <p className="small-text">{product.date}</p></h6>
                <h6>Status <br /> <p className="small-text">{product.status}</p></h6>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-image-container">
              <img
                src={`http://localhost:5000/uploads/${product.image[activeImageIndex]}`}
                alt={`Popup image ${activeImageIndex + 1}`}
                className="popup-image"
              />
              <div className="popup-controls">
                <button className="popup-prev" onClick={prevImage}>❮</button>
                <button className="popup-next" onClick={nextImage}>❯</button>
              </div>
            </div>
            <button className="popup-close" onClick={closePopup}>✖</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projectparams;
