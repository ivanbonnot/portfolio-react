import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-16 w-full bg-gradient-to-b from-black to-gray-700 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contactame</p>
          <p className='py-4'>Ponete en contacto conmigo!</p>
        </div>

        <div className='flex justify-center items-center'>
          <form className='flex flex-col w-full md:w1/2' action="https://getform.io/f/5787d823-9150-4cbd-95e3-39241c628f96" method="post">
            <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name="name" placeholder='Tu nombre' id="" />
            <input className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name="email" placeholder='Tu email' id="" />
            <textarea className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name="message" id="" cols="20" rows="6" placeholder='Tu mensaje'></textarea>
            <button className='text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact