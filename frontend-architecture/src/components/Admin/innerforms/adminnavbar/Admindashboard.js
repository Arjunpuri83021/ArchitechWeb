import React, { useContext } from 'react'
import { Link, Routes ,Route} from 'react-router-dom'
import "./admindashboard.css"
import Addprojects from '../Addprojects'
import { Logincontext } from '../../Logincontext/Adminlogincontext'
import Addinterior from '../Addinterior'
import Dashboard from '../Dashboard'
import { useNavigate } from 'react-router-dom'
import Contactquery from '../../contactpage/Contactquery'
import { ToastContainer} from 'react-toastify';
import GetDataofRegsiteruser from '../GetDataofRegsiteruser'
import Addsketches from './Addsketches'




const Admindashboard = () => { 
    const navigate=useNavigate()
    const {adminlogin,setadminlogin}=useContext(Logincontext)
    function handlelogout(e){
        e.preventDefault()
        localStorage.removeItem('adminlogin')
        setadminlogin(null)
        navigate('/admin')




    }

  return (
   <>
   {adminlogin ?
   <div className="maindashboard">
   <div className="nav-top p-2">
                        <button className='btn-fixed-right'> <Link style={{textDecoration:"none",color:"black"}} to={"/admin/registeruser"}>Form Fill For Carrie</Link></button>
                    </div>
   


   <div className="admin-navbar vh-100  text-black position-fixed">
   

            <div className="navbar-header text-center py-3">
                <h3>Admin Panel</h3>
                
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-black" to="/admin/Addprojects">Architecture</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-black" to="/admin/Addinterior">Interior</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-black" to="/admin/contactquery">Query</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-black" to="/admin/Sketches">Sketches</Link>
                </li>
                <div className="button m-3"><button onClick={handlelogout} className='btn btn-success'>logout</button></div>
                
            </ul>
        </div>


        <div style={{backgroundColor:"#EAEBEF"}} className="routes">
           
            <Routes>
                <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/Addprojects' element={<Addprojects/>}/>
            <Route path='/admin/Addinterior' element={<Addinterior/>}/>
            <Route path='/admin/contactquery' element={<Contactquery/>}/>
            <Route path='/admin/registeruser' element={<GetDataofRegsiteruser/>}/>
            <Route path='/admin/Sketches' element={<Addsketches/>}/>






            </Routes>





        </div>
        <ToastContainer />
        </div>


         :null}
   </>
  )
}

export default Admindashboard