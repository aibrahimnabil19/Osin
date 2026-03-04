import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
// import pets from "@/data"

const PetCollections = ({ pets }) =>{
  // console.log(pets.title)
  const { title, description, breed, image } = pets
  console.log(image)
//const PetCollections = ({ title, description, image, breed }) =>{
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video "/>
      <Image
        src={image}
        alt={description}
        className="relative z-20 aspect-video w-full object-cover dark:brightness-40 rounded-t-xl"
        height={400}
        width={400}
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{breed}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-[#DA507E]">Adopt Now</Button>
      </CardFooter>
    </Card>
    
  )
}
export default PetCollections