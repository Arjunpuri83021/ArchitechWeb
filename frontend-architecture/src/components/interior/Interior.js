import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './interior.css'

const Interior = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleArchitecture = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects/interior');
      const projects = response.data.data;
      setData(projects);
      setFilteredData(projects);
      const uniqueCategories = [...new Set(projects.map(project => project.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    handleArchitecture();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    // if (category === 'All') {
    //   setFilteredData(data);
    // } else {  }
      const filtered = data.filter(project => project.category === category);
      setFilteredData(filtered);
  
  };

  return (
    <>
      <div className="container ">
        <div className="category-buttons  container d-flex align-items-center justify-content-center gap-3 mt-2">
          
          {categories.map((category) => (
            <button  key={category} onClick={() => filterByCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="row m-2 d-flex align-items-center justify-content-around flex-wrap">
          {filteredData.map((product) => (
            <div className="d-flex flex-column align-items-center  mainsection   m-2" key={product._id}>
              <Link style={{ width: "100%", height: "250px", marginTop: "10px" }} to={`/params/${product._id}`}>
                <img src={`http://localhost:5000/uploads/${product.image[0]}`} alt={product.name} style={{ width: "100%", height: "100%" }} />
              </Link>
              <p>{product.Address}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interior;
