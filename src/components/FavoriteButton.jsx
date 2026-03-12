"use client";
import React from "react";
import useFavorites from "@/utils/useFavorites";

const HeartIcon = ({ filled, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="inline-block"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21s-7.5-4.635-10-7.143C-0.1 10.357 1.6 5.5 6 5.5c2.1 0 3.3 1.05 4 2.05.7-1 1.9-2.05 4-2.05 4.4 0 6.1 4.857 4 8.357C19.5 16.365 12 21 12 21z"
      fill={filled ? "#DA507E" : "none"}
      stroke={filled ? "#DA507E" : "#575350"}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FavoriteButton = ({ petId, className = "" }) => {
  const { isFavourite, toggle } = useFavorites();
  const fav = isFavourite(petId);

  return (
    <button
      type="button"
      aria-pressed={fav}
      aria-label={fav ? "Remove from favourites" : "Add to favourites"}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggle(petId);
      }}
      className={[
        "inline-flex items-center justify-center rounded-full p-2 shadow-sm",
        "bg-white/90 dark:bg-gray-800/90 ring-1 ring-gray-200 hover:scale-105 transition-transform",
        "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#DA507E]",
        className,
      ].join(" ")}
      style={{ width: 40, height: 40 }}
    >
      <HeartIcon filled={fav} size={18} />
    </button>
  );
};

export default FavoriteButton;