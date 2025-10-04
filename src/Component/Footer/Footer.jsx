import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rafiq Ibn Zaman</h3>
            <p className="text-gray-400">Front-End Developer</p>
            <p className="text-gray-400 mt-2">Expert in Web Development</p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-3" />
                <span>+8801720548467</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-400 mr-3" />
                <span>rafiqibnzaman@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="grid grid-cols-3 gap-3">
              <a href="https://github.com/ibnzaman" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition flex flex-col items-center">
                <FaGithub className="text-xl" />
                <span className="text-xs mt-1">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/rafiqibnzaman" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition flex flex-col items-center">
                <FaLinkedin className="text-xl" />
                <span className="text-xs mt-1">LinkedIn</span>
              </a>
              <a href="https://x.com/RafiqZ59139" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition flex flex-col items-center">
                <FaTwitter className="text-xl" />
                <span className="text-xs mt-1">Twitter</span>
              </a>
              <a href="https://facebook.com/rafiq.me" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition flex flex-col items-center">
                <FaFacebook className="text-xl" />
                <span className="text-xs mt-1">Facebook</span>
              </a>
              <a href="https://instagram.com/rafiqibnzaman" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition flex flex-col items-center">
                <FaInstagram className="text-xl" />
                <span className="text-xs mt-1">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-cyan-400 transition">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="#education" className="hover:text-cyan-400 transition">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Rafiq Ibn Zaman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;