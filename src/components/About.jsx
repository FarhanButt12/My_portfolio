import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const softSkills = [
    "Team Collaboration & Pair Programming",
    "Problem-Solving & Analytical Thinking",
    "Time Management & Meeting Deadlines",
    "Adaptability & Fast Learning"
  ];

  return (
    <div className="px-5 lg:px-28 py-24 bg-[#020617] text-white flex justify-between flex-col lg:flex-row items-center gap-12 border-t border-slate-900 bg-grid relative" id="about">
      {/* Light aura */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* IMAGE CONTAINER */}
      <motion.div
        className="lg:w-[45%] flex justify-center relative"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-slate-950 border border-slate-900 p-3 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="relative w-[240px] h-[310px] lg:w-[260px] lg:h-[330px] rounded-[2rem] overflow-hidden bg-slate-900">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              src="/assets/about-me.svg"
              alt="Muhammad Farhan Mukhtar Butt - Profile"
            />
          </div>
        </div>
      </motion.div>

      {/* TEXT CONTENT */}
      <motion.div
        className="lg:w-[55%] space-y-6 relative z-10"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div>
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Who I am
          </span>
          <h2 className="lg:text-4xl text-2xl font-bold tracking-wide text-slate-100 font-sora">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Me
            </span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mt-2 rounded"></div>
        </div>

        <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
          I'm an aspiring <strong className="font-semibold text-slate-100">Computer Science student</strong> at the{" "}
          <span className="text-slate-100 font-semibold">University of Gujrat</span> (2023 – 2027), with a strong passion for building modern digital solutions.
          My technical focus spans designing and building robust <strong className="font-semibold text-slate-100">mobile applications with Flutter</strong>, architecting <strong className="font-semibold text-slate-100">full-stack web systems</strong>, 
          and training <strong className="font-semibold text-slate-100">machine learning pipelines</strong>. I strive to write well-structured, clean code and create performant interfaces with a stellar user experience.
        </p>

        <p className="text-slate-400 text-sm leading-relaxed">
          Through hands-on projects, I have developed real-world systems, such as an <strong className="font-semibold text-slate-100">AI-Based Cyber Attack Detection System</strong> implementing ML classifiers (KNN, SVM, Naïve Bayes, Neural Networks) and a cross-platform <strong className="font-semibold text-slate-100">Expense Tracker App</strong> utilizing Firebase. Whether collaborating in team sprints or auditing websites like the official UOG site to improve accessibility and UX, I love the process of turning complex, technical ideas into elegant, maintainable applications.
        </p>

        {/* SOFT SKILLS */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">
            Core Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3.5 py-2 border border-slate-900 bg-slate-950 text-slate-400 rounded-xl transition duration-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}