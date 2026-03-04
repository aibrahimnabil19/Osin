'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';

const CollapsibleSection = ({ title, children, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#E8D5D8] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#FDF6F7] hover:bg-[#F5E8EA] transition-colors text-left"
      >
        <span className="flex items-center gap-2 font-semibold text-[#575350] text-sm tracking-wide uppercase">
          {icon}
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#DA507E] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 text-[#7A6F6A] text-sm leading-relaxed bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

const PetDetail = ({ pet }) => {
  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFB]">
        <p className="text-[#575350] text-lg">Pet not found.</p>
      </div>
    );
  }

  return (
    <main className=" bg-[#FAFAFB]">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#575350] hover:text-[#DA507E] transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          Back to pets
        </Link>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-sm border border-[#F0E4E6] overflow-hidden">
          <div className="flex flex-col md:flex-row">

            <div className="md:w-1/2 relative">
              <div className="relative h-72 md:h-full min-h-90">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#DA507E] font-bold text-sm px-3 py-1.5 rounded-full shadow">
                  {pet.price}
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col p-7 gap-5">

              <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#DA507E] bg-[#FDE8EE] px-3 py-1 rounded-full">
                <Tag size={11} />
                {pet.breed}
              </span>

              <div>
                <h1 className="text-4xl font-extrabold text-[#3A3633] leading-tight">
                  {pet.name}
                </h1>
                <p className="text-[#9E8E8A] text-sm mt-0.5">{pet.type}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#575350] bg-[#F5F0EF] px-3 py-1.5 rounded-full font-medium">
                  <Calendar size={12} />
                  {pet.age}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#575350] bg-[#F5F0EF] px-3 py-1.5 rounded-full font-medium">
                  {pet.gender === 'Female' ? '♀' : '♂'} {pet.gender}
                </span>
              </div>

              <p className="text-[#7A6F6A] leading-relaxed text-[15px]">
                {pet.description}
              </p>

              <div className="flex flex-col gap-3">
                <CollapsibleSection
                  title="Care Instructions"
                  icon={<span>🌿</span>}
                >
                  {pet.careInstructions}
                </CollapsibleSection>

                <CollapsibleSection
                  title="Pet Details"
                  icon={<span>🐾</span>}
                >
                  {pet.petDetail}
                </CollapsibleSection>
              </div>

              <div className="mt-auto pt-2">
                <button className="w-full bg-[#DA507E] hover:bg-[#c4446e] active:scale-[0.98] text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-[#DA507E]/20 text-sm tracking-wide">
                  Adopt {pet.name} · {pet.price}
                </button>
                <p className="text-center text-xs text-[#B0A09C] mt-3">
                  No commitment. Ask us anything first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PetDetail;