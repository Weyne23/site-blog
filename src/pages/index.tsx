import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection/>
        <FeatureSection />
      </article>
    </>
  );
}
