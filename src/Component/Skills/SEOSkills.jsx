import React from "react";
import { motion } from "framer-motion";
import { 
  FaGoogle,
} from "react-icons/fa";

const SEOSkills = () => {
 

  const tools = [
    { name: "Google Analytics", proficiency: "95%" },
    { name: "SEMrush", proficiency: "90%" },
    { name: "Google Search Console", proficiency: "92%" },
    { name: "Ahrefs", proficiency: "85%" },
    { name: "Screaming Frog", proficiency: "88%" },
    { name: "Moz Pro", proficiency: "82%" },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="seo-skills" className="py-16 px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
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
            <FaGoogle className="text-white text-3xl" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SEO <span className="text-yellow-300">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive SEO expertize driving organic growth and digital visibility through data-driven strategies
          </p>
        </motion.div>


        {/* Tools Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">SEO Tools Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{tool.name}</span>
                  <span className="text-yellow-300 font-bold">{tool.proficiency}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    custom={tool.proficiency}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full shadow-lg"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "50+", text: "SEO Projects Completed" },
            { number: "300%", text: "Average Traffic Growth" },
            { number: "24/7", text: "Performance Monitoring" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg"
            >
              <div className="text-3xl font-bold text-yellow-300 mb-2">{item.number}</div>
              <div className="text-white font-semibold">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>

    
      </div>
    </section>
  );
};

export default SEOSkills;