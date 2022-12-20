import React from 'react'
import "./Videodemo.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import watsapp from "../assets/watsap.png";

const Videodemo = () => {
  return (
    <div className='videodemo flex items-center justify-center w-full h-[100vh] bg-white'>
        <div className='videopart w-[95%] flex justify-between'>
            <div className='video w-[60%] h-[70vh] rounded-lg'>
            <iframe className='video rounded-lg' width="100%" height="100%" src="https://www.youtube.com/embed/9AmEeTmnuIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='video-desc w-[40%] h-[70vh] ml-3 items-center flex flex-col'>
                <h2 className='mt-10 text-center text-3xl font-bold'>INTERNET <span className='text-red-500'>CONNECTING<br/> EVERY</span> <span className='text-yellow-500'>HOME AND </span><span className='text-green-500'>OFFICE IN</span> <br/><span className='text-purple-500'>AFRICA</span></h2>
                <h5 className='mt-12 w-[80%] text-center text-lg font-semibold'>We connect the unconnected, improving their lives 
                    through unlimited access to knowledge & opportunities.</h5>
                    <h6 className='mt-14 mb-4 text-lg font-semibold text-purple-500'>Let's connect !</h6>
                    <div className='social flex w-20 borde-2 items-center justify-around'>
                       <a href='#'><img src={watsapp} alt=''/></a>
                       <a href='https://www.facebook.com/profile.php?id=100088031812269&mibextid=ZbWKwL'><img src={fb} alt=''/></a>
                        <a href='#'><img src={twitter} alt=''/></a>
                        <a href='https://www.instagram.com/reel/Clk0_PuO8yX/?igshid=YmMyMTA2M2Y='><img src={insta} alt=''/></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Videodemo