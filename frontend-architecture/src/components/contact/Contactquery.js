import React, { useState } from 'react';
import "./contact.css"
import { Link } from 'react-router-dom';

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
      <div className="container  w-100">
        <div className="row  d-flex  justify-content-center p-4 mb-2">
            <div className="col-lg-5 col-sm-10 col-12  mt-2 p-5 border">
              <h2>CONTACT US</h2>
             <div className='d-flex align-items-center  '>   <i className="bi bi-geo-alt-fill d-flex p-3  " style={{fontSize:"2rem"}}> </i>  <div >  <h4 className='mt-4'>Address</h4>141, d-narayan vih0ar,sanga.ner jaipur</div>    
             </div>
             <div className=' d-flex align-items-center  '>  <i className="bi bi-telephone-inbound-fill d-flex p-3 " style={{fontSize:"2rem"}}></i> <div >  <h4 className='mt-4'>Phone</h4>+91 26345912569</div>    
             </div>
             <div className='d-flex align-items-center  '>   <i className="bi bi-envelope-arrow-up-fill d-flex p-3" style={{fontSize:"2rem"}}></i>  <div >  <h4 className='mt-4'>Email</h4>Sarvan@gmail.com</div>    
             </div>

             <div className='social-media mt-5 ms-3'>
                <Link to="tel:+918426809853">
                  <i className="bi bi-whatsapp "></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-instagram ms-2 text-danger"></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-youtube ms-2 text-danger"></i>
                </Link>
              </div>

             


              








            </div>
            <div className="col-lg-6 col-sm-10 mt-2 col-12  p-5 gap-4 border ">
                <form action="" onSubmit={handleContact}>
                <div className="input-field d-flex flex-column    ">
                    <label style={{width:"100px"}}  htmlFor="Your name" className='  '> Your Name</label>
                    <input onChange={(e) => setName(e.target.value)}
                 type="text" className='p-2 w-100'  />





                </div>
                <div className="input-field d-flex flex-column   mt-4 ">
                    <label  style={{width:"100px"}}   htmlFor=""> Your Email</label>
                    <input onChange={(e) => setEmail(e.target.value)}
                  type="email" className='p-2 w-100 '/>

                </div>
                <div className="input-field d-flex flex-column   mt-4">
                    <label  style={{width:"100px"}}    htmlFor="" className=''> Your Message</label>
                    <textarea name="" id="" type="text" className='p-2 w-100  '   onChange={(e) => setQuery(e.target.value)}
 rows="4" ></textarea>

                </div>

                <button style={{backgroundColor:""}} className='pt-3 pb-3 ps-5 pe-5 mt-4 '>SUBMIT</button>
                
            


                </form>



            </div>






        </div>






    </div>
      </section>
    </>
  );
};

export default Contactquery;