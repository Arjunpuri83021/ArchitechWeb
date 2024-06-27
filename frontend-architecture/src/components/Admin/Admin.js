import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Logincontext } from './Logincontext/Adminlogincontext';
import Admindashboard from './innerforms/adminnavbar/Admindashboard';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const {adminlogin,setadminlogin}=useContext(Logincontext)
    
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();

      const dataToSend = { email, password };
     

      try {
          const response = await fetch('http://localhost:5000/admin/adminlogin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(dataToSend)
          });
          const data = await response.json();
          console.log(data);

          if (data.status === 404) {
              localStorage.setItem('adminlogin', '1'); 
              setadminlogin(localStorage.getItem('adminlogin'));
              navigate('/admin/admindashboard');
          } else {
              // Handle login errors (e.g., show an error message)
              console.log(data.message);
          }
      } catch (error) {
          console.error("Error:", error);
      }
       
    };

    return (
       <>
       { !adminlogin ? (
      
        <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <form className="card-body p-5 text-center" onSubmit={handleLogin}>

                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input type="email"  id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div>


                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
       
       ) : null}
       
       
       
       </>
    );
};

export default Admin;
