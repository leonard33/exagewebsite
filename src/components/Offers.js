import React from 'react'
import "./Offers.css";

const Offers = () => {
  return (
    <div className='offers relative h-[82vh] w-full'>
        <div className='overlay-offer absolute top-16 left-0 w-full h-[64vh]'>
            <div className='cards flex items-center justify-around mt-24'>
                <div className='card ml-4 h-56 border-2 rounded-xl bg-green-700'><h4>Growing Across Kenya Every Day</h4></div>
                <div className='card ml-4 h-56 border-2 rounded-xl bg-blue-500'><h4>New Lower Install Price</h4></div>
                <div className='card ml-4 h-56 border-2 rounded-xl bg-purple-600'><h4>24 Hr Unrivaled Customer Support</h4></div>
                <div className='card ml-4 h-56 border-2 rounded-xl bg-orange-400'><h4>No Data Caps, No Slow Downs</h4></div>
                <div className='card ml-4 mr-4 h-56 border-2 rounded-xl bg-yellow-400'><h4>Home Internet From Only KSh 2000 p/m</h4></div>
            </div>
        </div>
    </div>
  )
}

export default Offers