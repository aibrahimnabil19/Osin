import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="bg-[#E0C1C5] min-h-screen overflow-hidden">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 pt-20 md:pt-0">

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={1200}
            height={600}
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain drop-shadow-xl"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#575350] leading-tight">
            Find Your{' '}
            <span className="text-chart-1">Perfect Companion</span>
          </h1>
          <p className="text-lg text-[#575350] mt-4">
            Discover your new best friend and give them a loving home.
          </p>
          <button className="bg-[#575350] text-white px-6 py-3 rounded-full mt-6 hover:bg-[#4a4745] transition duration-300 self-center md:self-start">
            Find a pet
          </button>
        </div>

      </section>
    </main>
  )
}

export default Hero