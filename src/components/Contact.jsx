import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/farhanbutt2402@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-[#020617] text-white lg:py-24 py-16 lg:px-28 px-5 border-t border-slate-900 bg-grid relative'
      id='contact'
    >
      <div className="container mx-auto relative z-10">
        
        {/* TITLE */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase block mb-1">
            Let's Connect
          </span>
          <h2 className='text-3xl lg:text-5xl font-bold font-sora'>
            Contact{" "}
            <span className='bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold'>
              Me
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-3 rounded"></div>
        </motion.div>

        <div className='flex justify-between items-stretch flex-col lg:flex-row gap-12'>

          {/* FORM */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            className='lg:w-1/2 w-full bg-slate-950 border border-slate-900 p-8 rounded-3xl shadow-xl'
          >
            <h3 className="text-base font-bold text-slate-200 mb-6 font-mono">Send a Message</h3>
            
            {status === 'success' && (
              <div className="mb-4 p-3.5 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-mono">
                ✓ Message sent successfully! Thank you for connecting.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3.5 bg-rose-950/40 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-mono">
                ✗ Error sending message. Please try again.
              </div>
            )}

            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  className='bg-[#0b0f19]/60 border border-slate-900/60 focus:border-cyan-400/80 px-4 py-3.5 rounded-xl w-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition duration-300'
                  type="text"
                  placeholder='Your Name'
                  required
                />
              </div>

              <div>
                <input
                  name="email"
                  className='bg-[#0b0f19]/60 border border-slate-900/60 focus:border-cyan-400/80 px-4 py-3.5 rounded-xl w-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition duration-300'
                  type="email"
                  placeholder='Your Email'
                  required
                />
              </div>

              <div>
                <input
                  name="subject"
                  className='bg-[#0b0f19]/60 border border-slate-900/60 focus:border-cyan-400/80 px-4 py-3.5 rounded-xl w-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition duration-300'
                  type="text"
                  placeholder='Subject (optional)'
                />
              </div>

              <div>
                <textarea
                  name="message"
                  className='bg-[#0b0f19]/60 border border-slate-900/60 focus:border-cyan-400/80 px-4 py-3.5 h-32 rounded-xl w-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 resize-none transition duration-300'
                  placeholder='Your Message...'
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-500 hover:to-violet-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition duration-300 text-xs tracking-wider uppercase disabled:opacity-50'
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            className='lg:w-1/2 flex flex-col justify-between py-2'
          >
            <div className="space-y-6">
              <h2 className='text-3xl lg:text-5xl font-bold leading-tight font-sora'>
                Let's discuss <br />
                <span className='bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold'>
                  your goals
                </span>
              </h2>

              <p className='text-slate-400 text-sm leading-relaxed max-w-lg'>
                I am available for mobile application and full-stack web development projects. 
                Whether you're looking to build an app from scratch, optimize a website, or discuss custom code integrations, 
                feel free to connect. Let's make it happen.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className='space-y-4 text-xs lg:text-sm mt-8 lg:mt-0 font-mono'>
              
              {/* EMAIL */}
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:farhanbutt2402@gmail.com"
                className='flex items-center gap-4 group text-slate-350 hover:text-cyan-400 transition duration-300'
              >
                <span className='border border-slate-900 bg-slate-950 p-3 rounded-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300 text-base'>
                  <IoMdMail />
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Email Address</span>
                  <span className="font-semibold text-slate-300 group-hover:text-slate-100">farhanbutt2402@gmail.com</span>
                </div>
              </motion.a>

              {/* PHONE */}
              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+923117769001"
                className='flex items-center gap-4 group text-slate-350 hover:text-cyan-400 transition duration-300'
              >
                <span className='border border-slate-900 bg-slate-950 p-3 rounded-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300 text-base'>
                  <FaPhoneAlt />
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Phone Number</span>
                  <span className="font-semibold text-slate-300 group-hover:text-slate-100">+92 311 7769001</span>
                </div>
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.linkedin.com/in/farhan-butt-b95ab7337/"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-4 group text-slate-350 hover:text-cyan-400 transition duration-300'
              >
                <span className='border border-slate-900 bg-slate-950 p-3 rounded-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300 text-base'>
                  <IoLogoLinkedin />
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase">LinkedIn Connection</span>
                  <span className="font-semibold text-slate-300 group-hover:text-slate-100">linkedin.com/in/farhan-butt-b95ab7337</span>
                </div>
              </motion.a>

              {/* GITHUB */}
              <motion.a
                whileHover={{ x: 4 }}
                href="https://github.com/FarhanButt12"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-4 group text-slate-350 hover:text-cyan-400 transition duration-300'
              >
                <span className='border border-slate-900 bg-slate-950 p-3 rounded-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300 text-base'>
                  <IoLogoGithub />
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 uppercase">GitHub Profile</span>
                  <span className="font-semibold text-slate-300 group-hover:text-slate-100">github.com/FarhanButt12</span>
                </div>
              </motion.a>

            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}