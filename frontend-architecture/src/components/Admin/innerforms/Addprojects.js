import React, { useState } from 'react';
import Addarchitecturedata from './Addarchitecturedata';

const Addprojects = () => {
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [images, setImages] = useState([]);
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

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
        
        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }

        try {
            const response = await fetch('http://localhost:5000/datapost', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(data);

            // Clear the form after submission
            setCategory("");
            setDesc("");
            setImages([]);
            setArea("");
            setAddress("");
            setDate("");
            setStatus("");
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-3 d-flex align-items-center flex-column">
            <h2>Add Architecture Projects</h2>
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
                            <option value="MASTER PLANNING/TOWNSHIP">MASTER PLANNING/TOWNSHIP</option>
                            <option value="HOUSING PROJECTS">HOUSING PROJECTS</option>
                            <option value="OFFICE BUILDING">OFFICE BUILDING</option>
                            <option value="RETAIL & ENTERTAINMENT">RETAIL & ENTERTAINMENT</option>
                            <option value="PRIVATE HOUSES">PRIVATE HOUSES</option>
                            <option value="EDUCATION">EDUCATION</option>
                            <option value="VILLAS">VILLAS</option>
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
            <Addarchitecturedata />
        </div>
    );
};

export default Addprojects;
