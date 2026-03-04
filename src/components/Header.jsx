'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#E0C1C5] absolute top-0 left-0 right-0 z-30 md:z-10">
      <section className="max-w-5xl mx-auto flex justify-between items-center font-brand font-light text-[#575350] px-4 sm:px-6">
        
        <Link href="/">
          <Image
            alt="Logo"
            src="/osin.png"
            width={585}
            height={400}
            className="w-14 sm:w-18"
          />
        </Link>

        <nav className="hidden md:flex gap-6 font-semibold ">
          <Link href="/" className="hover:text-[#DA507E] hover:underline">Home</Link>
          <Link href="/pets" className="hover:text-[#DA507E] hover:underline">Adopt a Pet</Link>
          <Link href="/catalogue" className="hover:text-[#DA507E] hover:underline">Favourites</Link>
          <Link href="/about" className="hover:text-[#DA507E] hover:underline">Applications</Link>
          <Link href="/contact" className="hover:text-[#DA507E] hover:underline">Contact Us</Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#575350] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#575350] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#575350] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </section>

      {menuOpen && (
        // fixed so it sits above everything (hero) and centered with left-1/2 -translate-x-1/2
        <div className="md:hidden fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
          <nav className="bg-white w-[90vw] max-w-sm mx-auto rounded-xl shadow-lg border border-[#e6d0d4] py-4 flex flex-col items-center gap-2 font-semibold text-[#575350]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Adopt a Pet</Link>
            <Link href="/catalogue" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Favourites</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Applications</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header