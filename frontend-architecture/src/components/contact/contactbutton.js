import React from 'react'
import { Link } from 'react-router-dom'


const Contactbutton = () => {
  return (
  <>
<button type="button" class="btn btn-secondary btn-sm"><Link to={"/contactcategory/contactquery"}>Contact us</Link></button> 
<button type="button" class="btn btn-secondary btn-sm"><Link to={"/contactcategory/contactcarrier"}>Carrier</Link></button>


</>
  )
}

export default Contactbutton