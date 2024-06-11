import React from 'react'
import menuItem2Image from '../architercter img/Interior 2.jpg';
import menuItem3Image from '../architercter img/Interior 3.jpg'
import menuItem4Image from '../architercter img/Interior 4.jpg'
import menuItem5Image from '../architercter img/Interior 5.jpg'
import menuItem6Image from '../architercter img/Interior 6.jpg'
import menuItem7Image from '../architercter img/Interior 8.jpg'
import menuItemAImage from '../architercter img/Interior 4.jpg'
import menuItemBImage from '../architercter img/Interior 5.jpg'
import menuItemCImage from '../architercter img/Interior 6.jpg'
import menuItemDImage from '../architercter img/Interior 8.jpg'

export default function Interior() {
  return (
   <>

<div className="background-image">
  <div className="inner-back-text">
    <h1>Construction Services <br />
      <span>Creative &amp; Professional</span></h1>
    <p>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    <div className="inner-back-btn">
    <button className='btn btn-warning'>Read More </button>
    </div>
  </div>
</div>

<div className="our-gallery">
  <h1>Made <span>my company</span> and our team </h1>
  <div className="main-gallery mt-5">
    <div className="inner-gallery">
      <img src={menuItem2Image} alt='' />
    </div>
    <div className="inner-gallery">
      <img src={menuItem3Image} alt='' />
    </div>
    <div className="inner-gallery">
      <img src={menuItem4Image} alt=''  />
    </div>
    <div className="inner-gallery">
      <img src={menuItem5Image} alt=''  />
    </div>
    <div className="inner-gallery">
      <img src={menuItem6Image} alt='' />
    </div>
    <div className="inner-gallery">
      <img src={menuItem7Image} alt=''  />
    </div>
  </div>
</div>
<div className="our-services">
  <h1>our <span>services</span></h1>
  <div className="main-service">
    <div className="inner-service">
      <img style={{height:"300px"}} src={menuItemAImage} alt=''  />
      <h2>Work better</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit voluptas doloribus hic, unde, facilis explicabo ducimus non accusamus pariatur corporis voluptate consectetur amet quibusdam ut dolore quaerat quae incidunt?</p>
      <button className='btn btn-warning'> Read More</button>
    </div>
    <div className="inner-service">
      <img style={{height:"300px"}} src={menuItemBImage}  alt='' />
      <h2>Work better</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit voluptas doloribus hic, unde, facilis explicabo ducimus non accusamus pariatur corporis voluptate consectetur amet quibusdam ut dolore quaerat quae incidunt?</p>
      <button className='btn btn-warning'> Read More</button>
    </div>
    <div className="inner-service mt-4">
      <img style={{height:"300px"}} src={menuItemCImage} alt='' />
      <h2>Work better</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit voluptas doloribus hic, unde, facilis explicabo ducimus non accusamus pariatur corporis voluptate consectetur amet quibusdam ut dolore quaerat quae incidunt?</p>
      <button className='btn btn-warning'> Read More</button>
    </div>
    <div className="inner-service mt-4">
      <img style={{height:"300px"}} src={menuItemDImage} alt='' />
      <h2>Work better</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit voluptas doloribus hic, unde, facilis explicabo ducimus non accusamus pariatur corporis voluptate consectetur amet quibusdam ut dolore quaerat quae incidunt?</p>
      <button className='btn btn-warning'> Read More</button>
    </div>
  </div>
</div>


   
   
   
   </>
  )
}
