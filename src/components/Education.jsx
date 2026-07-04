import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const academicHighlights = [
    {
      title: "Core Coursework",
      items: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Software Engineering Principles"
      ]
    },
    {
      title: "Specialized Subjects",
      items: [
        "Mobile App Architectures (Flutter/Dart)",
        "Web Application Architectures (HTML5/CSS3/JS)",
        "Machine Learning Algorithms (KNN, SVM, SVM, Naïve Bayes)"
      ]
    },
    {
      title: "Engineering Methodologies",
      items: [
        "Agile & Scrum Sprint Workflows",
        "Git Version Control & Repository Management",
        "Team Projects, Planning, & Code Reviews"
      ]
    }
  ];

  return (
    <div className="bg-[#020617] text-white py-24 px-5 lg:px-28 border-t border-slate-900 bg-grid relative" id="education">
      {/* Light aura */}
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Academic Foundation
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Education
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* DETAILS SECTION */}
        <motion.div 
          className="bg-slate-950 border border-slate-900 rounded-3xl p-6 lg:p-10 shadow-2xl space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-900 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-2xl text-cyan-400 border border-slate-800">
                <FaGraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-100">
                  BS Computer Science
                </h3>
                <p className="text-cyan-400 font-semibold font-mono text-sm">
                  University of Gujrat
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-850 px-4 py-2 rounded-full font-mono">
              <FaCalendarAlt className="text-violet-400" />
              2023 – 2027 (Expected)
            </span>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <FaBookOpen size={14} className="text-cyan-400" />
              Academic Focus & Highlights
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Studying structural algorithms, databases, and cross-platform app frameworks. 
              The curriculum focuses on developing analytical thinking, solid programming architectures, 
              and applying ML models to solve modern tech problems. Through semester-long projects, I have combined coursework with hands-on implementation to create high-quality applications.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {academicHighlights.map((highlight, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-900/80 p-5 rounded-2xl space-y-3">
                <h5 className="text-xs font-bold font-mono text-slate-200 border-b border-slate-800 pb-2 uppercase tracking-wide">
                  {highlight.title}
                </h5>
                <ul className="space-y-2">
                  {highlight.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed">
                      <span className="text-cyan-400 mt-1">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </div>
  );
}
