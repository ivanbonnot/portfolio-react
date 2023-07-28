import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

const Contact = () => {

  const intl = useIntl();

  const inputName = intl.formatMessage({ id: 'contact.inputName' });
  const inputEmail = intl.formatMessage({ id: 'contact.inputEmail' });
  const inputMsg = intl.formatMessage({ id: 'contact.inputMsg' });

  return (
    <div name='contact' className='pt-16 w-full bg-gradient-to-b from-black to-gray-700 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            <FormattedMessage
              id="contact.title"
              defaultMessage="Contact form"
            />
          </p>
          <p className='py-4'>
            <FormattedMessage
              id="contact.subtitle"
              defaultMessage="Get in touch with me!"
            />
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form className='flex flex-col w-full md:w1/2' action="https://getform.io/f/5787d823-9150-4cbd-95e3-39241c628f96" method="post">
            <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name="name" placeholder={inputName} id="" />
            <input className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name="email" placeholder={inputEmail} id="" />
            <textarea className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name="message" id="" cols="20" rows="6" placeholder={inputMsg}></textarea>
            <button className='text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}



export default Contact

