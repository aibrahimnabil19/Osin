import PetCollections from '@/components/PetCollections'
import Header from '@/components/Header'
import React from 'react'
import pets from '../../../data'


const CataloguePage = () => {
  return (
    <main className="pt-32 max-w-6xl mx-auto p-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <PetCollections pets={pet} key={pet.id}/>
        ))}
      </div>
    </main>
  )
}

export default CataloguePage