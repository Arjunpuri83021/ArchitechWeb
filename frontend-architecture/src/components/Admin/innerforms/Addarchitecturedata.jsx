import React, { useState, useEffect, useContext } from 'react';
import { Logincontext } from '../Logincontext/Adminlogincontext';

const Addarchitecturedata = () => {
  const [architecture, setArchitecture] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const { dataarchitecture, setarchitecture } = useContext(Logincontext);

  const handleFindArchitectureData = () => {
    fetch('http://localhost:5000/finddata')
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

  const toggleCardVisibility = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    handleFindArchitectureData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deletedata/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        handleFindArchitectureData();
      }

      console.log(`Successfully deleted user: ${data.message}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container d-flex align-items-center flex-column">
      
        <div className="card d-flex">
          {architecture.map((item) => (
            <div key={item._id} className="card-body mt-4">
              <form className="w-100 d-flex position-relative p-4 flex-column align-items-center">
                <div className="contentedit w-100 d-flex mb-5">
                  <div className="images w-25 border">
                    <img src={`http://localhost:5000/uploads/${item.image[0]}`} alt="pic" style={{ width: '100%' }} />
                  </div>
                  <div className="details w-75">
                    <div className="mb-3 d-flex">
                      <input type="text" className="form-control" placeholder="Category" value={item.category} readOnly />
                      <input type="text" className="form-control" placeholder="Address" value={item.Address} readOnly />
                      <input type="text" className="form-control" placeholder="Area" value={item.Area} readOnly />
                    </div>
                    <div className="mb-3 d-flex gap-3">
                      <div className="inputs w-50">
                        <input type="text" className="form-control" placeholder="Date" value={item.date} readOnly />
                        <input type="text" className="form-control" placeholder="Status" value={item.status} readOnly />
                      </div>
                      <textarea placeholder="Description" className="w-50 rounded" rows={2} value={item.desc} readOnly />
                    </div>
                  </div>
                </div>
                <div className="buttons position-absolute border w-100 bottom-0 p-1 mt-3 d-flex gap-4">
                  <button type="button" className="btn btn-primary">Submit</button>
                  <button type="button" onClick={() => handleDeleteUser(item._id)} className="btn btn-danger">Delete</button>
                  <button type="button" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Addarchitecturedata;
