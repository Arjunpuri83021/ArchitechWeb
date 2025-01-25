import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from react-icons

const Addsketches = () => {
    const [sketches, setSketches] = useState([]);
    const [sketchData, setSketchData] = useState([]);

    // Fetch data from the server when component mounts
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

    const handleImageChange = (e) => {
        setSketches(e.target.files); // Store selected files in state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sketches.length === 0) {
            alert("Please select at least one image.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < sketches.length; i++) {
            formData.append('image', sketches[i]); // Change the field name to 'image'
        }

        try {
            const response = await fetch('http://localhost:5000/sketchespost', {
                method: 'POST',
                body: formData // Send the FormData containing images
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

            // Optionally, fetch updated data after upload
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while uploading images. Please try again.");
        }
    };

    // Delete a sketch by ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert("Sketch deleted successfully!");
                // Remove the deleted sketch from the UI
                setSketchData(prevData => prevData.filter(sketch => sketch._id !== id));
            } else {
                throw new Error("Failed to delete sketch.");
            }
        } catch (error) {
            console.error("Error deleting sketch:", error);
            alert("An error occurred while deleting the sketch. Please try again.");
        }
    };

    return (
        <div>
            {/* Form for uploading images */}
            <form onSubmit={handleSubmit} className="container mt-5">
                <div className="row">
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

            {/* Display previously uploaded images */}
            <div className="mt-4">
                <h3>Uploaded Sketches</h3>
                {sketchData.length > 0 ? (
                    <div className="row">
                        {sketchData.map((sketch, sketchIndex) => (
                            <div key={sketch._id} className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5>Sketch {sketchIndex + 1}</h5>
                                        <button
                                            onClick={() => handleDelete(sketch._id)}
                                            className="btn btn-danger"
                                        >
                                            <FaTrash /> {/* Using React Icon here */}
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            {sketch.image.map((image, index) => (
                                                <div key={index} className="col-md-3 mb-3">
                                                    <img
                                                        src={`http://localhost:5000/uploads/${image}`}
                                                        alt={`Sketch ${index + 1}`}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No sketches uploaded yet.</p>
                )}
            </div>
        </div>
    );
};

export default Addsketches;
