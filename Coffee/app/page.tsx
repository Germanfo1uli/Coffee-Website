import Hero from "@/app/components/heroSection/Hero";
import BestSellers from "@/app/components/bestSeller/BestSellers";
import AboutSection from "@/app/components/aboutSection/AboutSection";
import FlavorGuide from "@/app/components/favorGuideSection/FlavorGuide";
import BlogSection from "@/app/components/blogSection/BlogSection";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <BestSellers />
            <AboutSection />
            <FlavorGuide />
            <BlogSection />
            <Footer />
        </>
    );
}