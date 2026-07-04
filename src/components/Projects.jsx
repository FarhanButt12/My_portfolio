import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AI-Based Cyber Attack Detection System",
    category: "Machine Learning, Cybersecurity",
    description: "Designed and trained a multi-algorithm ML pipeline to classify network traffic into DoS, DDoS, Phishing, and Normal categories, linking ML predictions to real-world attack vectors.",
    bullets: [
      "Designed and trained a multi-algorithm ML pipeline (KNN, Naïve Bayes, SVM, Neural Networks) to classify network traffic.",
      "Preprocessed and analysed real-world network datasets; compared model performance to identify the best classifier.",
      "Linked ML predictions to real-world attack patterns and threat vectors."
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "/assets/ML.jpeg"
  },
  {
    id: 2,
    title: "Cross-Platform Expense Tracker App",
    category: "Mobile App Development",
    description: "Built a full CRUD cross-platform mobile app with category-wise spending analytics, advanced search filters, and budget alert notifications.",
    bullets: [
      "Built a full CRUD app with category-wise spending analytics, real-time search with advanced filters, and budget notifications.",
      "Integrated Firebase Cloud Firestore for real-time sync and Firebase Authentication for secure login.",
      "Designed a clean, responsive Flutter UI targeting Android and iOS from a single codebase."
    ],
    stack: ["Dart", "Flutter", "Firebase Firestore", "Firebase Auth", "Android Studio"],
    image: "/assets/Expense3.jpeg"
  },
  {
    id: 3,
    title: "UOG Official Website Redesign",
    category: "Web Development, UI/UX Improvement",
    description: "Audited and redesigned multiple pages of the University of Gujrat official website, fixing visual, structural, and semantic issues for improved accessibility.",
    bullets: [
      "Audited and redesigned multiple pages of the University of Gujrat website, fixing structural, visual, and content issues.",
      "Improved navigation flow, layout consistency, and overall user experience.",
      "Applied semantic HTML and modern CSS best practices for readability, accessibility, and maintenance."
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/UNI.jpeg"
  }
];

export default function Projects() {
  return (
    <div className="bg-[#020617] px-5 lg:px-28 py-24 text-white border-t border-slate-900 bg-grid relative" id="projects">
      {/* Light aura */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Practical Work
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-sora">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">
              Projects
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              {/* IMAGE CONTAINER */}
              <div className="w-full lg:w-1/2 flex justify-center relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500"></div>
                
                {project.id === 2 ? (
                  /* Smartphone Mockup Frame for Mobile Apps */
                  <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-950 aspect-[9/18.5] w-[250px] overflow-hidden shadow-2xl transition duration-500 group-hover:scale-[1.02] group-hover:border-slate-800">
                    {/* Speaker Notch Simulator */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                      <span className="w-8 h-1 bg-slate-800 rounded-full"></span>
                    </div>
                    
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:brightness-105"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                ) : (
                  /* Desktop / Widescreen Browser Mockup for Web and ML Projects */
                  <div className="relative rounded-3xl overflow-hidden border border-slate-900 bg-slate-950 aspect-video w-full shadow-2xl flex flex-col group-hover:border-slate-800 transition duration-300">
                    {/* Browser Header Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 border-b border-slate-950 select-none">
                      {/* Window Controls */}
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                      </div>
                      {/* Address Bar */}
                      <div className="flex-1 max-w-[220px] mx-auto bg-slate-950 border border-slate-900/80 rounded py-0.5 px-3 text-[9px] text-slate-500 font-mono text-center truncate">
                        {project.id === 3 ? "uog.edu.pk" : "cyberattack-detection.local"}
                      </div>
                    </div>
                    {/* Content Area */}
                    <div className="relative flex-1 bg-[#090d1a] overflow-hidden">
                      <img
                        className="absolute inset-0 w-full h-full object-contain object-top p-1 transition duration-500 group-hover:scale-[1.01] group-hover:brightness-105"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* TEXT CONTAINER */}
              <div className="w-full lg:w-1/2 space-y-4">
                
                {/* NUMBER & CATEGORY */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-cyan-400 font-mono">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 bg-slate-950 border border-slate-900 px-3 py-1 rounded-xl">
                    {project.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-slate-100 text-2xl lg:text-3xl group-hover:text-cyan-400 transition duration-300 font-sora">
                  {project.title}
                </h3>

                {/* BULLETS */}
                <ul className="list-disc pl-5 text-slate-400 text-xs lg:text-sm space-y-2.5 leading-relaxed">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* STACK CHIPS */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/20 border border-cyan-900/40 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
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