import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from react-icons
import { useDropzone } from 'react-dropzone'; // Import dropzone
import { Box, Button, Typography } from '@mui/material'; // MUI components for layout
import { toast } from 'react-toastify'; // Import toast from react-toastify
import Slider from 'react-slick'; // Import Slider from react-slick

// Import styles for the slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AddHomeImages = () => {
    const [homeImages, setHomeImages] = useState([]); // Renamed sketches to homeImages
    const [homeImagesData, setHomeImagesData] = useState([]); // Renamed sketchData to homeImagesData

    // Fetch data from the server when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/Homeimagespost');
                if (response.ok) {
                    const data = await response.json();
                    setHomeImagesData(data.data); // Assuming 'data' contains the home images
                } else {
                    console.error('Failed to fetch home images data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleImageChange = (acceptedFiles) => {
        setHomeImages(acceptedFiles); // Store selected files in state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (homeImages.length === 0) {
            toast.error("Please select at least one image."); // Show error toast
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < homeImages.length; i++) {
            formData.append('image', homeImages[i]); // Changed field name to 'image'
        }

        try {
            const response = await fetch('http://localhost:5000/Homeimagespost', {
                method: 'POST',
                body: formData // Send the FormData containing images
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            // Clear the file input after successful submission
            setHomeImages([]);
            toast.success("Images uploaded successfully!"); // Show success toast

            // Optionally, fetch updated data after upload
            // fetchData();
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while uploading images. Please try again."); // Show error toast
        }
    };

    // Delete a home image by ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/Homeimagespost/delete/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                toast.success("Home image deleted successfully!"); // Show success toast
                // Remove the deleted home image from the UI
                setHomeImagesData(prevData => prevData.filter(homeImage => homeImage._id !== id));
            } else {
                throw new Error("Failed to delete home image.");
            }
        } catch (error) {
            console.error("Error deleting home image:", error);
            toast.error("An error occurred while deleting the home image. Please try again."); // Show error toast
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageChange,
        multiple: true, // Allow multiple file selection
        accept: 'image/*', // Only accept image files
    });

    // Settings for the Slick Slider
    const sliderSettings = {
        dots: true, // Display navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Only show one slide at a time
        slidesToScroll: 1, // Scroll one image at a time
        arrows: true, // Enable arrows for navigation
    };

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

            {/* Display previously uploaded home images */}
            <div className="mt-4">
                <Typography variant="h4">Uploaded Home Images</Typography>
                {homeImagesData.length > 0 ? (
                    <Box display="flex" flexDirection="column" alignItems="flex-start" mt={2}>
                        {homeImagesData.map((homeImage, homeImageIndex) => (
                            <Box
                                key={homeImage._id}
                                boxShadow={3}
                                borderRadius="8px"
                                overflow="hidden"
                                width="100%" // Ensuring full width for the box
                                marginBottom="20px"
                            >
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    padding="10px"
                                    alignItems="center"
                                    bgcolor="primary.main"
                                >
                                    <Typography variant="body1" color="white">
                                        Home Image {homeImageIndex + 1}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDelete(homeImage._id)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </Box>
                                <Box padding="10px">
                                    {/* Image Slider */}
                                    <Slider {...sliderSettings}>
                                        {homeImage.image.map((image, index) => (
                                            <div key={index}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        height: '400px', // Increased height
                                                        overflow: 'hidden',
                                                        border: '1px solid #ccc'
                                                    }}
                                                >
                                                    <img
                                                        src={`http://localhost:5000/uploads/${image}`}
                                                        alt={`Home Image ${index + 1}`}
                                                        style={{
                                                            width: '100%', // Full width
                                                            height: 'auto', // Maintain aspect ratio
                                                            objectFit: 'cover', // Ensure image covers the box without distortion
                                                        }}
                                                    />
                                                </Box>
                                            </div>
                                        ))}
                                    </Slider>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body1">No home images uploaded yet.</Typography>
                )}
            </div>
        </div>
    );
};

export default AddHomeImages;
