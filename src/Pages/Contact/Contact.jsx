import React, { useState } from "react";
import { motion } from "framer-motion";
import Me from '../../assets/profile.jpeg'
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
  FaInstagram
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "a9b6bb6c-f178-437d-a90a-f26a96a2c11d");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);

        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-teal-300">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            I look forward to hearing from you. Please fill out the form below or contact me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-200">3/A/2 Salimullah Road, Block - D, Mohammadpur, Dhaka - 1207</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:rafiqibnzaman@gmail.com" className="text-gray-200 hover:text-teal-300 transition-colors">
                    rafiqibnzaman@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <a href="https://wa.me/8801720548467?text=Hello%20Rafiq,%20I%20want%20to%20connect%20with%20you." 
                     className="text-gray-200 hover:text-teal-300 transition-colors">
                    +8801720548467
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaPhone className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+8801720548467" className="text-gray-200 hover:text-teal-300 transition-colors">
                    +8801720548467
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <div className="flex justify-center mt-6">
                <img
                  src={Me}
                  alt="Rafiq Ibn Zaman"
                  className="w-24 h-24 bg-cover rounded-full border-4 border-teal-900"
                />
              </div>
              <h4 className="text-white font-medium mb-4 text-center mt-2">Follow Me</h4>
              <div className="flex space-x-2 justify-center">
                <motion.a
                  href="https://github.com/ibnzaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/rafiqibnzaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaLinkedin size={18} />
                </motion.a>

                <motion.a
                  href="https://x.com/RafiqZ59139"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaTwitter size={18} />
                </motion.a>

                <motion.a
                  href="https://facebook.com/rafiq.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaFacebook size={18} />
                </motion.a>

                <motion.a
                  href="https://instagram.com/rafiqibnzaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaInstagram size={18} />
                </motion.a>

                <motion.a
                  href="https://wa.me/8801720548467?text=Hello%20Rafiq,%20I%20want%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaWhatsapp size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>

            {isSubmitted ? (
              <motion.div
                className="bg-teal-400/20 border border-teal-400/30 text-teal-300 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaPaperPlane className="inline-block mr-2" />
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-3 placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-3 placeholder-gray-400"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full p-3 placeholder-gray-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-teal-400 hover:bg-teal-500 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  Send Message <FaPaperPlane className="ml-2" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;