import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];



  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 lg:px-28 ${
        hasShadow
          ? "py-3 bg-slate-950/70 border-b border-slate-900/60 backdrop-blur-xl shadow-lg shadow-black/20"
          : "py-6 bg-transparent border-b border-transparent"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <motion.h1
          onClick={() => scrollToSection("home")}
          className="text-xl lg:text-2xl font-bold cursor-pointer tracking-wider text-slate-100 font-mono"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Farhan</span>
          <span className="text-cyan-400 font-bold">/&gt;</span>
        </motion.h1>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-x-8 font-medium text-xs tracking-wider uppercase text-slate-400">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-slate-100 transition duration-300 py-1"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* RESUME BUTTON */}
        <a
          href="/Muhammad_Farhan_Mukhtar_Butt_Resume.pdf"
          download="Muhammad_Farhan_Mukhtar_Butt_Resume.pdf"
          className="hidden lg:flex items-center gap-x-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-500 hover:to-violet-600 text-slate-950 hover:scale-[1.03] text-xs font-extrabold rounded-xl transition-all duration-300 tracking-wider shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 active:scale-95"
        >
          Resume <TbDownload size={14} className="stroke-[2.5]" />
        </a>

        {/* MOBILE MENU TOGGLE */}
        <motion.button
          className="lg:hidden text-2xl text-slate-300 hover:text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-900 backdrop-blur-xl py-6 px-8 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-y-4 font-semibold text-slate-300 uppercase tracking-wider text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-cyan-400 transition text-left w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="/Muhammad_Farhan_Mukhtar_Butt_Resume.pdf"
              download="Muhammad_Farhan_Mukhtar_Butt_Resume.pdf"
              className="flex justify-center items-center gap-x-2 py-3.5 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-500 hover:to-violet-600 text-slate-950 text-xs font-extrabold rounded-xl transition duration-300 shadow-md shadow-cyan-500/15"
            >
              Download CV <TbDownload size={16} className="stroke-[2.5]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}