
import React from "react";
import { Motion } from "@/components/ui/motion";

const WeddingHero = () => {
  return (
    <header className="h-[60vh] relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/faf12523-b040-4ead-8af2-3c2f518e7d43.png')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
        <Motion animation="slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-visby font-medium text-white mb-4">
            Wedding Photography & Videography
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-montserrat">
            Capturing your special moments with artistic elegance
          </p>
        </Motion>
      </div>
    </header>
  );
};

export default WeddingHero;
