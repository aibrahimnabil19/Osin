// components/PetCollections.jsx
"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

const PetCollections = ({ pets }) => {
  // your data uses 'name' in the data file; fall back to title for compatibility
  const { id, name, title, description, breed, image } = pets;
  const displayTitle = title || name || "Unnamed";

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute right-3 top-3 z-40">
        <FavoriteButton petId={id} />
      </div>

      <div className="absolute inset-0 z-30 aspect-video" />
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
        <CardTitle>{displayTitle}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link className="w-full" href={`/petCard/${id}`}>
          <Button className="w-full bg-[#E0C1C5] text-[#575350] hover:bg-[#d4aeb2]">
            Adopt Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetCollections;