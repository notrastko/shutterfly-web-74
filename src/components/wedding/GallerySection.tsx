
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface GallerySectionProps {
  title?: string;
  description?: string;
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ 
  title = "Our Gallery", 
  description, 
  className 
}) => {
  return (
    <section className={cn("py-16 px-6 md:px-10 lg:px-20", className)}>
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          {title && <h2 className="text-3xl md:text-4xl font-visby font-medium mb-4 text-center">{title}</h2>}
          
          {description && (
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[400px] md:h-[500px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/321a1df9-5fab-4873-8bca-36f4acb9c7a3.png"
                  alt="Couple in traditional attire" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[400px] md:h-[500px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/4a7dff29-3fbf-4493-b1b5-e25a528fdabb.png"
                  alt="Couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[400px] md:h-[500px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/489c86bb-d8c9-4499-b220-dfc771595e9d.png"
                  alt="Couple by display cabinet" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[400px] md:h-[500px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/66dc9f9c-5212-46cf-8fc6-d8bacf7dc632.png"
                  alt="Intimate couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[400px] md:h-[500px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/73707922-238c-4a3e-9f30-37e8c22c957a.png"
                  alt="Couple embracing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/8470f746-d568-4e89-be76-ed86d1321316.png"
                  alt="Couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/9bc8dc7b-5e42-4151-8cfe-ff3d434f5b73.png"
                  alt="Couple making heart shape with hands" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/a40e6444-d841-441a-b4a0-1c40bda6f0a1.png"
                  alt="Couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-8 mt-6 md:mt-8">
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/5d09db14-6766-49d9-90fe-7e75d6dfd14f.png"
                  alt="Couple in mirror reflection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/9c337902-b9fe-4fea-9283-21849005239c.png"
                  alt="Silhouette of couple at night" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md rounded-lg group h-[300px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <img 
                  src="/lovable-uploads/997b78eb-80c3-4549-9483-612d424e118a.png"
                  alt="Couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default GallerySection;
