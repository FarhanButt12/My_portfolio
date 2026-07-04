import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import AvailabilityBanner from './components/AvailabilityBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './utils/CursorAnimation'
import ResumePrintView from './components/ResumePrintView'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-300'>
      {/* Dynamic Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Screen Sections (hidden during print) */}
      <div className="print:hidden">
        <Home />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <AvailabilityBanner />
        <Contact />
        <Footer />
      </div>

      {/* Printable CV View (hidden on screen, visible only during print) */}
      <ResumePrintView />
    </div>
  )
}
