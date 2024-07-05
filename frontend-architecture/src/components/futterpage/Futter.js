import React, { useEffect } from 'react'
import { Link, } from 'react-router-dom'
import { useContext } from 'react'
import { Logincontext } from '../Admin/Logincontext/Adminlogincontext'
import "./futter.css"



export default function Futter() {
  const{adminlogin,setadminlogin}=useContext(Logincontext)


  return (
    <>


<div id='futter' className="futter-content  bg-light">
          <div className="futter-content-icon pt-4">
            <Link className="navbar-brand fs-1 text-danger" to="#">
            <div className="heading">
            <img  style={{width:"300px",height:"90px"}} src="./logo2.png" alt="Logo" />
          </div>
            </Link>
          </div>
          <div className="all-futter-content d-flex justify-content-between text-dark">
            <div className="futter-content-text">
              <ul>
                <h4>About Us</h4>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Successful fashion designer and entrepreneur Sarah Donofrio credits Our clothes.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
              </ul>
            </div>

            {/* Learn More */}
            <ul style={{ listStyle: "none" }} className="footer-list">
              <li>
                <p className="h4 footer-list-title text-dark">Learn More</p>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">About Us</Link>
              </li>
             
              <li>
                <Link to="#" className="footer-link text-dark">Terms of Use</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">About Us</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">Our Story</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">Terms of Use</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-dark">Privacy Policy</Link>
              </li>
            </ul>

            {/* Footer Comment */}
            <div className="futter-content-comment">
              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  <h4>Connect Me</h4>
                </label>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-geo-alt text-primary me-3"></i>
                  Rajasthan 125, Jagatpura, Jaipur
                </li>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-envelope-at text-primary me-3"></i>
                  shanjaypuri@gmail.com
                </li>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-envelope-at text-primary me-3"></i>
                  Architecturesanjay@gmail.com
                </li>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-envelope-at text-primary me-3"></i>
                  sanjay@architecture.gmail.com
                </li>
              </div>

              <div className='social-media'>
                <Link to="tel:+918426809853">
                  <i className="bi bi-whatsapp text-success"></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-instagram ms-2 text-danger"></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-youtube ms-2 text-danger"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>


    </>
  )
}
