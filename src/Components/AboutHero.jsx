import React from 'react'
import aboutImg from "../assets/aboutImg.jpg"
const AboutHero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row px-2 gap-8'>
    <img src={aboutImg} className='w-[300px] sm:w-[350px] lg:w-[400px] rounded-xl object-cover object-right' alt="" />    
    <div className='w-[300px] sm:w-[400px]'>
        <h2 className='font-semibold text-lg text-blue-500'>About Me</h2>
        <h2 className='text-2xl mt-2 mb-4 font-bold tracking-tight'>Building Websites That Build Businesses</h2>
        <p className='font-semibold'>I help brands build a powerful online presence through websites that attract, engage, and convert. My focus is on understanding your business goals and turning them into digital experiences that strengthen credibility and customer trust. Every project I deliver blends strategy, design, and usability — ensuring your website not only looks professional but works effectively to grow your business.</p>
    </div>
    </div></>
  )
}

export default AboutHero