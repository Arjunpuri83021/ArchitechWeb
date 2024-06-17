import React from 'react';
import "./Admin.css";
// import Adminhorizontal from './Adminhorizontal';
import Adminvertical from './Adminvertical';
import Adminhorizonatl from './Adminhorizonatl';
import Addprojects from './innerforms/Addprojects';
import Addinterior from './innerforms/Addinterior';
import { Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Admin = () => {
  
  return (
    <>
      <div className="admin-container">
        <div className="admin-content">
        <div className="admin-navbar-vertical">
      <ul>
      <li><Link to="/admin/addprojects">Architecture</Link></li>
      <li><Link to="/admin/addinterior">Interior</Link></li>
        <li>Request</li>
      </ul>
    </div>
          <div className="admin-main">
          <Addprojects/>
         


          
         
           
        
        
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
