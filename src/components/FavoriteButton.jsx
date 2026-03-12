// components/FavoriteButton.jsx
"use client";
import React from "react";
import useFavorites from "@/utils/useFavorites";

const FavoriteButton = ({ petId, className = "" }) => {
  const { isFavourite, toggle } = useFavorites();
  const fav = isFavourite(petId);

  return (
    <button
      aria-pressed={fav}
      title={fav ? "Remove from favourites" : "Add to favourites"}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggle(petId);
      }}
      className={`inline-flex items-center justify-center rounded-full p-2 shadow-sm ${className}`}
    >
      {/* simple emoji heart, swap for an icon if you prefer */}
      <span style={{ fontSize: 18 }}>{fav ? "❤️" : "🤍"}</span>
    </button>
  );
};

export default FavoriteButton;