import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#030712] px-5 lg:px-28 py-6 flex items-center justify-between border-t border-slate-900 text-slate-400'>
      
      {/* TEXT LOGO */}
      <h2 className='text-lg lg:text-2xl font-extrabold tracking-widest cursor-pointer'>
        <span className='bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent'>FARHAN</span>
      </h2>

      {/* TEXT */}
      <div className='text-xs lg:text-sm text-right space-y-1 text-slate-500 font-mono'>
        <p>© 2026 Personal Portfolio</p>
        <p>Muhammad Farhan Mukhtar Butt</p>
      </div>

    </div>
  )
}