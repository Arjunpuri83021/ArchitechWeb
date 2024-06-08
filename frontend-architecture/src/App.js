import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>



      <Route path='/' element={<Homepage/>}/>
    </Routes>
    
   
    </>
  )
}

export default App
