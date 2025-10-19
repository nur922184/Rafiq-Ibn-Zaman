import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profile from '../../assets/profile.jpg'
import { ShieldCheck, Download, Mail, Code, Star, Zap } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // Text animation on load
        if (textRef.current) {
            textRef.current.classList.add('animate-fade-in-up');
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 px-4">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 10, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Right Side: Image */}
                    <motion.div
                        className="flex justify-center  relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative group">
                            {/* Main Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl mx-auto w-[80%] bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-600 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

                            {/* Animated Border */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl mx-auto  w-[80%] bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-600 p-1"
                                animate={{
                                    rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-full h-full rounded-3xl bg-gray-900/50 backdrop-blur-sm"></div>
                            </motion.div>

                            {/* Image Container */}
                            <div className="relative mx-auto w-[80%] rounded-3xl p-2 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform group-hover:scale-105 transition duration-500 overflow-hidden">
                                <img
                                    src={profile}
                                    alt="Rafiq Ibn Zaman - WordPress Developer"
                                    className="rounded-2xl w-full max-w-md object-cover grayscale group-hover:grayscale-0 transition duration-500"
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-teal-500 p-3 rounded-full shadow-lg"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Code size={24} className="text-white" />
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-lg"
                                    animate={{
                                        y: [0, 10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                >
                                    <Zap size={24} className="text-white" />
                                </motion.div>

                                {/* Status Badge */}
                                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Available</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Left Side: Text Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >

                            <h2 className="text-lg text-teal-400 font-semibold mb-2">
                                Hello, I'm
                            </h2>

                            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Rafiq Ibn Zaman
                            </h1>

                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-gray-300 text-sm">Rated 5.0 by Clients</span>
                            </div>

                            <motion.h3
                                className="text-xl lg:text-2xl text-gray-300 font-medium mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                 <span className="text-teal-400">Front-End Developer</span> & SEO Strategist
                            </motion.h3>

                            <motion.p
                                className="text-gray-300 mb-8 max-w-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                A passionate Front-end Developer specializing in building dynamic, user-friendly,
                                and SEO-optimized websites. With expertise in theme customization, plugin integration,
                                and responsive design. I help businesses to grow with professional web solutions.
                            </motion.p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-teal-400">50+</div>
                                    <div className="text-sm text-gray-400">Projects Completed</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-blue-400">3+</div>
                                    <div className="text-sm text-gray-400">Years Experience</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                {/* <a
                                    href="#contact"
                                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 px-8 py-4 rounded-xl shadow-lg text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    
                                    
                                </a> */}
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 px-8 py-4 rounded-xl shadow-lg text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                <Mail size={20} /> Contact Me
                                </Link>
                                <Link
                                    to="resume"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    className="group border-2 border-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-xl shadow-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                <Download size={20} />Download Resume
                                </Link>
                               
                            </motion.div>
                        </motion.div>
                    </motion.div>


                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="flex flex-col items-center text-gray-400">
                        <span className="text-sm mb-2">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
                            <motion.div
                                className="w-1 h-3 bg-teal-400 rounded-full mt-2"
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;