import React from 'react';
import "./Admin.css";
// import Adminhorizontal from './Adminhorizontal';
import Adminvertical from './Adminvertical';
import Adminhorizonatl from './Adminhorizonatl';
import Addprojects from './innerforms/Addprojects';
import Addinterior from './innerforms/Addinterior';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';

const Admin = () => {
  
  return (
    <>
      <div className="admin-container">
        <Adminhorizonatl/>
        <div className="admin-content">
          <Adminvertical />
          <div className="admin-main">
        
          <Addprojects/>
          <Routes>
        


              <Route path="/admin/addinterior" element={<Addinterior/>} />
              
              
    
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
