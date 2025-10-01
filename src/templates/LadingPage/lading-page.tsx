import { CallToAction, CustomerStorySection, FeatureSection, HeroSection, SupportSection } from "./section"

export const LadingPage = () => {
    return (
        <article className="flex flex-col gap-10 md:gap-20">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
        </article>
    )
}