import React from 'react'

const VideoTitle = ({overview,title}) => {
    
  return (
    <div className='pt-[20%] px-24 absolute text-white w-screen bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='p-5 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white p-4 px-16 text-lg font-bold text-black rounded-md hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 m-2 p-4 px-16 text-lg text-white bg-opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle