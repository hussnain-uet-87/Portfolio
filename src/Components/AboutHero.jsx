import React from 'react'
import aboutImg from "../assets/aboutImg.jpg"
const AboutHero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row px-2 gap-8'>
    <img src={aboutImg} className='w-[300px] sm:w-[350px] lg:w-[400px] rounded-xl object-cover object-right' alt="" />    
    <div className='w-[300px] sm:w-[400px]'>
        <h2 className='font-semibold text-lg text-blue-500'>About Me</h2>
        <h2 className='text-2xl mt-2 mb-4 font-bold tracking-tight'>A dedicated Front-end Developer based in Lahore, Pakistan</h2>
        <p className='font-semibold'>With a strong foundation in HTML, CSS, JavaScript, React, Tailwind CSS and GSAP. I build responsive, modern websites that align with client goals. My focus is on enhancing brand value by delivering clean, user-friendly solutions.I work collaboratively in teams and ensure every project meets expectations, blending creativity with functionality.</p>
    </div>
    </div></>
  )
}

export default AboutHero