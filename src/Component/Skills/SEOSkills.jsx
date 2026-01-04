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
    <section id="seo-skills" className=" px-4 bg-gradient-to-r from-[#6b6b83] via-[#536976] to-[#24243e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            SEO <span className="text-yellow-400">Expertise</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Structured, scalable, and data-driven SEO strategies focused on long-term growth
          </p>
        </motion.div>

        {/* SEO Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "On-Page SEO",
              items: ["Keyword Research", "Content Optimization", "Internal Linking"],
              value: "95%"
            },
            {
              title: "Technical SEO",
              items: ["Site Speed", "Core Web Vitals", "Indexing"],
              value: "90%"
            },
            {
              title: "Off-Page SEO",
              items: ["Backlink Building", "Authority Growth", "Outreach"],
              value: "85%"
            },
            {
              title: "SEO Analytics",
              items: ["GA4", "Search Console", "Conversion Tracking"],
              value: "92%"
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-white/10 to-white/5 
        backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl"
            >

              {/* Percentage */}
              <div className="text-right text-yellow-400 font-bold text-2xl">
                {pillar.value}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {pillar.title}
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "50+", label: "Websites Ranked" },
            { number: "3x", label: "Organic Growth" },
            { number: "Top 10", label: "SERP Results" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-xl p-8 text-center"
            >
              <div className="text-3xl font-bold text-yellow-400">
                {stat.number}
              </div>
              <p className="text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default SEOSkills;