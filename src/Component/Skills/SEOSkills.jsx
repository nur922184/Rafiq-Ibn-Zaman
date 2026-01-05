import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaSearch,
  FaTools,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";

/* ================= COUNTER ================= */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}%</span>;
};

const SEOSkills = () => {
  const pillars = [
    {
      title: "On-Page SEO",
      value: "95",
      items: ["Keyword Research", "Content Optimization", "Internal Linking"],
      icon: <FaSearch />,
    },
    {
      title: "Technical SEO",
      value: "90",
      items: ["Core Web Vitals", "Indexing", "Site Speed"],
      icon: <FaTools />,
    },
    {
      title: "Off-Page SEO",
      value: "85",
      items: ["Backlinks", "Authority Growth", "Outreach"],
      icon: <FaSearch />,
    },
   {
      title: "E-commerce SEO",
      value: 85,
      items: ["Product Optimization", "Rich Snippets", "Cart & Checkout Performance"],
      icon: <FaWordpress className="text-blue-600 text-2xl" />,
    },
  ];

  const tools = [
    { name: "Google Analytics", level: 95 },
    { name: "Search Console", level: 92 },
    { name: "SEMrush", level: 90 },
    { name: "Ahrefs", level: 85 },
    { name: "Screaming Frog", level: 88 },
  ];

  return (
    <section
      id="seo-skills"
      className="bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] mt-16 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            SEO <span className="text-yellow-400">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Data-driven SEO strategies focused on performance, scalability & growth
          </p>
        </motion.div>

        {/* SEO PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-400 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400 text-xl">{pillar.icon}</div>
                <div className="text-yellow-400 font-bold text-lg">
                  <Counter value={pillar.value} />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>

              <ul className="space-y-2 text-sm text-gray-300">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* SEO TOOLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-yellow-400">
            SEO Tools
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <div className="flex justify-between text-sm mb-2">
                  <span>{tool.name}</span>
                  <span className="text-yellow-400">{tool.level}%</span>
                </div>

                <div className="w-full h-1.5 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-yellow-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SEOSkills;
