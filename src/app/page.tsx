import { Hero } from "@/components/sections/Hero";
import { MissionQuote } from "@/components/sections/MissionQuote";
import { ServicesIntro } from "@/components/sections/ServicesIntro";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionQuote />
      <ServicesIntro />
      <TestimonialSlider />
    </>
  );
}
