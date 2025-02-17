import React from 'react'
import HoverEffect from '../AnimationPages/HoverEffect'

const Project = () => {
  return (
    <>
    <div className='font-poppins  space-y-5 text-white bg-black max-h-fit p-5 w-full' id="project">
      <div className=''>
      <div className=' grid items-center text-center  justify-center space-y-8 pt-2'>
        <p className='text-5xl font-semibold max-w-full text-center text-blue-600'>PROJECT</p>
        <p className='max-w-2xl text-lg lg:text-xl font-light font-sans opacity-80'>Here, you will find a selection of personal and client projects I have created, each accompanied by its own case study</p>
        </div>
      </div>

    
    <div className="w-full ">
    <HoverEffect />
  </div>
  </div>
  </>
  )
}

export default Project;


