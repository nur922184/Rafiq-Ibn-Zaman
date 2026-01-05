import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWordpress,
  FaSearch,
  FaShoppingCart,
  FaPhp,
  FaUsers,
  FaTasks,
  FaLightbulb,
} from "react-icons/fa";
import SEOSkills from "./SEOSkills";

/* ================= SKILLS DATA ================= */
const skills = [
  { name: "HTML5", level: 95, category: "Frontend", icon: <FaHtml5 /> },
  { name: "CSS3", level: 90, category: "Frontend", icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 85, category: "Frontend", icon: <FaJsSquare /> },
  { name: "React", level: 80, category: "Frontend", icon: <FaReact /> },

  { name: "WP Site Builder", level: 85, category: "WordPress", icon: <FaWordpress /> },
  { name: "Theme Customization", level: 80, category: "WordPress", icon: <FaWordpress /> },
  { name: "Plugin Integration", level: 80, category: "WordPress", icon: <FaWordpress /> },

  { name: "On-page SEO", level: 85, category: "SEO", icon: <FaSearch /> },
  { name: "Off-page SEO", level: 75, category: "SEO", icon: <FaSearch /> },
  { name: "Technical SEO", level: 70, category: "SEO", icon: <FaSearch /> },
  { name: "E-commerce SEO", level: 75, category: "SEO", icon: <FaShoppingCart /> },
  { name: "PHP (SEO & WP)", level: 65, category: "SEO", icon: <FaPhp /> },
];

const softSkills = [
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Leadership", icon: <FaTasks /> },
  { name: "Problem Solving", icon: <FaLightbulb /> },
];

const categories = ["All", "Frontend", "WordPress", "SEO", "Soft Skills"];

/* ================= COUNTER ================= */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}%</span>;
};

/* ================= SKILL CARD ================= */
const SkillCard = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 
      flex flex-col items-center text-center gap-3 
      hover:border-teal-400 transition"
  >
    <div className="text-3xl text-teal-400">{skill.icon}</div>
    <h4 className="text-sm font-semibold">{skill.name}</h4>

    <div className="text-xs text-teal-300 font-medium">
      <Counter value={skill.level} />
    </div>

    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 0.8 }}
        className="h-full bg-teal-400"
      />
    </div>
  </motion.div>
);

/* ================= MAIN ================= */
const Skills = () => {
  const [active, setActive] = useState("All");

  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
          Skills & Expertise
        </h2>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition
                ${
                  active === cat
                    ? "bg-teal-400 text-gray-900 border-teal-400"
                    : "border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-gray-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS */}
        {active !== "Soft Skills" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {filteredSkills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        )}

        {/* SOFT SKILLS */}
        {active === "Soft Skills" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((soft, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900/70 border border-gray-700 rounded-xl px-6 py-4 
                  flex items-center gap-4 hover:border-teal-400 transition"
              >
                <div className="text-2xl text-teal-400">{soft.icon}</div>
                <span className="font-medium">{soft.name}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div> 
      <SEOSkills></SEOSkills>
    </section>
  );
};

export default Skills;
