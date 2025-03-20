
import React from "react";
import { Motion } from "@/components/ui/motion";

const WeddingHero = () => {
  return (
    <header className="h-[60vh] relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
        <Motion animation="slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
            Wedding Photography & Videography
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Capturing your special moments with artistic elegance
          </p>
        </Motion>
      </div>
    </header>
  );
};

export default WeddingHero;
