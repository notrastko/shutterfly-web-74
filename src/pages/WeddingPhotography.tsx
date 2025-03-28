
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeddingHero from "@/components/wedding/WeddingHero";
import ApproachSection from "@/components/wedding/ApproachSection";
import ProcessSection from "@/components/wedding/ProcessSection";
import TeamSection from "@/components/wedding/TeamSection";
import ClientTestimonialsSection from "@/components/wedding/ClientTestimonialsSection";
import FeaturedSection from "@/components/wedding/FeaturedSection";
import PortfolioSection from "@/components/wedding/PortfolioSection";
import PackagesSection from "@/components/wedding/PackagesSection";
import ContactSection from "@/components/wedding/ContactSection";

const WeddingPhotography = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <WeddingHero />
      
      <main>
        {/* Description Section */}
        <ApproachSection />
        
        {/* How it Works Section */}
        <ProcessSection />
        
        {/* The Team Section */}
        <TeamSection />
        
        {/* Client Testimonials Section */}
        <ClientTestimonialsSection />
        
        {/* Featured Section */}
        <FeaturedSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Packages Section */}
        <PackagesSection 
          selectedPackage={selectedPackage} 
          setSelectedPackage={setSelectedPackage} 
        />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WeddingPhotography;
