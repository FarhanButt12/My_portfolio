import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaSync, FaUsers } from "react-icons/fa";

export default function WhatImLookingFor() {
  const cards = [
    {
      icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
      title: "Core Focus",
      desc: "Engineering high-quality mobile applications using Flutter/Dart and building dynamic full-stack web architectures, contributing to product codebases."
    },
    {
      icon: <FaSync className="text-2xl text-violet-400" />,
      title: "Workflows & Best Practices",
      desc: "Applying agile methodologies, implementing unit tests, participating in thorough peer code reviews, and designing scalable database structures."
    },
    {
      icon: <FaUsers className="text-2xl text-emerald-400" />,
      title: "Team Collaboration",
      desc: "Contributing in open, growth-oriented, and collaborative environments alongside experienced engineers where pair programming and knowledge sharing are promoted."
    }
  ];

  return (
    <div className="bg-[#020617] text-white py-24 px-5 lg:px-28 border-t border-slate-900 bg-grid relative" id="what-im-looking-for">
      {/* Light aura */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Professional Direction
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            Development{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Focus
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-950 border border-slate-900 p-6 rounded-3xl hover:border-slate-800 transition duration-300 shadow-xl flex flex-col items-start gap-4 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="p-3 bg-slate-900 border border-slate-850 rounded-xl">
                {card.icon}
              </div>
              
              <h3 className="text-base font-bold text-slate-200 group-hover:text-cyan-400 transition font-sora">
                {card.title}
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
