import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
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
    <div className="bg-[#020617] text-white min-h-[calc(100vh-80px)] pt-20 lg:pt-24 flex items-center relative overflow-hidden bg-grid" id="home">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-28 py-12 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="lg:w-[55%] w-full space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-full text-slate-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Developer Portfolio</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-100 font-sora">
              Muhammad <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Farhan Mukhtar Butt
              </span>
            </h1>

            <h2 className="text-xl lg:text-3xl font-semibold text-slate-300 font-mono flex items-center gap-2">
              <span>I am a</span>
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  1500,
                  "App & Web Developer",
                  1500,
                  "ML & AI Enthusiast",
                  1500,
                ]}
                speed={40}
                repeat={Infinity}
                className="text-cyan-400 font-bold"
              />
            </h2>
          </div>

          <p className="text-slate-400 text-sm lg:text-base leading-relaxed max-w-xl">
            Computer Science undergraduate at the University of Gujrat with a passion for App and Web Development. 
            Adept at building real-world solutions in machine learning, cross-platform mobile apps, and modern web architectures.
          </p>

          {/* CALL TO ACTIONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-500 hover:to-violet-600 text-slate-950 font-bold rounded-xl transition duration-300 text-xs tracking-wider uppercase"
            >
              Contact Me
            </button>

            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-6 py-3 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 bg-slate-900/20 hover:bg-slate-900/50 font-semibold rounded-xl transition duration-300 text-xs tracking-wider uppercase inline-flex items-center justify-center"
            >
              Explore Projects
            </button>
          </div>

          {/* SOCIAL CONNECTIONS */}
          <div className="flex items-center gap-x-4 pt-4">
            {[
              { icon: BiLogoGmail, href: "mailto:farhanbutt2402@gmail.com", label: "Email" },
              { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/farhan-butt-b95ab7337/", label: "LinkedIn" },
              { icon: IoLogoGithub, href: "https://github.com/FarhanButt12", label: "GitHub" },
              { icon: FaPhoneAlt, href: "tel:+923117769001", label: "Phone" }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  title={social.label}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="p-3 border border-slate-900 bg-slate-950 hover:bg-slate-900 rounded-xl text-slate-400 hover:text-cyan-400 transition duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN (Minimalist Glowing Photo Container) */}
        <motion.div
          className="lg:w-[40%] w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Soft background aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition duration-500"></div>
            
            {/* Border frame */}
            <div className="relative bg-slate-950 border border-slate-900/80 p-3 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="relative w-[260px] h-[340px] lg:w-[280px] lg:h-[360px] rounded-[2rem] overflow-hidden bg-slate-900">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 hover:scale-105"
                  src="/assets/Butt.jpg"
                  alt="Muhammad Farhan Mukhtar Butt"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}