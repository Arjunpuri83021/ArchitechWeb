import React, {  useEffect } from 'react'
import { Link, } from 'react-router-dom'



export default function Futter() {
     
    useEffect(()=>{
    
    },[])
      

  return (
    <>
   
    
   <div id='futter' className="futter-content mt-5 bg-light">
   {/* <img  style={{height:"60px",marginLeft:"700px",width:"100px"}} src="./arclogo.jpg" alt="Logo" /> */}
  <div className="all-futter-content d-flex justify-content-between  text-dark">
    <div className="futter-content-text  ">
      <ul>
        <h4 >About_Us</h4>
        <li>Architecture is the art and technique of designing and building</li>
        <li> Technique of designing and building</li>
        <li> inspiration for your home, garden, and travel with AD's curated content</li>
      </ul>
    </div>
    {/* learn more  */}

    <ul style={{listStyle:"none"}} class="footer-list">

<li>
  <p  class="h4 footer-list-title text-dark">Learn More</p>
</li>

<li>
  <Link  href="#" class="footer-link text-dark">About Us</Link>
</li>

<li>
  <Link href="#" class="footer-link text-dark">Our Story</Link>
</li>



<li>
  <Link href="#" class="footer-link text-dark">Terms of Use</Link>
</li>

<li>
  <Link href="#" class="footer-link text-dark">Privacy Policy</Link>
</li>

</ul>

  


    {/* futter comment  */}
    <div className="futter-content-comment  ">
      
        
          <div className="mb-3">
            <label htmlFor="text" className="form-label"><h4>Connect Me</h4></label>
            <li style={{listStyle:"none"}}><i class="bi bi-geo-alt text-primary me-3"></i>Rajasthan 2,Janpath,"C" Scheme,Jaipur </li>
            <li  style={{listStyle:"none"}}><i class="bi bi-envelope-at text-primary me-3"></i>architecture@gmail.com</li>
            
            
          </div>
          
            
         
          
          


          <div className='social-media'>
            <Link to="tel:+918426809853"><i class="bi bi-whatsapp text-success"></i></Link>
            <Link><i class="bi bi-instagram ms-2 text-danger"></i></Link>
            <Link><i class="bi bi-youtube ms-2 text-danger"></i></Link>


          </div>
       
     
    </div>
  </div>
</div>

    
    </>
  )
}
