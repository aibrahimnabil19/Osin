'use client';
import React, { useState, useEffect } from 'react';
import { pets } from "../../data";
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  const [featuredPets] = useState(() => {
    const shuffledPets = [...pets].sort(() => 0.5 - Math.random());
    return shuffledPets.slice(0, 4);
  });

  const [isMounted, setIsMounted] = useState(false);

  // Store liked pet IDs in a Set for O(1) checks.
  // We initialize from localStorage if available (optional).
  const [likedIds, setLikedIds] = useState(() => {
    try {
      if (typeof window === 'undefined') return new Set();
      const raw = localStorage.getItem('likedPets');
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Persist liked IDs to localStorage whenever they change (optional).
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('likedPets', JSON.stringify(Array.from(likedIds)));
      }
    } catch (err) {
      // ignore storage errors
    }
  }, [likedIds]);

  if (!isMounted) return null;

  const toggleLike = (petId) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(petId)) next.delete(petId);
      else next.add(petId);
      return next;
    });
  };

  return (
    <main className="bg-[#FAFAFB]">
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#575350] mb-8 text-center">
          Meet Our Featured Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPets.map((pet) => {
            const isThisLiked = likedIds.has(pet.id);
            return (
              <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  className="w-full aspect-video object-cover"
                  width={500}
                  height={500}
                />

                <div className="p-4 flex flex-col grow">
                  <div className="flex items-start">
                    <div>
                      <h3 className="text-xl font-bold text-[#575350]">{pet.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{pet.breed} • {pet.age}</p>
                      <p className="text-[#575350] text-sm line-clamp-2 mb-4">
                        {pet.description}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleLike(pet.id)}
                      className="text-2xl text-[#575350] hover:text-[#DA507E] transition-colors ml-3"
                      aria-pressed={isThisLiked}
                      aria-label={isThisLiked ? `Unlike ${pet.name}` : `Like ${pet.name}`}
                    >
                      <i className={`${isThisLiked ? 'fa-solid' : 'fa-regular'} fa-heart ${isThisLiked ? 'text-[#DA507E]' : ''}`}></i>
                    </button>
                  </div>

                  <div className="mt-auto">
                    <Link href={`/petCard/${pet.id}`} className="w-full">
                      <button className="w-full bg-[#DA507E] text-white font-semibold py-2 rounded hover:bg-[#d4aeb2] transition-colors">
                        Meet {pet.name}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Featured;