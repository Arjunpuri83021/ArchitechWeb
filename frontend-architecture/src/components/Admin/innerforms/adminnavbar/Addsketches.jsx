import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from react-icons
import { useDropzone } from 'react-dropzone'; // Import dropzone
import { Box, Button, Grid, Typography } from '@mui/material'; // MUI components for layout
import { toast } from 'react-toastify'; // Import toast from react-toastify


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

    const handleImageChange = (acceptedFiles) => {
        setSketches(acceptedFiles); // Store selected files in state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sketches.length === 0) {
            toast.error("Please select at least one image."); // Display error toast
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
            toast.success("Images uploaded successfully!"); // Display success toast

            // Optionally, fetch updated data after upload
            // fetchData();
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while uploading images. Please try again."); // Display error toast
        }
    };

    // Delete a sketch by ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                toast.success("Sketch deleted successfully!"); // Display success toast
                // Remove the deleted sketch from the UI
                setSketchData(prevData => prevData.filter(sketch => sketch._id !== id));
            } else {
                throw new Error("Failed to delete sketch.");
            }
        } catch (error) {
            console.error("Error deleting sketch:", error);
            toast.error("An error occurred while deleting the sketch. Please try again."); // Display error toast
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageChange,
        multiple: true, // Allow multiple file selection
        accept: 'image/*', // Only accept image files
    });

    return (
        <div>
            {/* Form for uploading images using Dropzone */}
            <form onSubmit={handleSubmit} className="container mt-5">
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <Box
                        border="1px dashed #ccc"
                        padding="20px"
                        textAlign="center"
                        marginBottom="20px"
                    >
                        <Typography variant="h6" color="textSecondary">
                            Drag & drop images here, or click to select files
                        </Typography>
                    </Box>
                </div>

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

            {/* Display previously uploaded images */}
            <div className="mt-4">
                <Typography variant="h4">Uploaded Sketches</Typography>
                {sketchData.length > 0 ? (
                    <Grid container spacing={3} mt={2}>
                        {sketchData.map((sketch, sketchIndex) => (
                            <Grid item key={sketch._id} xs={12} sm={6} md={4}>
                                <Box boxShadow={3} borderRadius="8px" overflow="hidden">
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        padding="10px"
                                        alignItems="center"
                                        bgcolor="primary.main"
                                    >
                                        <Typography variant="body1" color="white">
                                            Sketch {sketchIndex + 1}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(sketch._id)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </Box>
                                    <Box padding="10px">
                                        <Grid container spacing={2}>
                                            {sketch.image.map((image, index) => (
                                                <Grid item key={index} xs={4}>
                                                    <img
                                                        src={`http://localhost:5000/uploads/${image}`}
                                                        alt={`Sketch ${index + 1}`}
                                                        className="img-fluid"
                                                        style={{ width: '100%' }}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="body1">No sketches uploaded yet.</Typography>
                )}
            </div>
        </div>
    );
};

export default Addsketches;
