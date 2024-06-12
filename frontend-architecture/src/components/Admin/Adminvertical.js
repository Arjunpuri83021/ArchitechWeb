import React from 'react'
import { Link } from 'react-router-dom'

const Adminvertical = () => {
  return (
    <>
     <div className="admin-navbar-vertical">
      <ul>
        <li><Link to={'/admin/addproject'}>Architecture</Link></li>
        <li> <Link to={'/admin/addinterior'}>Interior</Link></li>
        <li>Request</li>
      </ul>
    </div>
    
    
    </>
  )
}

export default Adminvertical