import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PriceSection from "@/components/PriceSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <PriceSection />
      <ContactsSection scrollTo={scrollTo} />
    </div>
  );
};

export default Index;
