
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PortfolioSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-visby font-medium mb-10 text-center">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/321a1df9-5fab-4873-8bca-36f4acb9c7a3.png" 
                alt="Traditional wedding portrait" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/489c86bb-d8c9-4499-b220-dfc771595e9d.png" 
                alt="Couple by cabinet" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/66dc9f9c-5212-46cf-8fc6-d8bacf7dc632.png" 
                alt="Intimate moment" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/9c337902-b9fe-4fea-9283-21849005239c.png" 
                alt="Night photography" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/5d09db14-6766-49d9-90fe-7e75d6dfd14f.png" 
                alt="Couple in mirror frame" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg image-card">
              <img 
                src="/lovable-uploads/9bc8dc7b-5e42-4151-8cfe-ff3d434f5b73.png" 
                alt="Couple making heart hands" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
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
