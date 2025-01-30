import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import { useDropzone } from 'react-dropzone'; // Import react-dropzone
import Addarchitecturedata from './Addarchitecturedata';
import { toast } from 'react-toastify'; // Import toastify

// Initialize toast container at the top of your component or App.js

const Addprojects = () => {
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [images, setImages] = useState([]); // Store files here
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

    const handleDrop = (acceptedFiles) => {
        setImages(acceptedFiles); // Set the images state when files are dropped or selected
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

        // Append multiple images to FormData
        images.forEach((image) => {
            formData.append('image', image);
        });

        try {
            const response = await fetch('http://localhost:5000/datapost', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Project added successfully!');
            } else {
                toast.error('Failed to add project.');
            }

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
            toast.error('Error occurred while adding the project.');
        }
    };

    // react-dropzone hook
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        multiple: true, // Allow multiple files to be selected
        accept: 'image/*' // Only allow image files
    });

    return (
        <Box sx={{ padding: 3 }}>
            <form onSubmit={handleSubmit} className='bg-white p-3'>
                <Typography
                    variant="h4"
                    align="start"
                    gutterBottom
                    sx={{
                        borderBottom: '1px solid rgb(0, 0, 0)', // Border color
                        paddingBottom: '8px'  // Padding below the text
                    }}
                >
                    Add Architecture Projects
                </Typography>

                <Grid container spacing={3}>
                    {/* Category */}
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Category</div>
                        <FormControl fullWidth>
                            <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Category' }}
                            >
                                <MenuItem value="" disabled>Select Category</MenuItem>
                                <MenuItem value="MASTER PLANNING/TOWNSHIP">MASTER PLANNING/TOWNSHIP</MenuItem>
                                <MenuItem value="HOUSING PROJECTS">HOUSING PROJECTS</MenuItem>
                                <MenuItem value="OFFICE BUILDING">OFFICE BUILDING</MenuItem>
                                <MenuItem value="RETAIL & ENTERTAINMENT">RETAIL & ENTERTAINMENT</MenuItem>
                                <MenuItem value="PRIVATE HOUSES">PRIVATE HOUSES</MenuItem>
                                <MenuItem value="EDUCATION">EDUCATION</MenuItem>
                                <MenuItem value="VILLAS">VILLAS</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Address */}
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Address</div>
                        <TextField
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>

                    {/* Date and Area */}
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Date</div>
                        <TextField
                            fullWidth
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true, // Make sure the label is always on top
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Area (sq/feet)</div>
                        <TextField
                            fullWidth
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>

                    {/* Images */}
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Images</div>
                        <div {...getRootProps()} style={{ border: '2px dashed #007BFF', padding: '20px', textAlign: 'center' }}>
                            <input {...getInputProps()} />
                            <p>Drag & drop files here, or click to select files</p>
                        </div>
                        <div>
                            {/* Display number of files */}
                            {images && images.length > 0 && (
                                <p>{images.length} file{images.length > 1 ? 's' : ''} selected</p>
                            )}
                        </div>
                    </Grid>

                    {/* Description */}
                    <Grid item xs={12}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Description</div>
                        <TextField
                            fullWidth
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Grid>

                    {/* Status */}
                    <Grid item xs={12} md={6}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Status</div>
                        <FormControl fullWidth>
                            <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Status' }}
                            >
                                <MenuItem value="" disabled>Select Status</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="UnderConstruction">Under Construction</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{
                                paddingTop: '8px',
                                borderTop: '1px solid rgb(0, 0, 0)', // Border color
                                backgroundColor: '#007BFF', // Set the background color
                                '&:hover': {
                                    backgroundColor: '#0056b3', // Darken the color when hovered
                                },
                                transition: 'background-color 0.3s ease', // Smooth transition on hover
                                padding: '12px 16px', // Add padding to increase the button height
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </form>

            {/* Render Add Architecture Data */}
            <Addarchitecturedata />
        </Box>
    );
};

export default Addprojects;
