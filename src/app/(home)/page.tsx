import HeroSection from "./(components)/HeroSection";
import { TeamsSection } from "./(components)/TeamSection";
import { TestimonialSection } from "./(components)/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamsSection />
      <TestimonialSection />
    </main>
  );
}
