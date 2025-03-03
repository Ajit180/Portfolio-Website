import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Ajit</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#About" className='hover:text-gray-400'>About</a>
                <a href="#Project" className='hover:text-gray-400'>Project</a>
                <a href="#Experience" className='hover:text-gray-400'>Works Expreience</a>
                <a href="#Contacts" className='hover:text-gray-400'>Contacts</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        
    </div>
    </nav>
  )
}

export default Navbar
