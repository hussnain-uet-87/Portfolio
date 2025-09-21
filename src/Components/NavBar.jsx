import React, { useState } from 'react'

import { RiCloseLine,RiMenu3Line ,RiSearch2Line} from 'react-icons/ri';
const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full fixed border-b-2 border-b-neutral-300 md:shadow-lg bg-white">
      <div className="max-w-7xl px-[5vw] sm:px-15 py-4 mx-auto flex items-center justify-between">
        {/* desktop screenview */}
        <a href="#" className="text-xl font-bold tracking-wide">Hafiz Husnain Arif</a>
        <div className="hidden sm:flex text-lg font-semibold gap-4 items-center content-center">
          <a href="#home" className='hover:underline' >Home</a>
          <a href="#about" className='hover:underline' >About</a>
          <a href="#projects" className='hover:underline' >Projects</a>
          <a href="#contact" className='hover:underline' >Contact</a>
        </div>
        {/* mobile hamburger */}
        <div className="sm:hidden">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        {/* mobile menu */}
        {isOpen && (
          <div className="absolute sm:hidden top-15 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md z-50">
            <a href="#home" className='hover:underline' >Home</a>
          <a href="#about" className='hover:underline' >About</a>
          <a href="#projects" className='hover:underline' >Projects</a>
          <a href="#contact" className='hover:underline' >Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar