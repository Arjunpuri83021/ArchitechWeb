import React, { useState } from 'react';

const Addsketches = () => {
    const [sketches, setSketches] = useState([]);

    const handleImageChange = (e) => {
        setSketches(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sketches.length === 0) {
            alert("Please select at least one image.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < sketches.length; i++) {
            formData.append('Sketches', sketches[i]);
        }

        try {
            const response = await fetch('http://localhost:5000/sketchespost', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            // Clear the file input after successful submission
            setSketches([]);
            document.getElementById('inputImages').value = null;
            alert("Images uploaded successfully!");

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while uploading images. Please try again.");
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit} className='container mt-5 '>
            <div className=" row">
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default Addsketches;
