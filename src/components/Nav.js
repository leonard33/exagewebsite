import React from 'react'
import "./Nav.css"; 
import logo from "../assets/logoex.png";
import Slider from './Slider';

const Nav = () => {
  return (
    <div className='Nav'>
    <div className='navigate flex justify-between w-full h-28 items-center'>
        <div className='logo ml-2 w-48 rounded-full h-48'><img className='w-full h-full object-contain' src={logo} alt='' /></div>
        <div className='nav-right w-3/5 mr-2'>
        <ul className='flex text-sm font-bold mr-2 w-[95%] justify-between'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>OUR PRODUCTS</li>
            <li>OUR COVERAGE</li>
            <li>CONTACT EXAGENERATION! INTERNET</li>
        </ul>
        </div>
    </div>
    {/*<div className='bottom relative w-full h-[100%]'>
    <div className='overlay'></div>
  </div>*/}
    <div className='introduction absolute top-28 w-full h-[90%] border-2 left-0'>
    <Slider />
    </div>
   {/*
    <div className='introduction absolute top-48 left-28'>
        <h2>Welcome to the Unlimited Network!</h2>
        <h4>Our vision is to bring internet to <span className='font-extrabold text-4xl'>every home in Africa.</span></h4>
        <h3>Exagenaration! internet connects the underserved communities of Africa, improving lives through unlimited access to knowledge and opportunities.</h3>
        <button className='border-2 py-2 px-5 rounded-lg mt-5 hover:bg-orange-500 hover:text-white text-lg font-semibold'>Connect with us</button>
        </div>
        <div className='absolute top-44 right-28 w-96 h-96 p-2 rounded-full border-2 border-yellow-500 animate-pulse'></div>
        <div className='absolute top-36 right-20 w-[450px] h-[450px] rounded-full border-2 white animate-pulse'></div>
        <div className='absolute top-48 right-32 w-[350px] h-[350px] rounded-full border-2 border-green-500 animate-pulse'></div>
        <img className='absolute top-44 right-36 w-80 h-80 p-2' src='https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-vector-satellite-dish-antenna-png-image_6130437.png' alt=''/>
       */}
    </div>
  )
}

export default Nav