import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';

export const Nav = () => {

    const [number, setNumber] = useState<number>(1);

    const changeNumber = () => {
        setNumber(number + 1);
    }

  return (
    <div>
		<nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<Fade>
								<a href="/" className="flex items-center py-4 px-2">
									<img src="logo-accounting.png" alt="Logo" className="h-30 w-30 mr-2"/>
								</a>
							</Fade>
						</div>
						<div className="hidden md:flex items-center space-x-1">
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="/" className="py-2 px-2 font-medium text-white bg-yellow-500 rounded hover:bg-yellow-400 transition duration-300">Contacto</a>
					</div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className="hidden mobile-menu">
				<ul className="">
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
    </div>
  )
}
