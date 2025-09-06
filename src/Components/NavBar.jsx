import React from 'react'
const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-16 py-4'>
        <h2 className='font-bold text-xl tracking-wide'>Hafiz Husnain Arif</h2>
        <div className='flex items-center content-center gap-4 font-semibold'>
            <a href="#" className=' hover:underline'>Home</a>
            <a href="#"  className=' hover:underline'>About</a>
            <a href="#"  className=' hover:underline'>Projects</a>
            <a href="#"  className=' hover:underline'>Contact</a>
        </div>
    </nav>
  )
}

export default NavBar