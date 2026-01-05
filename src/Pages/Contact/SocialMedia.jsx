import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,

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
    <section id="social-media" className=" px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl ">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Connect <span className="text-teal-400">With Me</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Let’s build, collaborate, and grow together across digital platforms
          </p>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-10 place-items-center"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 
          group-hover:opacity-60 transition duration-300 ${social.glow}`}
              ></div>

              {/* Card */}
              <div
                className="relative md:w-36 md:h-36 w-28 h-28 bg-white/10 backdrop-blur-xl 
          border border-white/10 rounded-2xl 
          flex flex-col items-center justify-center gap-3 
          shadow-xl"
              >
                <social.icon className={`text-4xl ${social.iconColor}`} />

                {/* Slide Label */}
                <span
                  className="absolute -bottom-10 opacity-0 group-hover:opacity-100 
            group-hover:translate-y-2 transition duration-300 
            text-sm text-white font-medium"
                >
                  {social.name}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg">
            One click away from meaningful connections 🚀
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default SocialMedia;