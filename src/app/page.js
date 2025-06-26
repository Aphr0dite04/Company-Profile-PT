import HeroSection from "./components/HeroSection";

import EmailSection from "./components/EmailSection";

import TestimonialSection from "./components/TestimonialSection";
import AboutCompany from "./components/AboutCompany";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
  
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutCompany />
        <TestimonialSection />
        <EmailSection />
      </div>
      
    </main>
  );
}