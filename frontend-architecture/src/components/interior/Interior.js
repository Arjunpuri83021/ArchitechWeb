import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './interior.css'

import { Link } from 'react-router-dom';

const Interior = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const handleInterior = async () => {
      try {
        const response = await axios.get('http://localhost:5000/interior/finddata');
        const projects = response.data.data;
        setData(projects);
        setFilteredData(projects);
        const uniqueCategories = [...new Set(projects.map(project => project.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    handleInterior();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = data.filter(project => project.category === category);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="container">
      <div className="category-buttons container d-flex align-items-center justify-content-center gap-3 mt-2">
      <button onClick={() => filterByCategory('')} className={!selectedCategory ? 'active' : ''}>All</button>
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => filterByCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
       
      </div>
      <div className="row m-2 d-flex align-items-center justify-content-around flex-wrap">
        {filteredData.map((project) => (
          <div className="d-flex flex-column align-items-center mainsection m-2" key={project._id}>
            <Link 
              style={{ width: "100%", height: "250px", marginTop: "10px" }} 
              to={`/paramsinterior/${project._id}`}
            >
              <img 
                src={`http://localhost:5000/uploads/${project.image[0]}`} 
                alt={project.name} 
                style={{ width: "100%", height: "100%" }} 
              />
            </Link>
            <p>{project.Address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interior;
