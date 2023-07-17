import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navBar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import useState from '../assets/portfolio/usestate.jpg'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            project:  arrayDestruct 
        },
        {
            id: 2,
            project:  installNode 
        },
        {
            id: 3,
            project:  navBar 
        },
        {
            id: 4,
            project:  reactParallax 
        },
        {
            id: 5,
            project:  reactSmooth 
        },
        {
            id: 6,
            project:  reactWeather 
        },
        {
            id: 7,
            project:  useState 
        },
    ]


    return (
        <div name="portfolio" className='pt-16 w-full h-full text-white bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Estos son los proyectos que realiacé</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, project }) => (
                        <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
                            <img className='rounded-md duration-200 hover:scale-105' src={project} alt="" />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio