import React from 'react'
import { homepackages, officepackage } from './Packagedata';
import "./Subpackages.css";

const Subpackages = () => {
  return (
    <div className='subpackages flex flex-col -mt-10 items-center justify-center w-full h-[110vh]'>
      
        <div className='packagedata relative flex items-center w-[95%] justify-around bg-white h-[90%]'>
        {
            homepackages.map((items) => (
                <div className='flex flex-col'>
                    <div className='package-card mt-10 w-64 h-64 flex flex-col rounded-lg items-center' key={items.id}>
                    <div className='title text-2xl w-64 h-24 justify-center items-center text-center rounded-t-lg'>{items.title}</div>
                    <div className=' details-package w-[70%] text-center leading-6 mt-2 text-orange-500 text-lg'>{items.details}</div>
                    <div className='pricing mt-2 text-2xl text-yellow-500 font-semibold'>{items.price}</div>
                </div>
                <div className='offer-overlay pk flex flex-col justify-center rounded-lg items-center absolute top-[4.6rem] w-64 h-64 border-2 bg-orange-500'>
                    
                <div className='camp2 absolute w-44 h-44 -top-12 left-[2rem] flex flex-col items-center justify-center rounded-full'>
            <span className='package-heading tracking-wider absolute top-16 font-bold text-[1.5rem] -rotate-12 text-white'>Exagenetwork!</span>
            <h6 className='subdetail tracking-wide absolute right-10 top-28 -rotate-6 font-bold text-3xl text-yellow-300'>Office</h6>
            </div>

                    <div className='mt-28 text-teal-50 font-semibold'>{items.title}</div>
                    <div className='font-medium text-green-400'>{items.price}</div>
                    <button className='border-2 px-4 mt-4 rounded-lg'>apply now</button>
                    </div>
                </div>               
            ))
            }
        </div>
        <div className='packagedata relative flex items-center w-[95%] justify-around bg-white h-[90%]'>
            {
               officepackage.map((items) => (
                <div className='flex flex-col'>
                    <div className='package-card mt-12 w-64 h-64 flex flex-col rounded-t-lg border-2 items-center' key={items.id}>
                       <div className='title w-64 h-24 justify-center items-center text-center rounded-t-lg'>{items.title}</div>
                       <div className='details-package w-[70%] text-center leading-6 mt-2 text-orange-500 text-lg'>{items.details}</div>
                       <div className='pricing mt-2 text-2xl text-yellow-500 font-semibold'>{items.price}</div>
                   </div><div className='offer-overlay pk flex flex-col justify-center rounded-lg items-center absolute top-[5.1rem] w-64 h-64 border-2 bg-green-700'>

                           <div className='camp2 absolute w-44 h-44 -top-12 left-[2rem] flex flex-col items-center bg-green-800 justify-center rounded-full'>
                               <span className='package-heading tracking-wider absolute top-16 font-bold text-[1.5rem] -rotate-12 text-white'>Exagenetwork!</span>
                               <h6 className='subdetail tracking-wide absolute right-10 top-28 -rotate-6 font-bold text-3xl text-yellow-300'>Home</h6>
                           </div>

                           <div className='mt-28 text-teal-50 font-semibold'>{items.title}</div>
                           <div className='font-medium text-green-400'>{items.price}</div>
                           <button className='border-2 px-4 mt-4 rounded-lg'>apply now</button>
                       </div>
                </div>
            )) 
            }
        </div>
    </div>
  )
}

export default Subpackages