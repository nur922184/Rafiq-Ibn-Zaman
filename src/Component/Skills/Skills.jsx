import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,  
  FaUsers, FaLightbulb, FaTasks, FaWordpress, FaSearch, FaShoppingCart, FaMobileAlt 
} from "react-icons/fa";

import {  SiTailwindcss } from "react-icons/si";
import SEOSkills from "./SEOSkills";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: 85, icon: <FaJsSquare className="text-yellow-400 text-2xl" /> },
  { name: "React", level: 80, icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },

  // 🔹 WordPress Skills
  { name: "WordPress Site Builder", level: 85, icon: <FaWordpress className="text-blue-600 text-2xl" /> },
  { name: "Theme Customization", level: 80, icon: <FaWordpress className="text-blue-500 text-2xl" /> },
  { name: "Plugin Integration", level: 80, icon: <FaWordpress className="text-blue-400 text-2xl" /> },

  // 🔹 Responsive Design
  { name: "Responsive Design", level: 90, icon: <FaMobileAlt className="text-purple-500 text-2xl" /> },

  // 🔹 SEO Skills
  { name: "On-page SEO", level: 85, icon: <FaSearch className="text-green-500 text-2xl" /> },
  { name: "Off-page SEO", level: 75, icon: <FaSearch className="text-green-400 text-2xl" /> },
  { name: "Technical SEO", level: 70, icon: <FaSearch className="text-green-600 text-2xl" /> },
  { name: "E-commerce SEO", level: 75, icon: <FaShoppingCart className="text-orange-500 text-2xl" /> },
];

const softSkills = [
  { name: "Teamwork", icon: <FaUsers className="text-indigo-500 text-xl" /> },
  { name: "Leadership", icon: <FaTasks className="text-pink-500 text-xl" /> },
  { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-500 text-xl" /> },
];
// Key SEO strategist skills include keyword research, technical SEO, on-page and off-page optimization, data analysis, content creation, and proficiency with SEO tools like Google Analytics and SEMrush

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] text-white  px-6 md:px-12">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-14">
          Skills & Expertise
        </h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-teal-300 mb-10 text-center">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-gray-900/60 backdrop-blur-lg border border-teal-500/20 rounded-2xl p-8 
          hover:scale-105 hover:border-teal-400 transition duration-300 shadow-lg"
              >
                {/* Percentage Badge */}
                <span className="absolute top-4 right-4 text-sm bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl text-teal-400">
                    {skill.icon}
                  </div>

                  <h4 className="text-xl font-semibold">
                    {skill.name}
                  </h4>

                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Skills */}
        <SEOSkills />

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-10 text-center">
            Soft Skills
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((soft, index) => (
              <div
                key={index}
                className="group bg-gray-800/70 border border-gray-700 rounded-xl px-6 py-5 
          flex items-center gap-4 hover:border-teal-400 hover:bg-gray-900 transition duration-300"
              >
                <div className="text-2xl text-teal-400 group-hover:scale-110 transition">
                  {soft.icon}
                </div>
                <span className="text-lg font-medium">
                  {soft.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;