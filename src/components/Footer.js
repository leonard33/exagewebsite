import React from 'react'
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import watsapp from "../assets/watsap.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer relative h-[60vh] w-full bg-purple-600 flex flex-col items-center justify-center'>
      <div className='flex h-[35%] w-[90%] justify-around'>
        <div className='menu flex flex-col'>
          <div className='title-menu'>Page Links</div>
            <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Our Coverage</li>
            <li>Contact Exagenetwork!</li>
            </ul>
            </div>
        <div className='support'>
            <div className='suport-title'>Contact Support</div>
            <div className='support-mail'>support@Exagenetwork.co.ke</div>
            <div className='contact'>+254 710 317 493</div>
          </div>
        <div className='sales'>
           <div className='sales-title'>Sales Contact</div>
            <div className='sales-mail'>sales@Exagenetwork.co.ke</div>
            <div className='contact'>+254 710 317 493</div>
           </div>
        <div className='connect'>
         <div className='connect-title'>Connect with us</div>
          <div className='connect-btn flex justify-between'>
            <img src={watsapp} alt=''/>
            <img src={fb} alt=''/>
            <img src={twitter} alt=''/>
            <img src={insta} alt=''/>
          </div>
        </div>
        </div>
        <div className='copyright absolute bottom-2 text-white'><h6>Copyright © 2022 - All Rights Reserved</h6></div>
    </div>
  )
}

export default Footer