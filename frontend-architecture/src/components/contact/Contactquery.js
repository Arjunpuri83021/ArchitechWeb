import React, { useState } from 'react';
import { Toast } from 'bootstrap';

const Contactquery = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (e) => {
    e.preventDefault();

    const formData = { name, email, query };

    fetch('http://localhost:5000/contactquery', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        Toast.success(data.message);
        setName('');
        setEmail('');
        setQuery('');
        setMessage('');
        e.target.reset();
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div style={{ backgroundColor: '#ECEFF7' }} className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-6 border d-flex align-items-center flex-column justify-content-center">
              <h1 className="text-center">Contact us</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga molestiae. Aspernatur, accusantium. Veritatis, vitae?
              </p>
              <div className="row d-flex align-items-center justify-content-center mb-3 gap-3">
                <div style={{ height: '20vh' }} className="col-lg-3 border d-flex align-items-center justify-content-center flex-column p-4">
                  <i style={{ fontSize: '2vw' }} className="bi bi-envelope"></i>
                  <p>Email1234@gmail.com</p>
                </div>
                <div style={{ height: '20vh' }} className="col-lg-3 border d-flex align-items-center justify-content-center flex-column p-4">
                  <i style={{ fontSize: '2vw' }} className="bi bi-telephone-inbound-fill"></i>
                  <p>+918943554355</p>
                </div>
                <div style={{ height: '20vh' }} className="col-lg-3 border d-flex align-items-center justify-content-center flex-column p-4">
                  <i style={{ fontSize: '2vw' }} className="bi bi-geo-alt-fill"></i>
                  <p>P no 141 Shipra Path, Jaipur</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 bg-dark rounded mt-2 mb-2">
              <form onSubmit={handleContact} className="contact-form d-flex flex-column p-5 gap-3">
                <h3 className="text-center text-light">Leave us message</h3>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control w-100"
                  placeholder="Full name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <textarea
                  onChange={(e) => setQuery(e.target.value)}
                  rows={5}
                  className="form-control"
                  placeholder="Tell about your Query"
                  defaultValue=""
                />
                <button type="submit" className="btn btn-danger">
                  Submit Query
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactquery;