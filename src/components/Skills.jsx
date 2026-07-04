import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaMobileAlt,
  FaGlobe,
  FaBrain,
  FaCode,
  FaDatabase
} from "react-icons/fa";
import {
  SiDart,
  SiCplusplus,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiAndroidstudio
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      description: "Core coding languages for algorithms and applications.",
      skills: [
        { name: "Dart", icon: <SiDart className="text-cyan-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> }
      ]
    },
    {
      title: "Frameworks & Tools",
      description: "Libraries, backends, environments, and version control.",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-emerald-400" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> }
      ]
    },
    {
      title: "ML Algorithms",
      description: "Data intelligence and pattern recognition models.",
      skills: [
        { name: "KNN", icon: <FaBrain className="text-violet-400" /> },
        { name: "Naïve Bayes", icon: <FaDatabase className="text-pink-400" /> },
        { name: "SVM", icon: <FaCode className="text-indigo-400" /> },
        { name: "Neural Networks", icon: <FaBrain className="text-cyan-400" /> }
      ]
    },
    {
      title: "Areas of Interest",
      description: "Domains of software development and focus fields.",
      skills: [
        { name: "App Development", icon: <FaMobileAlt className="text-cyan-400" /> },
        { name: "Web Development", icon: <FaGlobe className="text-violet-400" /> },
        { name: "Machine Learning", icon: <FaBrain className="text-emerald-400" /> }
      ]
    }
  ];

  return (
    <div className="bg-[#020617] text-white py-16 px-5 lg:px-28 border-t border-slate-900 bg-grid relative" id="skills">
      {/* Light aura */}
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[95px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-10">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Core Competencies
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Skills
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* SKILLS CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="bg-slate-950 border border-slate-900 p-6 rounded-3xl hover:border-slate-800 transition duration-300 shadow-xl flex flex-col justify-start gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-base font-bold text-slate-200 font-mono mb-1">
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-xs mb-1">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-2.5 bg-slate-900/30 border border-slate-900/60 hover:border-cyan-500/20 p-3 rounded-xl transition duration-300 cursor-default group"
                  >
                    <span className="text-xl group-hover:scale-105 transition duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}