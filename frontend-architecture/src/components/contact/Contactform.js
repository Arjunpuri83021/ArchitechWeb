import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./contact.css";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobnumber, setMobnumber] = useState('');
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobnumber', mobnumber);
    formData.append('message', message);
    formData.append('resume', resume);
    formData.append('profile', profile);

    fetch('http://localhost:5000/Registereducation', {
      method: 'POST',
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setName('');
      setEmail('');
      setMobnumber('');
      setMessage('');
      setResume(null);
      setProfile(null);
      
      e.target.reset();
      setSuccessMessage('Successfully applied!');
   
      

      
    });
  };

  return (
    <>
      <section>
        <h1 className='text-center'>"Your Path to Success Begins Here: Join Today!"</h1>
        <div className="container w-75">
          <div className="row d-flex justify-content-center p-4 mb-2">
            <div className="col-lg-10 p-5 gap-4 border">
              <h2 className='w-50 border-bottom mb-4'>REGISTRATION FORM</h2>
              {successMessage && <p className='text-success'>{successMessage}</p>}

              <form onSubmit={handleSubmit}>
                <div className="input-field d-flex flex-column">
                  <label style={{width:"10vw"}} htmlFor="fname">Your Name *</label>
                  <input 
                    type="text" 
                    id="fname" 
                    className='w-100 p-2' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <div className="input-field d-flex flex-column mt-4">
                  <label style={{width:"10vw"}} htmlFor="email">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className='w-100 p-2'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="input-field d-flex flex-column mt-4">
                  <label style={{width:"10vw"}} htmlFor="mobNo">Mobile Number *</label>
                  <input 
                    type="Number" 
                    id="mobNo" 
                    className='w-100 p-2'
                    value={mobnumber} 
                    onChange={(e) => setMobnumber(e.target.value)} 
                  />
                </div>
                <div className="input-field d-flex flex-column mt-4">
                  <label style={{width:"13vw"}} htmlFor="message">Any Message (Optional)</label>
                  <textarea 
                    id="message" 
                     className='w-100 p-2'
                    rows="4" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                  ></textarea>
                </div>
                <div className="input-field d-flex flex-column mt-4">
                  <label className='w-100' htmlFor="resume">Upload resume here * (File Format: pdf / File Size: 5mb)</label>
                  <input 
                    type="file" 
                    id="resume" 
                    className='w-100 p-2'
                    onChange={(e) => setResume(e.target.files[0])} 
                    accept=".pdf"
                  />
                </div>
                <div className="input-field d-flex flex-column mt-4">
                  <label className='w-100' htmlFor="profile">Upload profile photo * (File Format: image / File Size: 5mb)</label>
                  <input 
                    type="file" 
                    id="profile" 
                     className='w-100 p-2'
                    onChange={(e) => setProfile(e.target.files[0])} 
                    accept="image/*"
                  />
                </div>
                <button type="submit" className='pt-3 pb-3 ps-5 pe-5 mt-4'>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
