import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { SiUdemy, SiCoursera } from "react-icons/si";

export default function Certifications() {
  const certifications = [
    {
      title: "Complete Web Development Bootcamp",
      platform: "Udemy",
      icon: <SiUdemy className="text-[#A435F0] text-2xl" />,
      topics: ["HTML", "CSS", "JavaScript", "Front-end Development"],
      description: "Comprehensive training in building modern, interactive web pages and responsive user interfaces."
    },
    {
      title: "Google AI + Google AI Essentials",
      platform: "Coursera",
      icon: <SiCoursera className="text-[#0056D2] text-2xl" />,
      topics: ["Generative AI", "Prompt Engineering", "Google Cloud AI Tools"],
      description: "Advanced program focused on applying AI concepts, optimizing prompts, and implementing AI-driven productivity strategies."
    },
    {
      title: "Google People Management Essentials",
      platform: "Coursera",
      icon: <SiCoursera className="text-[#0056D2] text-2xl" />,
      topics: ["Team Collaboration", "Leadership", "Project Planning"],
      description: "Core practices for organizing teams, facilitating code reviews, and managing semester-long software delivery milestones."
    }
  ];

  return (
    <div className="bg-[#020617] text-white py-24 px-5 lg:px-28 border-t border-slate-900 bg-grid relative" id="certifications">
      {/* Light aura */}
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Verified Credentials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            Certifications
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-950 border border-slate-900 p-6 rounded-3xl hover:border-slate-800 transition duration-300 shadow-xl flex flex-col justify-between group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-4">
                {/* ICON & PLATFORM */}
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-slate-900 border border-slate-850 rounded-xl">
                    {cert.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full uppercase border border-slate-850 flex items-center gap-1.5">
                    <FaAward className="text-cyan-400" />
                    {cert.platform}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold text-slate-200 group-hover:text-cyan-400 transition duration-300 font-sora">
                  {cert.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* TOPIC CHIPS */}
              <div className="mt-6 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-semibold text-slate-400 bg-slate-900/40 border border-slate-900/60 px-2.5 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
