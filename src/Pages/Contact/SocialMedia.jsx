import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaUser,
  FaTwitter,
  FaInstagram,
  FaGlobe
} from "react-icons/fa";

const SocialMedia = () => {
  // Social Media Links Data
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ibnzaman",
      icon: FaGithub,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
      textColor: "text-gray-100"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rafiqibnzaman",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      textColor: "text-blue-100"
    },
    {
      name: "Twitter/X",
      url: "https://x.com/RafiqZ59139",
      icon: FaTwitter,
      color: "from-black to-gray-800",
      hoverColor: "hover:from-gray-900 hover:to-gray-700",
      textColor: "text-gray-100"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/rafiq.me",
      icon: FaFacebook,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600",
      textColor: "text-blue-100"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rafiqibnzaman",
      icon: FaInstagram,
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-500 hover:to-purple-500",
      textColor: "text-pink-100"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801720548467?text=Hello%20Rafiq,%20I%20want%20to%20connect%20with%20you.",
      icon: FaWhatsapp,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-400 hover:to-green-600",
      textColor: "text-green-100"
    },
    {
      name: "Email",
      url: "mailto:rafiqibnzaman@gmail.com",
      icon: FaEnvelope,
      color: "from-red-500 to-red-700",
      hoverColor: "hover:from-red-400 hover:to-red-600",
      textColor: "text-red-100"
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="social-media" className="py-16 px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Social <span className="text-teal-300">Media</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
            Connect with me on various social media platforms. Let's stay in touch and collaborate!
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-2xl p-6 shadow-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <social.icon className="text-white text-3xl" />
                </div>
                
                {/* Platform Name */}
                <h3 className={`text-xl font-bold mb-2 ${social.textColor}`}>
                  {social.name}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 text-sm mb-4">
                  {social.name === 'GitHub' && 'Check out my projects and code'}
                  {social.name === 'LinkedIn' && 'Professional network and resume'}
                  {social.name === 'Twitter/X' && 'Latest updates and thoughts'}
                  {social.name === 'Facebook' && 'Personal profile and updates'}
                  {social.name === 'Instagram' && 'Photos and daily life'}
                  {social.name === 'WhatsApp' && 'Direct message me'}
                  {social.name === 'Email' && 'Send me an email'}
                </p>
                
                {/* CTA Button */}
                <div className="bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium group-hover:bg-white/30 transition-all duration-300">
                  Visit {social.name}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Contact Section */}
    

        {/* Follow Me Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-white/80 text-lg">
            Don't forget to follow and connect with me on your favorite platforms!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;