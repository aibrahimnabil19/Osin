'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pets', label: 'Adopt a Pet' },
  { href: '/favourites', label: 'Favourites' },
  { href: '/about', label: 'Applications' },
  { href: '/contact', label: 'Contact Us' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  const handleMouseEnter = (e) => {
    const navRect = navRef.current.getBoundingClientRect()
    const linkRect = e.currentTarget.getBoundingClientRect()
    setUnderlineStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    })
  }

  const handleMouseLeave = () => {
    setUnderlineStyle(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <header className="bg-[#E0C1C5] absolute top-0 left-0 right-0 z-30 md:z-10">
      <section className="max-w-5xl mx-auto flex justify-between items-center font-brand font-light text-[#575350] px-4 sm:px-6">

        <Link href="/">
          <Image alt="Logo" src="/osin.png" width={585} height={400} className="w-14 sm:w-18" />
        </Link>

        <nav ref={navRef} className="hidden md:flex gap-6 font-semibold relative pb-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#DA507E] transition-colors duration-200 active:text-[#DA507E]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </Link>
          ))}

          
          <span
            className="absolute bottom-0 h-0.5 bg-[#DA507E] transition-all duration-300 ease-in-out pointer-events-none"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.opacity,
            }}
          />
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
        <div className="md:hidden fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
          <nav className="bg-white w-[90vw] max-w-sm mx-auto rounded-xl shadow-lg border border-[#e6d0d4] py-4 flex flex-col items-center gap-2 font-semibold text-[#575350]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Home</Link>
            <Link href="/pets" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Adopt a Pet</Link>
            <Link href="/favourites" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Favourites</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Applications</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-2">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header