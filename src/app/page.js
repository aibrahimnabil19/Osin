import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Search/>
      <Featured/>
    </div>
  );
}
