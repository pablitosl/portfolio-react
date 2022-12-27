import React from 'react'
import foto from '../assets/IMG_9719.JPG'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='py-32 w-full bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hola, mi nombre es</p>
                <h className='text-6xl sm:text-7xl font-bold text-white'>Pablo Castro</h>
                <h2 className='text-2xl sm:text-4xl font-bold text-gray-400 py-4'>Y soy un desarrollador Front End React</h2>
                <div>
                    <Link to='proyectos' smooth duration={500} className='group text-white w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Mis proyectos<span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                </div>
            </div>
            <div className='w-full py-8 md:w-3/4'>
                <img src={foto} alt="Mi foto de perfil" className='rounded-full mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home