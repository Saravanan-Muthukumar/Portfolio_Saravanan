import React from 'react'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwindimg from '../assets/tailwind.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-8'>There are the tech stack I work with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={Tailwindimg} alt="HTML icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={Node} alt="HTML icon" />
                <p className='my-4'>NodeJs</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={HTML} alt="HTML icon" />
                <p className='my-4'>MySql</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto p-1' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GitHub</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
