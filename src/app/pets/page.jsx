import PetCollections from '@/components/PetCollections'
import React from 'react'
import pets from '../../../data'



const CataloguePage = () => {
  // console.log(pets)
  return (
    <main className="pt-32 max-w-6xl mx-auto p-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          // <petCard
          //   key={o.id}
          //   title={o.title}
          //   description={o.description}
          //   image={o.image}
          //   category={o.category}
          //   price={o.price}
          // />
          <PetCollections pets={pet} key={pet.id}/>
        ))}
        {/* console.log(pets) */}
      </div>
    </main>
  )
}

export default CataloguePage