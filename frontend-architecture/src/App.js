import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Futter from './components/futterpage/Futter';
import About from './components/about/About';
import Interior from './components/interior/Interior';
import Architecture from './components/Architecture/Architecture';
import Projectparams from './components/projectparams/Projectparams';
import Admin from './components/Admin/Admin';
import { useLocation } from 'react-router-dom';
import Contactquery from './components/Admin/contactpage/Contactquery';
// import Privateroutesadmin from './components/Privateroutesadmin';
import Addprojects from './components/Admin/innerforms/Addprojects';
// import Admindashboard from './components/Admin/innerforms/Admindashboard';
import Admindashboard from './components/Admin/innerforms/adminnavbar/Admindashboard';
import { Logincontext } from './components/Admin/Logincontext/Adminlogincontext';
import { useState } from 'react';
import Contact from './components/contact/Contact';
import Interiorparams from './components/projectparams/Interiorparams';


const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [adminlogin,setadminlogin]=useState(localStorage.getItem('adminlogin'))
  const [dataarchitecture,setarchitecture]=useState(localStorage.getItem('architectureprojectslength'))

  return (
    <>
     <Logincontext.Provider value={{ adminlogin, setadminlogin,dataarchitecture,setarchitecture }}>
        {!isAdminRoute && <Navbar />}
        {adminlogin && isAdminRoute && <Admindashboard />}
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/interior' element={<Interior />} />
          <Route path='/Architecture' element={<Architecture />} />
          <Route path='/params/:id/' element={<Projectparams />} />
          <Route path='/paramsinterior/:id/' element={<Interiorparams />} />


          
          <Route path='/contactcategory/*' element={<Contact/>} />

          

          
          <Route
            path="/admin/*"
            element={
              <Admin/>
              
            }
          />
        </Routes>
        
        {!isAdminRoute && <Futter />}
      </Logincontext.Provider>
      
    </>
  );
}

export default App;
