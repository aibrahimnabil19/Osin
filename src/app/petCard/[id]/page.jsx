import pets from '../../../../data'
import PetDetail from '@/components/PetDetail'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return pets.map((pet) => ({ id: String(pet.id) }))
}

export default async function PetPage({ params }) {
  const resolved = await params
  const id = String(resolved.id)

  const pet = pets.find((p) => String(p.id) === id)
  if (!pet) notFound()

  return <PetDetail pet={pet} />
}