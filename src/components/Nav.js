import React, { useState } from 'react'
import "./Nav.css"; 
import logo from "../assets/logoex.png";
import Slider from './Slider';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showmenu, setShowmenu] = useState(false)

  const minimenu = () => {
    if(showmenu === false){
      setShowmenu(true)
    }else {
      setShowmenu(false)
    }
  }

  return (
    <div className='Nav'>
      <div className='nav2 flex flex-col'>
        <div className='flex w-full items-center justify-between'>
        <Link to="/">
      <div className='logo2 ml-4  w-[80px] h-[80px] rounded-full'> 
        <img className='w-full h-full object-contain' src={logo} alt='' /> 
        </div>
        </Link>
        <div className='menuicon mr-10' onClick={() => minimenu()}>
          <AiOutlineMenu size={30} />
        </div>
        </div>
        {showmenu && <div className='nav-right2 items-center flex flex-col w-[100%] mr-2 bg-white  h-[200px]'>
        <ul className='flex flex-col text-sm font-bold mr-2 w-[100%] items-center justify-between z-50 bg-white'>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT US</li></Link>
            <Link to="/contact"><li>CONTACT EXAGENETWORK! INTERNET</li></Link>
        </ul>
        </div>}
      </div>
    <div className='navigate flex justify-between w-full h-28 items-center'>
    <Link to="/">
        <div className='logo ml-2 w-48 rounded-full h-48'>
          <img className='w-full h-full object-contain' src={logo} alt='' />
          </div>
          </Link>
        <div className='nav-right w-[600px] mr-2'>
        <ul className='flex text-sm font-bold w-[95%] justify-between'>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/about"><li>ABOUT US</li></Link>
        <Link to="/contact"><li>CONTACT EXAGENETWORK! INTERNET</li></Link>
        </ul>
        </div>
    </div>
    {/*<div className='bottom relative w-full h-[100%]'>
    <div className='overlay'></div>
  </div>*/}
    <div className='introduction absolute top-28 w-full h-[90%] left-0'>
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