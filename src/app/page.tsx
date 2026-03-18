import { HeroSection } from "@/features/hero";
import { PricingSection } from "@/features/pricing";
import { GallerySection } from "@/features/gallery";
import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PricingSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
