
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FutureOfMoney } from "@/components/FutureOfMoney";
import { BackedTransparent } from "@/components/BackedTransparent";
import { WidespreadAdoption } from "@/components/WidespreadAdoption";
import { TetherForSections } from "@/components/TetherForSections";
import { FAQSection } from "@/components/FAQSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FutureOfMoney />
        <BackedTransparent />
        <WidespreadAdoption />
        <TetherForSections />
        <FAQSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
