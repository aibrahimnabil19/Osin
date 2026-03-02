import Image from 'next/image'
import React from 'react'

const Adoption = () => {
  return (
    <main className="bg-[#FFF8F0] max-w-full flex justify-between items-center">
        {/* <section className=""> */}
            <Image
            src="/catwoman.jpg"
            width={500}
            height={500}
            alt="Woman with cat"
            className="w-2/5"
            >
            </Image>

            <div className="mr-16">
                <h2 className="text-3xl font-bold text-[#575350] mb-4">
                    How Adoption Works
                </h2>
                <p className="text-lg text-[#575350] mb-6">
                    1. Browse our selection of adorable pets and find your perfect match.
                </p>
                <p className="text-lg text-[#575350] mb-6">
                    2. Fill out a simple application to tell us about your home and lifestyle.
                </p>
                <p className="text-lg text-[#575350] mb-6">
                    3. Meet your new furry friend and start your journey together!
                </p>
            </div>

        {/* </section> */}

    </main>
  )
}

export default Adoption