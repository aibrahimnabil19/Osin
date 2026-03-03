'use client';
import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "How do I adopt a pet?",
    answer:
      "Browse our available pets, fill out an application, and schedule a meet-and-greet! The whole process takes about a week from start to finish.",
    icon: "🐾",
  },
  {
    id: 2,
    question: "What is the adoption process?",
    answer:
      "Our adoption process includes an application review, a meet-and-greet with the pet, and a final approval before bringing your new companion home. We're here every step of the way.",
    icon: "📋",
  },
  {
    id: 3,
    question: "Can I return a pet if it doesn't work out?",
    answer:
      "We understand that sometimes things don't work out. Please contact us within 30 days of adoption if you need to return your pet, and we'll do our best to assist you — no judgment, ever.",
    icon: "🤝",
  },
  {
    id: 4,
    question: "Are the animals vaccinated and healthy?",
    answer:
      "Absolutely. Every animal in our care receives a full health exam, up-to-date vaccinations, and is spayed or neutered before adoption. You'll receive a complete health record on adoption day.",
    icon: "💉",
  },
  {
    id: 5,
    question: "What does adoption cost?",
    answer:
      "Adoption fees vary by animal and age, typically ranging from $50–$200. This covers vaccinations, microchipping, and spay/neuter. It's a small price for a lifetime of love.",
    icon: "🏷️",
  },
];

const FAQS = () => {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-screen bg-[#FBF5EA] py-20 px-6 relative overflow-hidden">
      {/* decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #F9D98A44 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #F4A26144 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C97B3A] bg-[#FDEBD0] px-4 py-1 rounded-full mb-5">
          Got questions?
        </span>

        <h2 className="font-serif text-[#3B2F1E] font-extrabold leading-tight mb-4 text-[40px] md:text-[56px] lg:text-[68px]">
          We have
          <br />
          <em className="not-italic font-light text-[#C97B3A]">answers.</em>
        </h2>

        <p className="text-sm md:text-base text-[#9E8972] font-light max-w-md mb-14">
          Everything you need to know about finding your perfect furry companion and bringing them home.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-shadow transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'border-[#C97B3A] shadow-[0_8px_30px_rgba(201,123,58,0.08)]' : 'border-[#EDE3D4]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left flex items-center gap-4 p-5 hover:bg-[#FFFAF4] focus:outline-none"
                >
                  <span
                    className={`w-11 h-11 flex items-center justify-center rounded-lg text-xl flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-[#FDEBD0]' : 'bg-[#FBF5EA]'
                    }`}
                    aria-hidden
                  >
                    {faq.icon}
                  </span>

                  <span className="flex-1 font-serif font-semibold text-[#3B2F1E] text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#C97B3A] border-[#C97B3A] text-white rotate-180'
                        : 'border-[#EDE3D4] text-[#9E8972]'
                    }`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {/* answer */}
                <div
                  className={`px-0 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[400px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 sm:px-6 md:px-6 lg:px-6 pb-6">
                    <p className="pl-0 sm:pl-6 md:pl-20 pr-6 text-sm text-[#7A6A58] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQS;