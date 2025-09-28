import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaBook, FaBriefcase, FaGraduationCap, FaHome, FaPen, FaUser } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'react-scroll'; // ✅ react-scroll import

const Navber = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    // Toggle theme and save to localStorage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Apply theme class to the root element
    useEffect(() => {
        const rootElement = document.documentElement;
        if (theme === "dark") {
            rootElement.classList.add("dark");
        } else {
            rootElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <nav className="bg-opacity-25 md:fixed w-full z-50 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <div className="text-teal-400  font-extrabold cursor-pointer">
                    Rafiq <span className='text-yellow-50'>Ibn</span> Zaman
                </div>
                {/* Center: Links */}
                <ul className="hidden md:flex items-center gap-6 text-white">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <FaUser /> About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="work"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <FaBriefcase /> Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="education"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <FaGraduationCap /> Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <MdContactPhone /> Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="blog"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-teal-400 border-b-2 border-teal-400"
                            className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
                        >
                            <FaBook /> Blog
                        </Link>
                    </li>
                </ul>

                {/* Right: Resume + Theme Button */}
                {/* <div className="text-teal-500 font-medium flex items-center">
                    <Link
                        to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        className="cursor-pointer hover:underline"
                    >
                        Resume
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full ml-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
                    >
                        {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
                    </button>

                </div> */}
            </div>

            {/* Bottom Navigation for Small Screens */}
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 md:hidden">
                {/* Gradient Border */}
                <div className="p-[3px] rounded-full bg-gradient-to-r from-pink-50 via-teal-300 to-lime-300 animate-gradient">
                    {/* Inner Navbar */}
                    <div className="rounded-full bg-slate-900 bg-opacity-80 backdrop-blur-md shadow-lg">
                        <ul className="flex justify-around items-center w-[320px] h-10 px-4">
                            <li>
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <FaHome size={15} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <FaUser size={15} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="work"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <FaBriefcase size={16} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="education"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <FaGraduationCap size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <MdContactPhone size={15} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="blog"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-teal-400"
                                    className="cursor-pointer text-white hover:text-teal-400 transition"
                                >
                                    <FaBook size={15} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navber;
