import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () =>{
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h1 className='text-pink-600 text-4xl text-dancing'>M|S</h1>
        </div>
        {/* menu */}
            <ul className='hidden md:flex '>
            
            
                <li><Link  to="home"  smooth={true} duration={500}>Home</Link></li>
                <li><Link  to="about"  smooth={true} duration={500}>About</Link></li>
                <li><Link  to="skills"  smooth={true} duration={500}>Skills</Link></li>
                <li><Link  to="work"  smooth={true} duration={500}>Works</Link></li>
                <li><Link  to="contact"  smooth={true} duration={500}>Contact</Link></li>
                <li><a href="/Sara_Resume.pdf" target='_blank' rel='noopener noreferrer'>Resume</a></li>
            </ul>
   
        {/* hamburger */}
        <div className='flex md:hidden z-10 cursor-pointer' onClick={handleClick}>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true} duration={500}>Works</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true} duration={500}>Contact</Link></li>
                <li className='py-6 text-4xl'><a onClick={handleClick} href="/Sara_Resume.pdf" target='_blank' rel='noopener noreferrer'  smooth={true} duration={500}>Resume</a></li>
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/saravanan-muthukumar-8bb71725a/" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="https://github.com/Saravanan-Muthukumar" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="/Sara_Resume.pdf" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
