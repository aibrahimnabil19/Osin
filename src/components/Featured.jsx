"use client";
import React, { useState, useEffect } from "react";
import useFavorites from "@/utils/useFavorites";
import {pets} from '../../data'
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const [featuredPets] = useState(() => {
    const shuffledPets = [...pets].sort(() => 0.5 - Math.random());
    return shuffledPets.slice(0, 4);
  });

  const [isMounted, setIsMounted] = useState(false);
  const { isFavourite, toggle } = useFavorites();

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-[#FAFAFB]">
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#575350] mb-8 text-center">
          Meet Our Featured Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPets.map((pet) => {
            const isThisLiked = isFavourite(pet.id);

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
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#575350]">{pet.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{pet.breed} • {pet.age}</p>
                      <p className="text-[#575350] text-sm line-clamp-2 mb-4">{pet.description}</p>
                    </div>

                    <button
                      onClick={() => toggle(pet.id)}
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