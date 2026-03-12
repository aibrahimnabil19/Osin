// utils/useFavorites.js
"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "favouritePets:v1";

export default function useFavorites() {
  const [favourites, setFavourites] = useState(() => {
    try {
      const raw = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {}
  }, [favourites]);

  const add = (id) => {
    setFavourites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const remove = (id) => {
    setFavourites((prev) => prev.filter((x) => x !== id));
  };

  const toggle = (id) => {
    setFavourites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const isFavourite = (id) => favourites.includes(id);

  const clearAll = () => setFavourites([]);

  return { favourites, add, remove, toggle, isFavourite, clearAll };
}