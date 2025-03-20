
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Featured Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                  alt="Beach wedding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Jessica & Mark</h3>
                <p className="text-sm text-muted-foreground mb-4">Beachfront Ceremony | Malibu, CA</p>
                <p className="text-muted-foreground mb-4">A stunning sunset ceremony on the shores of Malibu, with elegant details and heartfelt moments throughout the day.</p>
                <Button variant="outline" size="sm">View Gallery</Button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80" 
                  alt="Garden wedding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Rachel & Daniel</h3>
                <p className="text-sm text-muted-foreground mb-4">Botanical Garden | Portland, OR</p>
                <p className="text-muted-foreground mb-4">An intimate garden wedding filled with lush greenery, personal touches, and a joyful celebration with close family and friends.</p>
                <Button variant="outline" size="sm">View Gallery</Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button>See More Featured Weddings</Button>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default FeaturedSection;
