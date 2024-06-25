import React from 'react'
import { useContext } from 'react'
import { Logincontext } from '../Logincontext/Adminlogincontext'

const Dashboard = () => {
  const{dataarchitecture,setarchitecture}=useContext(Logincontext)


  return (
    <>

    <div className="container mt-4">
    <div class="row">
  <div  class="col-sm-4 mb-3 mb-sm-0 ">
    <div style={{height:"170px"}} class="card">
      <div class="card-body">
        <h5 class="card-title text-success">Total projects</h5>
        <p class="card-text"> {dataarchitecture}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div style={{height:"170px"}} class="card">
      <div class="card-body">
        <h5 class="card-title">Total Queries</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div style={{height:"170px"}} class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>




    </div>



    





    
    
    </>
  )
}

export default Dashboard