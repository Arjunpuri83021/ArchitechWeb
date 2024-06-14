import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Futter from './components/futterpage/Futter';
import About from './components/about/About';
import Interior from './components/interior/Interior';
import Architecture from './components/Architecture/Architecture';
import Projectparams from './components/projectparams/Projectparams';
import Admin from './components/Admin/Admin';
import { useLocation } from 'react-router-dom';
import Privateroutesadmin from './components/Privateroutesadmin';
import Addprojects from './components/Admin/innerforms/Addprojects';



const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  ;
  return (
    <>

    {!isAdminRoute && <Navbar />}
    <Routes>



      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/interior' element={<Interior/>}></Route>
      <Route path='/Architecture' element={<Architecture/>}></Route>
      <Route path='/params/:id/' element={<Projectparams/>}/>
      <Route path='/admin/addprojects' element={<Addprojects/>}></Route>
      <Route
          path="/admin/*"
          element={
            <Privateroutesadmin>
              <Admin />
            
            </Privateroutesadmin>
          }
        />
      


    </Routes>

    


    {!isAdminRoute && <Futter />}
    
    


    
   
    </>
  )
}

export default App
