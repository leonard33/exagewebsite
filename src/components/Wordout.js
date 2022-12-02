import React from 'react'
import "./Wordout.css"

const Wordout = () => {
  return (
    <div className='wordout relative w-full h-[90vh]'>
        <div className='overcover absolute top-0 items-center justify-center flex flex-col left-0 w-[100%] h-[100%]'>
            <h2>Now available in Taita/Taveta County</h2>
            <h4 className='connecting sm:text-lg text-5xl text-white'>Connecting you to the world</h4>
            <h6 className='intro w-[65%] text-center mt-20 mb-20 text-white text-xl'>Do you live in Kiserian? If so then we're delighted to let you know that poa!
                 internet home and street services are now LIVE in your area! Just follow the link below and become
                 on of the first to take advantage of our UNLIMITED broadband! All installed in 48 hours!</h6>
                 <button className='wordout-btn border-2 hover:bg-yellow-500 hover:text-orange-600 text-bold border-white py-4 px-6 rounded-lg text-white text-xl'>Signup for Exagenetwork Internet </button>
        </div>
    </div>
  )
}

export default Wordout