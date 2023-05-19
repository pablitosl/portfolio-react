import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full bg-gradient-to-b from-gray-800 via-[#0a192f] to-[#0a192f] text-white py-20'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mi</p>
            </div>

            <p className='text-xl mt-20 leading-8 tracking-wide'>Hola me llamo de Pablo Castro, tengo 25 años y soy de Buenos Aires, Argentina.
            </p>
            <br />
            <p className='text-xl leading-8 tracking-wide'>Soy un <strong className='text-blue-400'>estudiante de la 'Tecnicatura en Programación' en la Universidad Nacional de Hurlingham</strong> con iniciativa y ganas de superarse. Cuento con la capacidad de trabajar en equipo y resolución de problemas. Busco mi primer trabajo IT para poder adquirir nuevas experiencias en lo profesional y en lo personal.
            </p>
            <br />
            <p className='text-xl leading-8 tracking-wide'>Actualmente me encuentro estudiando el programa de <strong className='text-blue-400'>Codo a codo 4.0 Programación full stack Python/Vue.js</strong></p>
            <p className='text-xl leading-8 tracking-wide'>He estudiado el curso de <strong className='text-blue-400'>'Programación web full stack MERN' en Educacion IT</strong> gracias a una beca otorgada por la Fundación Pescar en conjunto con JPMorgan y Santander. En este curso aprendí a programar en JavaScript, HTML, CSS, React JS, Node JS, Express JS, MongoDB, GIT, Bootstrap, entre otras tecnologías.
            </p>
            <p className='text-xl leading-8 tracking-wide'>Tambien hice el <strong className='text-blue-400'>programa ONE - Oracle Next Educatión de Oracle y Alura</strong>, en donde aprendí los fundamentos de la programación, Front End y Java.
            </p>
        </div>
    </div>
  )
}

export default About