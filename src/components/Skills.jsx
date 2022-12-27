import React from 'react'
import bootstrap from '../assets/skills/bootstrap.png'
import css from '../assets/skills/css-3.png'
import html from '../assets/skills/html-5.png'
import javascript from '../assets/skills/js.png'
import git from '../assets/skills/git.png'
import reactImg from '../assets/skills/react.png'
import nodejs from '../assets/skills/nodejs.png'
import mongodb from '../assets/skills/mongodb.png'

const Skills = () => {
    const tecnologias = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-violet-500'
        },
        {
            id: 5,
            src: reactImg,
            title: 'React JS',
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            src: git,
            title: 'GIT',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: nodejs,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: mongodb,
            title: 'Mongo DB',
            style: 'shadow-green-500'
        },
    ]

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 via-[#0a192f] to-[#0a192f] w-full py-12'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='py-6'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline leading-10'>Habilidades tecnicas</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tecnologias.map(({id,src,title,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg + ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                        </div>))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills