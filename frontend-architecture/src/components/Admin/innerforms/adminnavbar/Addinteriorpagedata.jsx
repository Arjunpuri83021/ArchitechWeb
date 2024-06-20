import React, { useState, useEffect } from 'react';

const Addinteriorpagedata = () => {
  const [architecture, setArchitecture] = useState([]);
  const [showCard, setShowCard] = useState(false);

  function handleFindArchitectureData() {
    fetch('http://localhost:5000/interior/finddata')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setArchitecture(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  }
  const toggleCardVisibility = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    handleFindArchitectureData();
  }, []);

  return (
    <>
      <div className="container d-flex align-items-center flex-column">
      <button className='btn btn-success m-2' onClick={toggleCardVisibility}>
          {showCard ? 'Hide' : 'Show'} Card
        </button>  
        {showCard && (
        <div className="card d-flex">
          {architecture.map((item, index) => (
            <div key={index} className="card-body d-flex border">
              <form className="w-100 d-flex position-relative p-4 flex-column align-items-center">
                <div className="contentedit w-100 d-flex mb-5">
                  <div className="images w-25 border">
                    <img src="/image/bg1.jpg" alt="pic" style={{ width: '100%' }} />
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
                  <button type="button" className="btn btn-primary">Delete</button>
                  <button type="button" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
};

export default Addinteriorpagedata;
