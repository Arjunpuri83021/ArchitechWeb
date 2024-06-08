import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Futter from './components/futterpage/Futter';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>



      <Route path='/' element={<Homepage/>}/>
    </Routes>
    <Futter/>
    
   
    </>
  )
}

export default App
