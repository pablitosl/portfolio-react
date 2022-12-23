import React from 'react'
import ahorcado from '../assets/projects/ahorcado.png'
import ecommerce from '../assets/projects/ecommerce.png'
import portfolio from '../assets/projects/Portfolio.png'
import encriptador from '../assets/projects/encriptador.png'
import todolist from '../assets/projects/todolist.png'
import otraoportunidad from '../assets/projects/otraoportunidad.png'


const Projects = () => {

    const proyectos = [
        {
            id: 1,
            src: ahorcado,
        },
        {
            id: 2,
            src: ecommerce,
        },
        {
            id: 3,
            src: portfolio,
        },
        {
            id: 4,
            src: encriptador,
        },
        {
            id: 5,
            src: todolist,
        },
        {
            id: 6,
            src: otraoportunidad,
        },
    ];

  return (
    <div name='proyectos' className='bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='py-6 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Mis proyectos</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0'>
                {
                    proyectos.map(({id,src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects