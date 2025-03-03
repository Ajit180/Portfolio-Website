import React from 'react'
import heroimage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
       transition-transform duration-300 hover:scale-105' src={heroimage} />
      <h1 className='text-4xl font-bold'>
        I'm {"  "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 '>Ajit Yadav </span>
        , Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'> I Specilize in building mordern Website and responsive web applications.</p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me </button>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
