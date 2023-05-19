import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'proyectos',
        },
        {
            id: 4,
            link: 'skills',
        },
        {
            id: 5,
            link: 'contacto',
        },
    ];

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div >
                <h1 className='text-5xl font-bold font-signature cursor-pointer'><Link to='home'>Pablo Castro</Link></h1>
            </div>

            {/* MENU */}
            <ul className='hidden md:flex'>
                {links.map(({id, link}) => {
                    return(<li key={id} className='px-4 cursor-pointer capitalize text-xl font-medium hover:text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>)
                })}
            </ul>
            

            {/* MENU HAMBURGUESA */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a192f] md:hidden'>
                {links.map(({id, link}) => {
                        return(<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>)
                    })}
                </ul>
            )}
            
            
        </div>
    )
}

export default Navbar;