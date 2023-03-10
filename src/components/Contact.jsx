import React from 'react'

const Contact = () => {
  return (
    <div name='contacto' className='w-full  bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>Dejame tu mensaje si estas interesado !</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/0bfad42d-8cfc-4067-9ece-190ad430b032" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="email" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea name="message" rows="10" placeholder='Enter the message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Enviar
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact