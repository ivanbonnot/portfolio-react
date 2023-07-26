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
                    <FormattedMessage
                        id="about.p1"
                        defaultMessage="About me paragraph one"
                    />
                </p>

                <br />

                <p className='text-xl'>
                    <FormattedMessage
                        id="about.p2"
                        defaultMessage="About me paragraph two"
                    />
                </p>

            </div>
        </div>
    )
}

export default About