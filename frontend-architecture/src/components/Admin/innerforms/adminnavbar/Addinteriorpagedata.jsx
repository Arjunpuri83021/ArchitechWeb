import React, { useState, useEffect, useContext } from 'react';
import { Logincontext } from '../../Logincontext/Adminlogincontext';
import { Button, Grid, TextField, Tooltip, IconButton, Input, FormControl, Select, MenuItem } from '@mui/material';
import { Upload as UploadIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Addinteriorpagedata = () => {
  const [architecture, setArchitecture] = useState([]);
  const { dataarchitecture, setarchitecture } = useContext(Logincontext);
  const [editMode, setEditMode] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState('');

  const handleFindArchitectureData = () => {
    fetch('http://localhost:5000/interior/finddata')
      .then((res) => res.json())
      .then((data) => {
        setArchitecture(data.data);
        localStorage.setItem('architectureprojectslength', data.data.length);
        setarchitecture(localStorage.getItem('architectureprojectslength'));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    handleFindArchitectureData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/interiorDelete/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        handleFindArchitectureData();
        toast.success('Project deleted successfully');
      } else {
        toast.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error occurred while deleting project');
    }
  };

  const handleEditClick = (item) => {
    setEditMode(true);
    setCurrentProject(item);
    setNewImages([]); // Reset new images
    setSelectedDate(item.date); // Set the current project's date for editing
    setStatus(item.status); // Set the current status for editing
  };

  const handleImageChange = (event) => {
    setNewImages(event.target.files); // Add new images
  };

  const handleCancelImage = (index) => {
    const updatedImages = [...newImages];
    updatedImages.splice(index, 1); // Remove the image at the index
    setNewImages(updatedImages);
  };

  const handleUpdateProject = async () => {
    if (!currentProject) return;

    const formData = new FormData();
    formData.append('category', currentProject.category);
    formData.append('address', currentProject.address);
    formData.append('desc', currentProject.desc);
    formData.append('date', selectedDate);
    formData.append('area', currentProject.area);
    formData.append('status', status);

    // Append the new images to the formData
    if (newImages.length > 0) {
      Array.from(newImages).forEach((file) => {
        formData.append('image', file);
      });
    }

    try {
      const response = await fetch(`http://localhost:5000/datapostinterior/${currentProject._id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setEditMode(false);
        handleFindArchitectureData();
        setCurrentProject(null);
        setStatus('');
        toast.success('Project updated successfully');
      } else {
        toast.error('Failed to update project');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error occurred while updating project');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {architecture.map((item) => (
        <div key={item._id} className="d-flex mb-4 border bg-white p-4 w-100 flex-column align-items-center">
          <div className="d-flex gap-2 w-100 mb-4">
            {/* Images section */}
            <div className="images w-25 border mr-2" style={{ maxWidth: '200px' }}>
              <Grid container spacing={2}>
                {item.image && item.image.map((img, index) => (
                  <Grid item xs={4} key={index}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={`http://localhost:5000/uploads/${img}`}
                        alt={`pic-${index}`}
                        style={{ width: '100%', height: '40px', marginBottom: '10px', border: '1px solid black' }}
                      />
                      <IconButton
                        style={{ position: 'absolute', top: '0', right: '0' }}
                        color="error"
                        onClick={() => handleCancelImage(index)}
                      >
                        <CancelIcon />
                      </IconButton>
                    </div>
                  </Grid>
                ))}
                {/* File upload icon for new images */}
                {newImages.length === 0 && (
                  <Grid item xs={4}>
                    <label htmlFor={`upload-image-${item._id}`}>
                      <IconButton color="primary" component="span">
                        <UploadIcon />
                      </IconButton>
                    </label>
                    <Input
                      id={`upload-image-${item._id}`}
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      style={{ display: 'none' }}
                    />
                  </Grid>
                )}
              </Grid>
            </div>

            {/* Editable Fields */}
            <div className="details w-75 ml-2">
              <div className="d-flex flex-wrap">
                <div className="form-group mb-3 w-100 d-flex">
                  <TextField
                    fullWidth
                    label="Category"
                    value={item.category}
                    variant="outlined"
                    InputProps={{ readOnly: true }}
                  />
                </div>

                <div className="form-group mb-3 w-100 d-flex gap-3">
                  <TextField
                    fullWidth
                    label="Address"
                    value={editMode && currentProject._id === item._id ? currentProject.address : item.address}
                    onChange={(e) => setCurrentProject({ ...currentProject, address: e.target.value })}
                    variant="outlined"
                    InputProps={{ readOnly: !editMode || currentProject._id !== item._id }}
                  />
                  <TextField
                    fullWidth
                    label="Area (sq/feet)"
                    value={editMode && currentProject._id === item._id ? currentProject.area : item.area}
                    onChange={(e) => setCurrentProject({ ...currentProject, area: e.target.value })}
                    variant="outlined"
                    InputProps={{ readOnly: !editMode || currentProject._id !== item._id }}
                  />
                </div>

                {/* Date and Status Inputs */}
                <div className="form-group mb-3 w-100 d-flex gap-3">
                  <TextField
                    fullWidth
                    label="Date"
                    type="date"
                    value={editMode && currentProject._id === item._id ? selectedDate : item.date}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    disabled={!editMode || currentProject._id !== item._id}
                  />
                  <FormControl fullWidth disabled={!editMode || currentProject._id !== item._id}>
                    <Select
                      value={editMode && currentProject._id === item._id ? status : item.status}
                      onChange={(e) => setStatus(e.target.value)}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>Select Status</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="UnderConstruction">Under Construction</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="form-group mb-3 w-100">
                  <TextField
                    fullWidth
                    label="Description"
                    value={editMode && currentProject._id === item._id ? currentProject.desc : item.desc}
                    onChange={(e) => setCurrentProject({ ...currentProject, desc: e.target.value })}
                    variant="outlined"
                    multiline
                    rows={2}
                    InputProps={{ readOnly: !editMode || currentProject._id !== item._id }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons for actions */}
          <div className="d-flex justify-content-end w-100 mt-3 border-top p-2">
            {!editMode ? (
              <>
                <Tooltip title="Click to edit">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(item)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                </Tooltip>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteUser(item._id)}
                  style={{ marginRight: '10px' }}
                >
                  Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateProject}
                  style={{ marginRight: '10px' }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setEditMode(false)}
                  style={{ marginRight: '10px' }}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Addinteriorpagedata;
