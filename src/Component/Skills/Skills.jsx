import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaUsers, FaLightbulb, FaTasks } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: 85, icon: <FaJsSquare className="text-yellow-400 text-2xl" /> },
  { name: "React", level: 80, icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "MongoDB", level: 70, icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
];

const softSkills = [
  { name: "Teamwork", icon: <FaUsers className="text-indigo-500 text-xl" /> },
  { name: "Leadership", icon: <FaTasks className="text-pink-500 text-xl" /> },
  { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-500 text-xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] text-white py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-8">
          Skills & Expertise
        </h2>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-1">
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-teal-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((soft, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-xl shadow-md hover:scale-105  transition"
              >
                {soft.icon}
                <span className="text-lg">{soft.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;