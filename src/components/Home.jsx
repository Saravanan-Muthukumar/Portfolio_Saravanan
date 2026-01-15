import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>
      {/*containe*/}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>Saravanan</h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] mb-10'>
        II’m a Full-Stack Web Developer with hands-on experience building modern, scalable web applications using React.js, Tailwind CSS, Node.js, and MySQL. I enjoy turning real-world requirements into clean, functional, and user-friendly digital solutions.

I have experience developing CRUD-based business applications, REST APIs, and responsive UIs, with deployments on DigitalOcean and Vercel. I focus on writing clean code, building reusable components, and creating applications that are both performant and easy to maintain.

I’m continuously learning and improving my skills while working on real-world projects that strengthen my understanding of full-stack development.
        </p>
        <div>
        <Link  to="work"  smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 flex  items-center hover:border-pink-600 hover:bg-pink-600 '>View Work 
            <span>
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </span>
            </button>
            </Link>
            {/* <Link  to="work"  smooth={true} duration={500}>
            <div class="relative inline-flex  group ">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="" title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">View my Work     <span>
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </span>

        </a>
        
    </div>
        
        </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Home
