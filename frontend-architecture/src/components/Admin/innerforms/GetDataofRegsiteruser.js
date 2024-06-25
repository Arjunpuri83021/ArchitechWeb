import React, { useEffect, useState } from 'react';

const GetDataofRegsiteruser = () => {
  const [registered, setRegistered] = useState([]);

  function Registerformdata() {
    fetch('http://localhost:5000/Registereducation/finddata')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegistered(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  }

  useEffect(() => {
    Registerformdata();
  }, []);

  return (
    <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>DOB</th>
          <th>Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {registered.map((user) => (
          <tr key={user._id}>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={`http://localhost:5000/uploads/${user.profileImage}`}
                  alt=""
                  style={{ width: '45px', height: '45px' }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{user.fname}</p>
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{user.address}</p>
            </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline text-dark">{user.dob}</span>
            </td>
            <td>{user.mobnumber}</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GetDataofRegsiteruser;
