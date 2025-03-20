
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg image-card">
                <img 
                  src={`https://images.unsplash.com/photo-${1537633552985 + item * 100000}-df8429e8048b?auto=format&fit=crop&q=80`} 
                  alt={`Wedding portfolio ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline">View Full Gallery</Button>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default PortfolioSection;
