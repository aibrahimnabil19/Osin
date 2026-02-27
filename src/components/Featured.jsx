// import React from 'react'
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardAction,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import Image from 'next/image'

// const Featured = () => {
//     return (
//         <main className="bg-[#FAFAFB] py-8">
//             <section className="mx-auto max-w-5xl">
//                 <Card className="relative  w-full max-w-sm pt-0">
//                     <div className="absolute inset-0 z-30 aspect-video" />
//                     <Image
//                         src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80"
//                         alt="Event cover"
//                         className="relative z-20 aspect-video w-full object-cover rounded-xl"
//                         width={500}
//                         height={500}
//                     />
//                     <CardHeader>
//                         <CardAction>
//                             <Badge variant="secondary">Featured</Badge>
//                         </CardAction>
//                         <CardTitle>Design systems meetup</CardTitle>
//                         <CardDescription>
//                             A practical talk on component APIs, accessibility, and shipping
//                             faster.
//                         </CardDescription>
//                     </CardHeader>
//                     <CardFooter>
//                         <Button className="w-full">View Event</Button>
//                     </CardFooter>
//                 </Card>
//             </section>
//         </main>
//     )

// }

// export default Featured
'use client';
import React, { useState, useEffect } from 'react';
import { pets } from "../../data"; 
import Image from 'next/image';

const Featured = () => {
  // 1. Initialize the random pets directly in state using a "lazy initializer"
  // The arrow function ensures this calculation only happens ONCE.
  const [featuredPets] = useState(() => {
    const shuffledPets = [...pets].sort(() => 0.5 - Math.random());
    return shuffledPets.slice(0, 4);
  });

  // 2. Create a simple flag to track if the component has mounted in the browser
  const [isMounted, setIsMounted] = useState(false);

  // 3. Flip the flag to true once the browser takes over. 
  // Notice we aren't setting any pet data here anymore!
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // 4. Prevent the server from rendering the pets to avoid hydration errors
  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-[#575350] mb-8 text-center">
        Meet Our Featured Pets
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredPets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            
            <Image 
              src={pet.image} 
              alt={pet.name} 
              className="w-full aspect-video object-cover"
              width={500}
              height={500}
            />
            
            <div className="p-4 flex flex-col grow">
              <h3 className="text-xl font-bold text-[#575350]">{pet.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{pet.breed} • {pet.age}</p>
              <p className="text-[#575350] text-sm line-clamp-2 mb-4">
                {pet.description}
              </p>
              
              <div className="mt-auto">
                <button className="w-full bg-[#E0C1C5] text-[#575350] font-semibold py-2 rounded hover:bg-[#d4aeb2] transition-colors">
                  Meet {pet.name}
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;