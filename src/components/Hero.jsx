import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="bg-[#E0C1C5] relative min-h-screen overflow-clip">
        <section className="max-w-5xl mx-auto flex items-center ">
            <div className="absolute left-16 -top-1/9 z-20">
                <Image 
                    src="/hero-image.png" 
                    alt="Hero Image" 
                    width={1200} 
                    height={600}
                    className="w-lg"
                >   
                </Image>
            </div>
            <div className="w-lg"></div>
            <div>
                <h1 className="text-5xl font-bold text-[#575350] mt-48">
                    Find Your <span className="text-chart-1">Perfect Companion</span>
                </h1>
                <p className="text-lg text-[#575350] mt-4">
                    Discover your new best friend and give them a loving home.
                </p>
                <button className="bg-[#575350] text-white px-6 py-3 rounded-full mt-6 hover:bg-[#4a4745] transition duration-300">Find a pet</button>
            </div>
        </section>

    </main>
  )
}

export default Hero