import React, {useState} from 'react'
import logo from "../assets/logoex.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import support from '../assets/customersupport.png';
import "./Contact.css";

const Contact = () => {
    const [showmenu, setShowmenu] = useState(false)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  const minimenu = () => {
    if(showmenu === false){
      setShowmenu(true)
    }else {
      setShowmenu(false)
    }
  }

  const submit = () => {

  }

  return (
    <div className='contact'>
         <div className='nav2 flex flex-col'>
        <div className='flex w-full items-center justify-between'>
      <div className='logo2 ml-4  w-[80px] h-[80px] rounded-full'>
        <img className='w-full h-full object-contain' src={logo} alt='' />
        </div>
        <div className='menuicon mr-10' onClick={() => minimenu()}>
          <AiOutlineMenu size={30} />
        </div>
        </div>
        {showmenu && <div className='nav-right2 items-center flex flex-col w-[100%] mr-2 bg-white  h-[200px]'>
        <ul className='flex flex-col text-sm font-bold mr-2 w-[100%] items-center justify-between z-50 bg-white'>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT US</li></Link>
            <Link to="/contact"><li>CONTACT EXAGENERATION! INTERNET</li></Link>
        </ul>
        </div>}
      </div>
    <div className='navigate flex justify-between w-full h-28 items-center'>
        <div className='logo ml-2 w-48 rounded-full h-48'>
          <img className='w-full h-full object-contain' src={logo} alt='' />
          </div>
        <div className='nav-right w-3/5 mr-2'>
        <ul className='flex text-sm font-bold mr-2 w-[95%] justify-between'>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/about"><li>ABOUT US</li></Link>
        <Link to="/contact"><li>CONTACT EXAGENERATION! INTERNET</li></Link>
        </ul>
        </div>
    </div>
    <div className='contact-details w-full h-[100vh]'>
        <h2 className='mt-16 ml-20 font-extrabold text-3xl mb-6'>Contact Us</h2>
        <div className='flex'>
        <form className='border-2 w-[40%]'>
            <div className='flex flex-col'>
          <label className='flex flex-col'>
              First Name:
           <input type="text" name="name" onChange={setFirstname} />
         </label>
         <label className='flex flex-col'>
           Last Name:
           <input type="text" name="name" onChange={setLastname} />
         </label>
         <label className='flex flex-col'>
           Email:
           <input type="text" name="name" onChange={setEmail} />
         </label>
         <label className='flex flex-col'>
           Message:
           <textarea type="text" name="name" rows="4" cols="50" onchange={setMessage} />
         </label>
            <button className='submit-btn'>submit</button>
            </div>
         </form>
         <div className='support-left ml-[30px] flex flex-col'>
         <img src={support} alt=''/>
         <h4>24 hr custommer solution</h4>
         </div>
         </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact