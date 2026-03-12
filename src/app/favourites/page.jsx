// app/favourites/page.jsx
"use client";
import React from "react";
import PetCollections from "@/components/PetCollections";
import useFavorites from "@/utils/useFavorites";
import pets from "@/data"; // adjust path if needed
import Link from "next/link";

const FavouritesPage = () => {
  const { favourites, clearAll } = useFavorites();

  const favouritePets = favourites
    .map((id) => pets.find((p) => String(p.id) === String(id)))
    .filter(Boolean);

  return (
    <main className="pt-32 max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Favourites</h1>
        <div className="flex gap-2">
          <Link href="/" className="px-3 py-1 rounded bg-gray-100">Back to catalogue</Link>
          <button
            onClick={clearAll}
            className="px-3 py-1 rounded bg-red-100 hover:bg-red-200"
            disabled={favourites.length === 0}
          >
            Clear all
          </button>
        </div>
      </div>

      {!favouritePets.length ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="mb-4">No favourites yet. Add some from the catalogue ❤️</p>
          <Link href="/" className="underline">Go to catalogue</Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favouritePets.map((pet) => (
            <PetCollections pets={pet} key={pet.id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;