import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between p-[10px] bg-primary ">
        <a className="font-bold text-black pl-[100px] text-4xl" href="#">Abinesh</a>
        <nav className=" p-4 hidden md:block">
            <ul className="flex text-black ">
                <li><a className='hover:text-red-500' href="/">Home</a></li>
                <li><a  className='hover:text-red-500' href="/#about">About</a></li>
                <li><a  className='hover:text-red-500' href="/#projects">Projects</a></li>
                <li><a  className='hover:text-red-500' href="/#resume">Resume</a></li>
                <li><a  className='hover:text-red-500' href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-black  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}