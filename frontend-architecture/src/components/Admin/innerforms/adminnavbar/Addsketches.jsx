import React from 'react'
import { useState } from 'react';

const Addsketches = () => {
    const [images, setImages] = useState([]);
    const handleImageChange = (e) => {
        setImages(e.target.files);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
       
        
        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }

        try {
            const response = await fetch('http://localhost:5000/sketchespost', {
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
    <>
   
        <form action="" onSubmit={handleSubmit}>

        <div className="mb-3 row">

        <label htmlFor="inputImages" className="col-sm-2 col-form-label">Images</label>
                    <div className="col-sm-10">
                        <input type="file" multiple className="form-control" id="inputImages" onChange={handleImageChange} />
                    </div>
                    </div>
                    <button type='submit'>submit</button>
        </form>
                   
    
    
    
    
    
    </>
  )
}

export default Addsketches