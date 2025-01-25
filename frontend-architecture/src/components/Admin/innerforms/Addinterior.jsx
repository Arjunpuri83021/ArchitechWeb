import React, { useState } from 'react';
import Addinteriorpagedata from './adminnavbar/Addinteriorpagedata';

const Addinterior = () => {
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [uploadStatus, setUploadStatus] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('category', category);
    formData.append('desc', desc);
    formData.append('area', area);
    formData.append('address', address);
    formData.append('date', date);
    formData.append('status', status);
  
    // Append images
    Array.from(images).forEach(file => {
      formData.append('image', file); // Key must match the multer field name
    });
  
    try {
      const response = await fetch('http://localhost:5000/datapostinterior', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log("Response from server:", data);
  
      if (response.ok) {
        setUploadStatus("Images uploaded successfully!");
      } else {
        setUploadStatus("Failed to upload images.");
      }
  
      // Reset form fields after submission
      setCategory("");
      setDesc("");
      setArea("");
      setAddress("");
      setDate("");
      setStatus("");
      setImages([]);
      document.getElementById("inputImages").value = ""; // Clear the file input
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus("An error occurred while uploading.");
    }
  };
  

  return (
    <div className="container mt-3 d-flex align-items-center flex-column">
      <h2>Add Interior Projects</h2>
      <form onSubmit={handleSubmit} className="w-50 border p-3 shadow">
        <div className="mb-3 row">
          <label htmlFor="inputCategory" className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select Category</option>
              <option value="RESIDENTIAL">RESIDENTIAL</option>
              <option value="OFFICES">OFFICES</option>
              <option value="RETAIL">RETAIL</option>
              <option value="RETAIL & ENTERTAINMENT">RETAIL & ENTERTAINMENT</option>
              <option value="INSTALLATION">INSTALLATION</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputArea" className="col-sm-2 col-form-label">Area</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputArea"
              placeholder="1234 sq/feet"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputImages" className="col-sm-2 col-form-label">Images</label>
          <div className="col-sm-10">
            <input
              type="file"
              multiple
              className="form-control"
              id="inputImages"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="inputDescription"
              placeholder="Description"
              rows="3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>Select Status</option>
              <option value="Completed">Completed</option>
              <option value="UnderConstruction">Under Construction</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-danger">Submit</button>
      </form>
      {uploadStatus && <p className="mt-3">{uploadStatus}</p>}
      <Addinteriorpagedata />
    </div>
  );
};

export default Addinterior;
