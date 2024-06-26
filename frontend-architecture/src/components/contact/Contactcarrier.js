import React, { useState } from 'react';
import "./contactcarrier.css";

const Contactcarrier = () => {
  const [fname, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [mobNo, setMobNo] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('dob', dob);
    formData.append('mobNo', mobNo);
    formData.append('profile', profile);

    fetch('http://localhost:5000/Registereducation', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFName('')
        setEmail('')
        setAddress('')
        setDob('')
        setMobNo('')
        setProfile('')
    
        e.target.reset()
      });
  };

  return (
    <>
      <section>
        <div
          style={{
            background: "linear-gradient(to right, rgba(57, 49, 175, 1) 0%, rgba(0, 198, 255, 1) 100%)"
          }}
          className="container mb-2"
        >
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5 border">
              <h1 className='text-center'>Join Now <br />For Better Carrier</h1>
            </div>
            <div className="col-lg-6 border">
              <form className="contact-form d-flex flex-column p-5 gap-3" onSubmit={handleSubmit}>
                <h3 className="text-center text-light">Register Form</h3>
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Full name"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mob number"
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                />
                <input
                  type="file"
                  className="form-control"
                  placeholder="Profile"
                  onChange={(e) => setProfile(e.target.files[0])}
                />
                <button style={{ width: "8vw" }} type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactcarrier;
