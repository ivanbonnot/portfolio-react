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
            default: 'home'
        },
        {
            id: 2,
            link: 'navbar.linksAbout',
            default: 'about'
        },
        {
            id: 3,
            link: 'navbar.linksPortfolio',
            default: 'portfolio'
        },
        {
            id: 4,
            link: 'navbar.linksExperience',
            default: 'experience'
        },
        {
            id: 5,
            link: 'navbar.linksContact',
            default: 'contact'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>

            <div className='text-4xl font-signature ml-2'><h1>Iván Bonnot Developer</h1></div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>
                            <FormattedMessage
                                id={link}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="">
                <button onClick={() => language.selectLanguage('es-AR')}><img src={es} alt="" /></button>
                <button onClick={() => language.selectLanguage('en-US')}><img src={en} alt="" /></button>
            </div>

            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}


        </div>
    )
}

export default NavBar