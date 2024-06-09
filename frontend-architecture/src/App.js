import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Futter from './components/futterpage/Futter';
import About from './components/about/About';
import Interior from './components/interior/Interior';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>



      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/interior' element={<Interior/>}></Route>
    </Routes>
    <Futter/>
    
   
    </>
  )
}

export default App
