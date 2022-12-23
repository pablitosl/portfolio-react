import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/pablo-david-castro',
            style: 'rounded-tr-md bg-blue-600'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/pablitosl',
            style: 'bg-[#333333]'
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:pablocastrod7@gmail.com',
            style: 'bg-[#6fc2b0]'
        },
        {
            id: 4,
            child: (
                <>
                    Curriculum <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/curriculum.pdf',
            style: 'rounded-br-md bg-gray-600',
            download: true
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => {
                return(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 + " " + ${style}`}>
                        <a href={href} className='flex justify-between items-center w-full text-white'
                        download={download}
                        target='_blank'
                        rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                )
            })}

           
        </ul>
    </div>
  )
}

export default SocialLinks