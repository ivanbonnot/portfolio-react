import React, { useState, useContext } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FormattedMessage } from 'react-intl';
import { langContext } from './../context/langContext'
import es from './../assets/lang/spain.png';
import en from './../assets/lang/united-kingdom.png';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const language = useContext(langContext);

    const links = [
        {
            id: 1,
            link: 'navbar.linksHome',
            defaultMsg: 'home'
        },
        {
            id: 2,
            link: 'navbar.linksAbout',
            defaultMsg: 'about'
        },
        {
            id: 3,
            link: 'navbar.linksPortfolio',
            defaultMsg: 'portfolio'
        },
        {
            id: 4,
            link: 'navbar.linksExperience',
            defaultMsg: 'experience'
        },
        {
            id: 5,
            link: 'navbar.linksContact',
            defaultMsg: 'contact'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>

            <div className='text-4xl font-signature ml-2'>
                <h1>
                    <FormattedMessage
                        id='navbar.h1'
                    />
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link, defaultMsg }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>
                            <FormattedMessage
                                id={link} defaultMessage={defaultMsg}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex">
                <button className="mx-auto w-1/4 hover:scale-105 duration-200 cursor-pointer" onClick={() => language.selectLanguage('es-AR')}><img src={es} alt="" /></button>
                <button className="mx-auto w-1/4 hover:scale-105 duration-200 cursor-pointer" onClick={() => language.selectLanguage('en-US')}><img src={en} alt="" /></button>
            </div>

            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link, defaultMsg }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                <FormattedMessage
                                    id={link} defaultMessage={defaultMsg}
                                />
                            </Link>
                        </li>
                    ))}
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-2xl'><FormattedMessage
                            id='navbar.lang'
                        /></p>
                        <div className='flex flex-row'>
                            <button className="m-2 w-1/3 hover:scale-105 duration-200 cursor-pointer" onClick={() => language.selectLanguage('es-AR')}><img src={es} alt="" /></button>
                            <button className="m-2 w-1/3 hover:scale-105 duration-200 cursor-pointer" onClick={() => language.selectLanguage('en-US')}><img src={en} alt="" /></button>
                        </div>
                    </div>
                </ul>
            )}


        </div>
    )
}

export default NavBar