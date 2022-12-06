import React from 'react'
import "./Package.css";
const Packages = () => {

  return (
    <div className='package relative flex w-full justify-around h-[100vh]'>
        <div className='home relative w-[50%] h-[80%] mt-24'>
            <div className='overlay1 absolute text-center items-center flex flex-col justify-center'>
                <div className='home-details'>
                <h4>Unlimited home internet<br/>
                 <span>Now Install on OFFER !</span>
                  </h4>
                  <h6>Then KSh 2000 p/m for...<br/>Unlimited data, no caps, no limits, no slowing you down. Up to 7Mbps!<br/>
                  Plus free access to Exage Wi-Fi network of over 10,000 hotspots</h6>
                 <button className='btn-connect rounded-lg'>Get Exagenetwork Home</button>
                  </div>
            </div>
            <div className='camp absolute w-60 h-60 -top-24 left-[13rem] rounded-full'>
            <span className='package-heading absolute top-16 -left-4 font-bold text-[2.5rem] -rotate-12 text-white tracking-wider'>Exagenetwork!</span>
            <h6 className='subdetail tracking-wide absolute right-10 top-28 -rotate-6 font-bold text-5xl text-green-300'>Home</h6>
            </div>
        </div>
        <div className='office relative w-[50%] h-[80%] mt-24'>
            
           <div className='absolute overlay2 text-center items-center flex flex-col justify-center'>
            <div className='office-details'>
                <h4>Free Exagenetwork internet every day on<br/>
                 <span>Coast largest Wi-Fi network</span>
                  </h4>
                  <h6>100MB for free every single day!<br/> Every 1GB just KSh 20 thereafter at over 10,000<br/> hotspots and growing daily</h6>
                 <button className='btn-connect rounded-lg'>Get Exagenetwork Hotspot</button>
            </div>
           </div>
           <div className='camp2 absolute w-60 h-60 -top-24 left-[13rem] flex flex-col items-center justify-center rounded-full'>
            <span className='package-heading tracking-wider absolute top-16 font-bold text-[2.3rem] -rotate-12 text-white'>Exagenetwork!</span>
            <h6 className='subdetail tracking-wide absolute right-10 top-28 -rotate-6 font-bold text-5xl text-yellow-300'>Hotspot</h6>
            </div>
        </div>
    </div>
  )
}

export default Packages