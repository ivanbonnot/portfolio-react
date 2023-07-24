import React from 'react'
import { FormattedMessage } from 'react-intl'

const About = () => {
    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        <FormattedMessage
                            id="about.title"
                            defaultMessage="About"
                        />
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quae, accusamus saepe voluptatum delectus adipisci dignissimos rem deserunt, reprehenderit facere porro similique nobis mollitia inventore ratione, cumque dolor non sequi impedit! Cupiditate, tenetur necessitatibus. Doloremque, iure laboriosam consequatur maxime est aliquid reiciendis quae ad? Vitae doloribus incidunt optio nisi non.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo labore incidunt ad hic molestiae, totam sapiente consequatur soluta mollitia, dolore culpa pariatur atque impedit, porro rerum ab accusamus doloribus perferendis vero cupiditate! Fugiat necessitatibus voluptate sunt quo, voluptatibus tenetur soluta aliquid explicabo blanditiis error mollitia eligendi recusandae corrupti porro? Nulla.
                </p>

            </div>
        </div>
    )
}

export default About