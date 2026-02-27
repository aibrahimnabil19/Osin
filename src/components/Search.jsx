import React from 'react'

const Search = () => {
  return (
    <main>
        <section className="max-w-5xl mx-auto flex items-center py-16 justify-center">
            <form action="/search-results" method="GET" className="flex gap-6">
                <label htmlFor="pet-search">Search & Adopt</label>
                <input 
                    type="search" 
                    id="pet-search" 
                    name="query" 
                    placeholder="Search by name, type, or breed..." 
                    required
                    className="border border-black rounded-lg"
                />
                <button type="submit">Find a Friend</button>
            </form>
        </section>
    </main>
  )
}

export default Search