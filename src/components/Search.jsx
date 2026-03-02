'use client';
import React, { useRef, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  return (
    <main>
      <section className="max-w-5xl mx-auto py-16">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          {/* Heading */}
          <div className="mb-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">
              Search & Adopt
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Find a furry friend by name, type, or breed.
            </p>
          </div>

          {/* Form */}
          <form
            role="search"
            action="/search-results"
            method="GET"
            className="flex flex-col md:flex-row items-center gap-4"
            onSubmit={() => {}}
          >
            
            <label htmlFor="pet-search" className="sr-only">
              Search pets by name, type, or breed
            </label>

        
            <div className="relative w-full md:w-3/4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>

              <input
                ref={inputRef}
                id="pet-search"
                name="query"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, type, or breed..."
                required
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
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-[#E0C1C5] text-[#575350] font-medium shadow hover:bg-[#caaeb1] focus:outline-none focus:ring-2 focus:ring-[#a89194] transition"
                onClick={(e) => {
                }}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                Find a Friend
              </button>
            </div>
          </form>

          <div className="mt-4 text-sm text-gray-500">
            Tip: try searching for{" "}
            <span className="font-medium text-gray-700">golden retriever</span>{" "}
            or a name like{" "}
            <span className="font-medium text-gray-700">Milo</span>.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;