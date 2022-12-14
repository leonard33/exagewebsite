import React from 'react'
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import watsapp from "../assets/watsap.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer relative h-[60vh] w-full bg-white flex flex-col items-center justify-center'>
      <div className='footer-details flex h-[35%] w-[90%] justify-around'>
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
            <div className='support-mail'>kenyasupport@Exagenetwork.co.ke</div>
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
              <a href='#'><img src={watsapp} alt=''/></a>
              <a href='https://www.facebook.com/profile.php?id=100088031812269&mibextid=ZbWKwL'><img src={fb} alt=''/></a>
              <a href='#'><img src={twitter} alt=''/></a>
              <a href='https://www.instagram.com/reel/Clk0_PuO8yX/?igshid=YmMyMTA2M2Y='><img src={insta} alt=''/></a>
          </div>
        </div>
        </div>
        <div className='copyright absolute bottom-2 text-white'><h6>Copyright © 2022 - All Rights Reserved</h6></div>
    </div>
  )
}

export default Footer