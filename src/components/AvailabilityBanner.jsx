import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";

export default function AvailabilityBanner() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#020617] px-5 lg:px-28 py-10 text-white bg-grid relative" id="availability-banner">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="relative rounded-3xl p-8 lg:p-12 overflow-hidden bg-slate-950 border border-slate-900 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Neon radial glow in the background */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-full blur-2xl group-hover:scale-110 transition duration-700 pointer-events-none"></div>

          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                Status: Open to projects
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tight font-sora">
              Available for <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Mobile & Web Development
              </span>
            </h3>
            
            <p className="text-xs lg:text-sm text-slate-400 max-w-lg leading-relaxed">
              I specialize in Flutter app development and React-based web services. Connect with me to discuss full-cycle builds, code architectures, or integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto justify-center">
            {/* Tech badges */}
            <div className="flex items-center gap-3 text-slate-500 text-2xl">
              <span className="p-3 bg-slate-900 border border-slate-850 rounded-xl hover:text-cyan-400 transition" title="Mobile App Dev">
                <FaMobileAlt />
              </span>
              <span className="p-3 bg-slate-900 border border-slate-850 rounded-xl hover:text-violet-400 transition" title="Web Dev">
                <FaGlobe />
              </span>
            </div>
            
            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-500 hover:to-violet-600 text-slate-950 font-bold rounded-xl transition duration-300 text-xs tracking-wider uppercase whitespace-nowrap shadow-lg hover:shadow-cyan-400/10 w-full sm:w-auto"
            >
              Start A Project
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
