import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaEnvelope, FaWhatsapp, FaPhone, FaCode } from 'react-icons/fa';

const DeveloperContact = () => {
  const contacts = [
    { icon: <FaGithub className="text-lg" />, name: "GitHub", url: "https://github.com/ibnzaman", color: "from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700" },
    { icon: <FaLinkedin className="text-lg" />, name: "LinkedIn", url: "https://linkedin.com/in/rafiqibnzaman", color: "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600" },
    { icon: <FaTwitter className="text-lg" />, name: "Twitter", url: "https://x.com/RafiqZ59139", color: "from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400" },
    { icon: <FaFacebook className="text-lg" />, name: "Facebook", url: "https://facebook.com/rafiq.me", color: "from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500" },
    { icon: <FaEnvelope className="text-lg" />, name: "Email", url: "mailto:rafiqibnzaman@gmail.com", color: "from-red-400 to-red-500 hover:from-red-300 hover:to-red-400" },
    { icon: <FaWhatsapp className="text-lg" />, name: "WhatsApp", url: "https://wa.me/8801720548467?text=Hello%20Rafiq,%20I%20want%20to%20connect%20with%20you.", color: "from-green-500 to-green-600 hover:from-green-400 hover:to-green-500" },
    { icon: <FaPhone className="text-lg" />, name: "Phone", url: "tel:+8801720548467", color: "from-green-600 to-green-700 hover:from-green-500 hover:to-green-600" },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] text-white">
      <div className="container mx-auto px-4">
        
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
              <FaCode className="text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Developer Contact</h2>
          </div>
          <p className="text-sm text-gray-300">
            Developed by <span className="font-semibold text-cyan-300">Rafiq Ibn Zaman</span>
          </p>
        </div>

        {/* Single Line Square Contact Links */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                bg-gradient-to-r ${contact.color} 
                w-12 h-12 rounded-lg
                flex items-center justify-center
                transform transition-all duration-200 
                hover:scale-110 hover:shadow-lg hover:rotate-3
                group relative
              `}
            >
              {contact.icon}
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            bg-black bg-opacity-80 text-white text-xs py-1 px-2 rounded 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200
                            whitespace-nowrap">
                {contact.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 
                              w-2 h-2 bg-black bg-opacity-80 rotate-45"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Ultra Compact Skills Info */}
        <div className="text-center mt-6">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-xs text-gray-300 mb-2">
             Front-End Developer & SEO Strategist | • React • Node.js 
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <span className="text-cyan-400">Frontend</span>
              <span className="text-green-400">Backend</span>
              <span className="text-yellow-400">Database</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeveloperContact;