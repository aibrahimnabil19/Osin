import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  return (
    <main className="bg-[#FFFDF9] py-16">
      <section className="max-w-5xl mx-auto sm:px-6">
        <h2 className="text-3xl font-bold text-[#575350] mb-12 text-center">
          What Our Adopters Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#F5F5F5] rounded-xl p-6 relative pb-20 overflow-hidden">
            <p className="text-gray-700 leading-relaxed italic">
             Adopting from Ọsin was the best decision we made! The process was incredibly smooth, and we found our perfect furry friend in no time. The platform is so easy to use.
            </p>
            <div className="absolute left-0 bottom-0 bg-[#FFFDF9] w-[85%] sm:w-3/4 flex items-center gap-3 px-5 py-3 rounded-tr-xl shadow-sm">
               <Image 
                src="https://i.pravatar.cc/150?u=david" 
                alt="David K." 
                className="w-10 h-10 rounded-full object-cover border-2 border-[#F5F5F5]"
                width={40}
                height={40}
             ></Image>
              <span className="text-sm font-semibold text-[#575350]">Sarah M.</span>
            </div>
          </div>

          
          <div className="bg-[#F5F5F5] rounded-xl p-6 relative pb-20 overflow-hidden">
            <p className="text-gray-700 leading-relaxed italic">
             I was looking for an older cat, and the detailed profiles made it so simple to find a match. Whiskers settled in immediately. Thank you for making this possible!
            </p>
            <div className="absolute left-0 bottom-0 bg-[#FFFDF9] w-[85%] sm:w-3/4 flex items-center gap-3 px-5 py-3 rounded-tr-xl shadow-sm">
              <Image 
                src="https://i.pravatar.cc/150?u=david" 
                alt="David K." 
                className="w-10 h-10 rounded-full object-cover border-2 border-[#F5F5F5]"
                width={40}
                height={40}
             ></Image>
              <span className="text-sm font-semibold text-[#575350]">David K.</span>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-xl p-6 relative pb-20 overflow-hidden">
            <p className="text-gray-700 leading-relaxed italic">
             As a first-time pet owner, I appreciated how transparent and supportive the whole experience was. Meeting Bella was love at first sight. Highly recommend!
            </p>
            <div className="absolute left-0 bottom-0 bg-[#FFFDF9] w-[85%] sm:w-3/4 flex items-center gap-3 px-5 py-3 rounded-tr-xl shadow-sm">
              <Image 
                src="https://i.pravatar.cc/150?u=david" 
                alt="David K." 
                className="w-10 h-10 rounded-full object-cover border-2 border-[#F5F5F5]"
                width={40}
                height={40}
             ></Image>
              <span className="text-sm font-semibold text-[#575350]">Emily R.</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Testimonials;