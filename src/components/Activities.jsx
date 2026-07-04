import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaTasks } from "react-icons/fa";

export default function Activities() {
  const activities = [
    {
      icon: <FaUsers className="text-2xl text-cyan-400" />,
      title: "University Societies",
      desc: "Active organizer and participant in multiple university societies. Contributed to organizing tech workshops, guest speaker events, coding bootcamps, and local community drives."
    },
    {
      icon: <FaTrophy className="text-2xl text-violet-400" />,
      title: "Coding Competitions",
      desc: "Participated in university-level programming hackathons and coding contests. Constantly solving algorithmic challenges to improve execution speed and logic optimization."
    },
    {
      icon: <FaTasks className="text-2xl text-emerald-400" />,
      title: "Project Leadership",
      desc: "Led and contributed to multiple semester-long team development projects. Managed task planning, hosted sprint reviews, conducted code feedback sessions, and ensured successful deliveries."
    }
  ];

  return (
    <div className="bg-[#020617] text-white py-24 px-5 lg:px-28 border-t border-slate-900 bg-grid relative" id="activities">
      {/* Light aura */}
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Extracurriculars
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            Activities &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Leadership
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* CARDS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
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
                {act.icon}
              </div>

              <h3 className="text-base font-bold text-slate-200 group-hover:text-cyan-400 transition duration-300 font-sora">
                {act.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
