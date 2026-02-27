import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#E0C1C5] absolute top-0 left-0 right-0 z-10">
        <section className="max-w-5xl mx-auto flex justify-between items-center font-brand font-light text-[#575350]">
            <Link href={"/"}>
                <Image
                    alt=""
                    src={"/osin.png"
                    }
                    width={585}
                    height={400}
                    className="w-18"
                />
            </Link>

            <nav className="flex gap-4 font-semibold">
                <Link href={"/"}>Adopt a Pet</Link>
                <Link href={"/catalogue"}>Favourites</Link>
                <Link href={"/about"}>Applications</Link>
                <Link href={"/contact"}>Contact Us</Link>
            </nav>
            
        </section>
    </header>
  )
}

export default Header