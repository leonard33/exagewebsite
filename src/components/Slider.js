import React from 'react'
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation, EffectFade } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
//import Typewriter from 'typewriter-effect';
//import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Slider = () => {

    /*const [text] = useTypewriter({
        words: ['Welcome to the Unlimited Network!'],
        loop: 1,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

      const [text2] = useTypewriter({
        words: ['Its where dreams come true to you!'],
        loop: 1,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })*/

    SwiperCore.use([Autoplay]);
  return (
    <div className='w-full h-[90vh]'>
        <Swiper
    /*cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}*/
    modules={[Pagination,Autoplay, EffectFade]}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    pagination={{ clickable: true }}
    autoplay = {{ delay: 10000}}
    className= "myimages"
    effect={"fade"}
    speed={800}
    loop
  >
    <SwiperSlide className='' >
    <div className='swipe-me'>
    <div className='overlay'></div>
    <img src={require("../assets/company/menatwork.jpeg")}  alt='' classNmae='object-contain'/>
    <div className='introduction absolute top-20 left-28'>
        <h2 className=''>Welcome to the Unlimited Network!</h2>
        <h4>Our vision is to bring internet to <span className='font-extrabold text-4xl'>every home in Africa.</span></h4>
        <h3>Exagenaration! internet connects the underserved communities of Africa, improving lives through unlimited access to knowledge and opportunities.</h3>
        <button className='border-2 text-white py-2 px-5 rounded-lg mt-5 hover:bg-orange-500 hover:text-white text-lg font-semibold'>GET IN TOUCH {'>'}{'>'}</button>
        </div>
        <div className='absolute right-28 top-20'></div>
        
    </div>
    </SwiperSlide>
    <SwiperSlide >
    <div className='swipe-me'>
    <div className='overlay'></div>
     <img src={require("../assets/company/crane.jpeg")}  alt='' classNmae='object-contain'/>
     <div className='introduction absolute top-20 left-28'>
       <h2>Access Control & CCTV - Solutions!</h2>
        <h4>We provide you solutions on <span className='font-extrabold text-4xl'>access control and CCTV.</span></h4>
        <h3>Exagenaration team! offers you secrity solutions on control systems and surveillance, improving security  through 24hr monitoring your .</h3>
        <button className='border-2 py-2 px-5 rounded-lg mt-5 hover:bg-orange-500 hover:text-white text-lg font-semibold'>GET IN TOUCH {'>'}{'>'}</button>
        </div>
        {/*<div className='absolute top-44 right-28 w-96 h-96 p-2 rounded-full border-2 border-yellow-500 animate-pulse'></div>
        <div className='absolute top-36 right-20 w-[450px] h-[450px] rounded-full border-2 white animate-pulse'></div>
<div className='absolute top-48 right-32 w-[350px] h-[350px] rounded-full border-2 border-green-500 animate-pulse'></div>*/}
        
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swipe-me'>
    <div className='overlay'></div>
     <img src={require("../assets/company/dish.jpeg")}  alt='' classNmae='object-contain'/>
         <div className='introduction absolute top-20 left-28'>
        <h2>
          Data Networking & Structured Cabling!
        </h2>
        <h4>We offer you a network well structured to sooth <span className='font-extrabold text-4xl'>your company's needs.</span></h4>
        <h3>We have a wide experience in installation of voice and data networking in many locations across Kenya.</h3>
        <button className='border-2 py-2 px-5 rounded-lg mt-5 hover:bg-orange-500 hover:text-white text-lg font-semibold'>GET IN TOUCH {'>'}{'>'}</button>
        </div>
        {/*<div className='absolute top-44 right-28 w-96 h-96 p-2 rounded-full border-2 border-yellow-500 animate-pulse'></div>
        <div className='absolute top-36 right-20 w-[450px] h-[450px] rounded-full border-2 white animate-pulse'></div>
<div className='absolute top-48 right-32 w-[350px] h-[350px] rounded-full border-2 border-green-500 animate-pulse'></div>*/}
        
    </div>
    </SwiperSlide>
  </Swiper>
    </div>
  )
}

export default Slider