import React from 'react'
import {services} from "./Servicesdata"
import "./Service.css"

const Services = () => {
    console.log(services);
  return (
    <div className='services relative w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className='overlay-service absolute top-0 left-0 w-full h-[100vh] items-center flex flex-col'>
        <div className='service-title tracking-widest font-semibold text-3xl mt-16'>~ OUR SERVICES ~</div>
        <div className='desc flex items-center justify-center'>
            <h4 className='service-intro my-8 text-xl text-white font-bold w-[70%] flex items-center text-center'>Our team consists of technicians who have devout experience and
               knowledge that coincides with the latest technical innovations and IT Solutions,</h4>
        </div>
        <div className='descy absolute flex justify-around top-[14rem] h-[55%]'>
            {
                services.map((item) => (
                    <div className='service-card bg-white w-[18%] items-center justify-center text-center fex flex-col rounded-xl' key={item.id}>
                    <div className='w-[100%] h-[200px]'>
                        <img className='rounded-t-lg w-[100%] h-[100%]' src={item.image} alt="" />
                        </div>
                    <div className='service-title1 font-extrabold text-3xl mt-[15%]'>{item.title}</div>
                    {/*<div className='desc-to w-[90%] h-[30%] border-2'><h4>{item.description}</h4></div>*/}
                    </div>
                ))
            }
        </div>
        <div className='desc-cover absolute flex justify-around top-[14rem] h-[55%]'>
        {
         services.map((item) => (
                    <div className='service-card2  bg-orange-500 w-[18%] flex flex-col items-center justify-center text-center rounded-xl' key={item.id}>
                    <div className='subservice-title text-4xl font-extrabold'>{item.title}</div>
                    <div className='subdesc py-10'>{item.description}</div>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Services