import React from 'react'
import ahorcado from '../assets/projects/ahorcado.png'
import ecommerce from '../assets/projects/ecommerce.png'
import portfolio from '../assets/projects/Portfolio.png'
import encriptador from '../assets/projects/encriptador.png'
import todolist from '../assets/projects/todolist.png'
import otraoportunidad from '../assets/projects/otraoportunidad.png'
import rickymorty from '../assets/projects/rickymorty.png'
import portfolioreact from '../assets/projects/portfolioreact.png'
import appclima from '../assets/projects/appclima.png'


const Projects = () => {

    const proyectos = [
        {
            id: 1,
            src: appclima,
            title: 'App del Clima',
            skills: 'HTML, CSS, JS, React',
            linkdemo: 'https://react-appclima.netlify.app/',
            linkcode: 'https://github.com/pablitosl/app-clima',
        },
        {
            id: 2,
            src: rickymorty,
            title: 'API Rick & Morty',
            skills: 'HTML, CSS, Bootstrap, JS, React',
            linkdemo: 'https://otra-oportunidad-production.up.railway.app/',
            linkcode: 'https://github.com/pablitosl/app-rick-morty',
        },
        {
            id: 3,
            src: portfolioreact,
            title: 'Portfolio React',
            skills: 'HTML, CSS, Tailwind, JS, React',
            linkdemo: 'https://portfolio-react-pablo.netlify.app/',
            linkcode: 'https://github.com/pablitosl/portfolio-react',
        },
        {
            id: 4,
            src: ahorcado,
            title: 'Ahorcado',
            skills: 'HTML, CSS, JS',
            linkdemo: 'https://pablitosl.github.io/ahorcado-alura.github.io/',
            linkcode: 'https://github.com/pablitosl/ahorcado-alura.github.io',
        },
        {
            id: 5,
            src: todolist,
            title: 'Todo List',
            skills: 'HTML, CSS, JS',
            linkdemo: 'https://pablitosl.github.io/todolist/',
            linkcode: 'https://github.com/pablitosl/todolist',
        },
        {
            id: 6,
            src: otraoportunidad,
            title: 'Otra Oportunidad',
            skills: 'HTML, CSS, JS, NodeJS , MongoDB',
            linkdemo: 'https://otra-oportunidad-production.up.railway.app/',
            linkcode: 'https://github.com/pablitosl/otra-oportunidad',
        },
        {
            id: 7,
            src: portfolio,
            title: 'Portfolio',
            skills: 'HTML, CSS, Bootstrap',
            linkdemo: 'https://pablitosl.github.io/Portfolio/',
            linkcode: 'https://github.com/pablitosl/portfolio',
        },
        {
            id: 8,
            src: ecommerce,
            title: 'Ecommerce',
            skills: 'HTML, CSS, Bootstrap, JS',
            linkdemo: 'https://pablitosl.github.io/ecommerce/',
            linkcode: 'https://github.com/pablitosl/ecommerce',
        },
        {
            id: 9,
            src: encriptador,
            title: 'Encriptador',
            skills: 'HTML, CSS, JS',
            linkdemo: 'https://pablitosl.github.io/Encriptador-alura.github.io/',
            linkcode: 'https://github.com/pablitosl/Encriptador-alura.github.io',
        },
    ];

  return (
    <div name='proyectos' className='bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-gray-800 w-full text-white py-12'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='py-6 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Mis proyectos</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0'>
                {
                    proyectos.map(({id,src,title,skills,linkdemo,linkcode}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='text-center pt-2'>
                                <h2 className='font-bold text-xl'>{title}</h2>
                                <p>({skills})</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={linkdemo} target='_blank' rel='noreferrer'>Demo</a></button>
                                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={linkcode} target='_blank' rel='noreferrer'>Code</a></button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects