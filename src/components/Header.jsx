'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#E0C1C5] absolute top-0 left-0 right-0 z-10">
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

        <nav className="hidden md:flex gap-6 font-semibold">
          <Link href="/">Adopt a Pet</Link>
          <Link href="/catalogue">Favourites</Link>
          <Link href="/about">Applications</Link>
          <Link href="/contact">Contact Us</Link>
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
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 font-semibold text-[#575350] border-t border-[#c9a8ae]">
          <Link href="/" onClick={() => setMenuOpen(false)}>Adopt a Pet</Link>
          <Link href="/catalogue" onClick={() => setMenuOpen(false)}>Favourites</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Applications</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      )}
    </header>
  )
}

export default Header