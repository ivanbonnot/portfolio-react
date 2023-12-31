import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import GraphQL from '../assets/graphql.png'
import JS from '../assets/javascript.png'
import NextJs from '../assets/nextjs.png'
import Node from '../assets/node.png'
import ReactIcon from '../assets/react.png'
import TailWind from '../assets/tailwind.png'
import { FormattedMessage } from 'react-intl'


const Experience = () => {

    const icons = [
        {
            id: 1,
            icon: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            icon: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            icon: GitHub,
            title: 'GitHub',
            style: 'shadow-white'
        },
        {
            id: 4,
            icon: GraphQL,
            title: 'GraphQL',
            style: 'shadow-violet-500'
        },
        {
            id: 5,
            icon: JS,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            icon: NextJs,
            title: 'NextJs',
            style: 'shadow-white'
        },
        {
            id: 7,
            icon: Node,
            title: 'NodeJs',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            icon: ReactIcon,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            icon: TailWind,
            title: 'TailWind',
            style: 'shadow-blue-500'
        },
    ]

    return (
        <div name='experience' className='pt-16 w-full h-full bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        <FormattedMessage
                            id="experience.title"
                            defaultMessage="Experience"
                        />
                    </p>
                    <p className='py-6'><FormattedMessage
                        id="experience.subtitle"
                        defaultMessage="Technologies i've been working with"
                    /></p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {icons.map(({ id, icon, title, style }) => (
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                            <img className='w-20 mx-auto' src={icon} alt="" />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience