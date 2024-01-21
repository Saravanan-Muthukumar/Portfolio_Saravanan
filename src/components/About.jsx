import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'> 
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>
            </div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 scroll-px-4'>
            <div className=''>
                <p className='sm:text-right text-4xl font-bold'>Hi, I am Saravanan, Nice to meet you! Please take a look at my works </p>
            </div>
            <div>
            I am passionate about web application development. I am learing full stack web developement. I have Master Degree in Software Development. I have hands on experience in React, Nodejs, MySql. Currently I am looking to get professional experience to learn more about web development of large scale websites. I am intrested in learning and work in cutting edge technologies in web development.  
            </div>
        </div>
        </div>
      </div>
  )
}

export default About
