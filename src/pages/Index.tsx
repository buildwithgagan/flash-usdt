
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FutureOfMoney } from "@/components/FutureOfMoney";
import { BackedTransparent } from "@/components/BackedTransparent";
import { WidespreadAdoption } from "@/components/WidespreadAdoption";
import { TetherForSections } from "@/components/TetherForSections";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <div className={`transition-all duration-1000 transform ${scrollPosition > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <FutureOfMoney />
        </div>
        <div className={`transition-all duration-1000 transform ${scrollPosition > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <BackedTransparent />
        </div>
        <div className={`transition-all duration-1000 transform ${scrollPosition > 800 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <WidespreadAdoption />
        </div>
        <div className={`transition-all duration-1000 transform ${scrollPosition > 1200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <TetherForSections />
        </div>
        <div className={`transition-all duration-1000 transform ${scrollPosition > 1600 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
