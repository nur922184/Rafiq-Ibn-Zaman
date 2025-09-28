import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Web Development Course",
      institution: "Programming Hero",
      year: "2022",
      duration: "2022",
      location: "Online Platform",
      description: "Completed comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and modern development tools.",
      icon: FaCertificate,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Full-stack web development training",
        "React.js and Node.js proficiency",
        "MongoDB database management",
        "Modern development practices"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sreekail Govt. College",
      year: "2016",
      duration: "2014 - 2016",
      location: "Comilla, Bangladesh",
      description: "Completed Higher Secondary Education in Science group with focus on Physics, Chemistry, Mathematics, and Biology.",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Science Group (Physics, Chemistry, Mathematics)",
        "Academic excellence in scientific subjects",
        "Participated in various academic competitions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaGraduationCap className="text-white text-3xl" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education <span className="text-yellow-300">Background</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
            My academic journey and professional training that shaped my skills and knowledge
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20 rounded-full hidden md:block"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Degree Header */}
                  <div className="flex items-start mb-4">
                    <div className={`bg-gradient-to-r ${edu.color} p-3 rounded-full mr-4`}>
                      <edu.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-yellow-300 font-semibold">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-200">
                      <FaCalendarAlt className="mr-2 text-yellow-400" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-200 text-sm">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className={`w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r ${edu.color} shadow-lg`}
                ></motion.div>
              </div>

              {/* Year Indicator */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 text-left' : 'md:pr-8 text-right'} hidden md:block`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`bg-white/20 px-4 py-2 rounded-full inline-block`}
                >
                  <span className="text-white font-bold text-lg">{edu.year}</span>
                </motion.div>
              </div>

              {/* Mobile Year Indicator */}
              <div className="md:hidden mt-4">
                <div className="bg-white/20 px-4 py-2 rounded-full inline-block">
                  <span className="text-white font-bold">{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">Skills Acquired</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Frontend Development", level: "90%", color: "from-blue-400 to-cyan-400" },
              { skill: "React.js", level: "85%", color: "from-cyan-400 to-blue-400" },
              { skill: "Node.js", level: "80%", color: "from-green-400 to-emerald-400" },
              { skill: "Database Management", level: "75%", color: "from-purple-400 to-pink-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold">{item.level}</span>
                  </div>
                  <h4 className="text-white font-semibold">{item.skill}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 text-lg italic">
            "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;