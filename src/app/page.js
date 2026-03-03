import Adoption from "@/components/Adoption";
import Blog from "@/components/Blog";
import FAQS from "@/components/FAQS";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Search/>
      <Featured/>
      <Adoption/>
      <Testimonials/>
      <Blog/>
      <FAQS/>
    </div>
  );
}
