import React from 'react'
import noteApp from '../assets/portfolio/arrayDestruct.jpg'
import { FormattedMessage } from 'react-intl'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            project: noteApp,
            urlRepo: 'https://github.com/ivanbonnot/mantenimiento-PCC'
        }
    ]


    return (
        <div name="portfolio" className='pt-16 w-full h-full text-white bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        <FormattedMessage
                            id="portfolio.title"
                            defaultMessage="Portfolio"
                        />
                    </p>
                    <p className='py-6'>
                        <FormattedMessage
                            id="portfolio.subtitle"
                            defaultMessage="This are the projects that i've been working on"
                        />
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-1 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, project, urlRepo }) => (
                        <div key={id} className='shadow-lg shadow-gray-600 rounded-lg'>


                            <img className='rounded-md duration-200 hover:scale-105' src={project} alt="" />

                            <div className='flex items-center justify-center'>
                                <button className='w-1/3  py-3 my-4 border-r-2 border-gray-500 duration-200 hover:scale-105'>
                                    <FormattedMessage
                                        id="portfolio.buttonDemo"
                                        defaultMessage="Demo"
                                    />
                                </button>
                                <button className='w-1/3  py-3 my-4  border-l-2 border-gray-500 duration-200 hover:scale-105'>
                                    <FormattedMessage
                                        id="portfolio.buttonCode"
                                        defaultMessage="Code"
                                    />
                                </button>
                                <a href={urlRepo} target="_blank" rel="noopener noreferrer"
                                    className='w-1/3 py-3 my-4 border-l-2 text-center border-gray-500 duration-200 hover:scale-105'>
                                    <FormattedMessage
                                        id="portfolio.buttonRepo"
                                        defaultMessage="Repository" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Portfolio