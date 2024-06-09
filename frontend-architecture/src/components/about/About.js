import React from 'react'
import menuItem1Image from '../architercter img/img 1.png';
import menuItem2Image from '../architercter img/love1.png';
import menuItem3Image from '../architercter img/love2.png'
import menuItem4Image from '../architercter img/love3.png'
import menuItem5Image from '../architercter img/love4.png'
import menuItem6Image from '../architercter img/service (1).png'
import menuItem7Image from '../architercter img/service (2).png'


export default function About() {
    return (
        <>
            <div className="welcome">
                <div className="main-welcome">
                    
                    <div className="inner-welcome">

                        <img  style={{height:"500px"}} src={menuItem1Image} alt="Image" className="rounded-md " />

                    </div>
                    <div className="inner-welcome">
                        <div className="welcome-text">
                            <h1>welcome to our company</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati assumenda, expedita perspiciatis ab commodi atque libero, iusto tempora ratione eaque a eligendi ad pariatur laudantium fugiat, amet officiis! Et, repudiandae.</p>
                           <button className='btn btn-warning'>Read More</button>
                        </div>
                    </div> 
                </div>
            </div>

    <div className="our-gallery">
  <h1>Made <span>my company</span> and our team </h1>
  <div className="main-gallery mt-5">
    <div className="inner-gallery">
      <img src={menuItem2Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem3Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem4Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem5Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem6Image} alt />
    </div>
    <div className="inner-gallery">
      <img src={menuItem7Image} alt />
    </div>
  </div>
</div>








        </>
    )
}
