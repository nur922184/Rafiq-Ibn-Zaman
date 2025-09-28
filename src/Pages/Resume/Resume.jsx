import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaGoogleDrive } from "react-icons/fa";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW/view";
  const downloadLink = "https://drive.google.com/uc?export=download&id=1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW";



  return (
    <section id="resume" className="py-16 px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-300">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Download my resume to learn more about my skills and experience
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye className="mr-3" />
            View Resume
          </motion.a>

          <motion.a
            href={downloadLink}
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-3" />
            Download PDF
          </motion.a>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Resume Preview</h3>
            <div className="flex items-center text-teal-300">
              <FaGoogleDrive className="mr-2" />
              <span>Google Drive</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/30">
            <div className="flex items-center mb-6">
              <FaFilePdf className="text-red-500 text-4xl mr-4" />
              <div>
                <h4 className="text-white text-lg font-medium">Rafiq_Resume.pdf</h4>
                <p className="text-gray-400 text-sm">Updated: December 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* <div>
                <h5 className="text-teal-300 font-medium mb-3">Professional Experience</h5>
                <ul className="space-y-2">
                  {experiences.map((exp, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      <span className="font-medium">{exp.role}</span> at {exp.company}
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* <div>
                <h5 className="text-teal-300 font-medium mb-3">Education</h5>
                <ul className="space-y-2">
                  {education.map((edu, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      <span className="font-medium">{edu.degree}</span> - {edu.institution}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            <div className="bg-teal-900/30 p-4 rounded-lg">
              <p className="text-teal-300 text-sm text-center">
                Click "View Resume" to see the complete document with detailed information about my skills, experience, and projects.
              </p>
            </div>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default Resume;