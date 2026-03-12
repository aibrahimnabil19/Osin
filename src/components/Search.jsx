"use client";
import React, { useRef, useState, useMemo } from "react";
import { pets } from "../../data";
import PetCollections from "@/components/PetCollections";

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const digits = priceStr.replace(/[^\d]/g, "");
  return Number(digits) || 0;
};

const unique = (arr) => [...new Set(arr)];

const Search = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const [typeFilter, setTypeFilter] = useState("all");
  const [breedFilter, setBreedFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const [showFilters, setShowFilters] = useState(true);

  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);

  const types = useMemo(() => unique(pets.map((p) => (p.type || "Unknown"))).sort(), []);
  const breeds = useMemo(() => unique(pets.map((p) => (p.breed || "Unknown"))).sort(), []);

  const filterPets = (items, q, type, breed, priceRange) => {
    const qNorm = (q || "").trim().toLowerCase();

    return items.filter((p) => {
      const textFields = [
        p.name,
        p.title,
        p.type,
        p.breed,
        p.description,
        Array.isArray(p.keywords) ? p.keywords.join(" ") : "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (qNorm && !textFields.includes(qNorm)) return false;
      if (type && type !== "all" && String(p.type).toLowerCase() !== String(type).toLowerCase()) return false;
      if (breed && breed !== "all" && String(p.breed).toLowerCase() !== String(breed).toLowerCase()) return false;

      const price = parsePrice(p.price);
      if (priceRange === "lt50" && price >= 50000) return false;
      if (priceRange === "50to150" && (price < 50000 || price > 150000)) return false;
      if (priceRange === "gt150" && price <= 150000) return false;

      return true;
    });
  };

  const runSearch = (opts = {}) => {
    const q = opts.query ?? query;
    const type = opts.type ?? typeFilter;
    const breed = opts.breed ?? breedFilter;
    const price = opts.price ?? priceFilter;

    const matched = filterPets(pets, q, type, breed, price);
    setResults(matched);
    setHasSearched(true);

    const el = document.getElementById("search-results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch();
  };

  const handleApplyFilters = () => {
    runSearch();
  };

  const clearFilters = () => {
    setQuery("");
    setTypeFilter("all");
    setBreedFilter("all");
    setPriceFilter("all");
    setResults([]);
    setHasSearched(false);
    inputRef.current?.focus();
  };

  return (
    <main>
      <section className="max-w-5xl mx-auto py-7">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <div className="mb-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Search & Adopt</h1>
            <p className="text-sm text-gray-500 mt-1">Find a furry friend by name, type, or breed. Use filters to narrow results.</p>
          </div>

          <form role="search" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col md:flex-row items-start">
              <div className="relative w-full md:w-3/4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </div>

                <input
                  ref={inputRef}
                  id="pet-search"
                  name="query"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, type, breed, or keyword..."
                  className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition"
                  aria-label="Search pets by name, type, or breed"
                  autoComplete="off"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="w-full md:w-auto flex gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#DA507E] text-white font-medium shadow hover:bg-[#caaeb1] focus:outline-none focus:ring-2 focus:ring-[#a89194] transition"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  Find a Friend
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  onClick={() => setShowFilters((s) => !s)}
                  aria-expanded={showFilters}
                  aria-controls="filter-panel"
                >
                  Filters
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 6h16M7 12h10M10 18h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            {showFilters && (
              <div id="filter-panel" className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Type</span>
                  <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2 rounded border">
                    <option value="all">All types</option>
                    {types.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Breed</span>
                  <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)} className="px-3 py-2 rounded border">
                    <option value="all">All breeds</option>
                    {breeds.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Price</span>
                  <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="px-3 py-2 rounded border">
                    <option value="all">All prices</option>
                    <option value="lt50">Less than ₦50,000</option>
                    <option value="50to150">₦50,000 — ₦150,000</option>
                    <option value="gt150">More than ₦150,000</option>
                  </select>
                </label>

                <div className="md:col-span-3 flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={handleApplyFilters}
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-4 text-sm text-gray-500">
            Tip: try searching for <span className="font-medium text-gray-700">golden retriever</span> or a name like <span className="font-medium text-gray-700">Milo</span>.
          </div>
        </div>

        <section id="search-results" className="mt-8">
          {!hasSearched ? (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-600">
              <p className="mb-2">No search performed yet.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Results</h2>
                <div className="text-sm text-gray-600">{results.length} result{results.length !== 1 ? "s" : ""}</div>
              </div>

              {!results.length ? (
                <div className="bg-white rounded-2xl p-8 text-center text-gray-600">No pets found. Try clearing filters or a broader search.</div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  {results.map((pet) => (
                    <div key={pet.id}>
                      <PetCollections pets={pet} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default Search;