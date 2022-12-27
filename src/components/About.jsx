import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full bg-gradient-to-b from-gray-800 via-[#0a192f] to-[#0a192f] text-white py-16'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mi</p>
            </div>

            <p className='text-xl mt-20'>Hola me llamo de Pablo Castro, tengo 25 años y soy de Buenos Aires, Argentina.
            </p>
            <br />
            <p className='text-xl'>Soy un estudiante de programación con iniciativa y ganas de superarse. Cuento con la capacidad de trabajar en equipo y resolución de problemas. Busco mi primer trabajo IT para poder adquirir nuevas experiencias en lo profesional y en lo personal.
            </p>
            <br />
            <p className='text-xl'>He estudiado el curso de 'Programación web full stack' en Educacion IT gracias a una beca otorgada por la Fundación Pescar en conjunto con JPMorgan y Santander. En este curso aprendí a programar en JavaScript, HTML, CSS, React JS, Node JS, Express JS, MongoDB, GIT, Bootstrap, entre otras tecnologías.
            </p>
        </div>
    </div>
  )
}

export default About