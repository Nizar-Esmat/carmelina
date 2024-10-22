import React, { useState } from 'react';
import logo from "/src/assets/logo.webp";
import {TfiAlignLeft, TfiAlignRight, TfiAngleDown} from "react-icons/tfi";
import '/src/Nav/navbar.modeul.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };


    const [AngleDown , setAngleDown] = useState(false);

    const toggleAngleDown = () => {
        setAngleDown(!AngleDown);
    }

    return (
        <header className=" text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <a href="#">
                        <img src={logo} className="w-40 h-auto" alt="Logo"/>
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex space-x-4">

                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Home
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Rooms
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                pages
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Offer
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Gallery
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Blog
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Contact Us
                            </a>
                            <TfiAngleDown className="transition-transform "/>
                        </div>

                        <div
                            className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                            <ul className="py-2">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Other navigation links are omitted for brevity */}
                </nav>

                {/* Button on the right */}
                <button id="button" >Book Room</button>

                {/* Hamburger Menu Button */}
                <button
                    className="lg:hidden block focus:outline-none"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <TfiAlignLeft/> : <TfiAlignRight/>}


                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 z-10  w-64 h-full bg-gray-800 text-white transition-transform transform   ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <div>
                        <img src={logo} className="w-32" alt="Logo"/>
                    </div>
                    <button
                        className="z-50"
                        onClick={closeSidebar}

                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col space-y-4 p-5">


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Home
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Rooms
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Pages
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Offer
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Gallery
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Blog
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>


                    <div className="relative group">
                        <div className="flex justify-center items-center gap-0">
                            <a href="#" onClick={toggleAngleDown}
                               className="hover:text-gray-400 p-1 transition duration-200 ease-in-out">
                                Contact Us
                            </a>
                            <TfiAngleDown className="transition-transform "/>

                        </div>

                        {AngleDown ?
                            <div
                                className=" left-0 w-full text-center hidden group-hover:block bg-gray-700 text-white mt-2 rounded-md shadow-lg transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Subitem</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            ""
                        }

                    </div>

                    <button id="button1">Book Room</button>

                </div>

            </div>
    
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0  "
                    onClick={closeSidebar}
                ></div>
            )}
        </header>
    );
};

export default Navbar;
