import React, { useState } from 'react';

const Addinterior = () => {
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
        formData.append('Area', area);
        formData.append('Address', address);
        formData.append('date', date);
        formData.append('status', status);
        
        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }

        try {
            const response = await fetch('http://localhost:5000/datapostinterior', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-3 ">
            <h2>Add projects</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputCategory" className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputCategory" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="inputDate" onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputArea" className="col-sm-2 col-form-label">Area</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputArea" placeholder="1234 sq/feet" onChange={(e) => setArea(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputImages" className="col-sm-2 col-form-label">Images</label>
                    <div className="col-sm-10">
                        <input type="file" multiple className="form-control" id="inputImages" onChange={handleImageChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="inputDescription" placeholder="Description" rows="3" onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputStatus" placeholder="Status" onChange={(e) => setStatus(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-danger ">Submit</button>
                
            </form>
        </div>
    );
};

export default Addinterior;

