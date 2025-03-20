
import React from "react";
import { Motion, ParallaxImage } from "@/components/ui/motion";

const ApproachSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We believe your wedding day is one of life's most significant moments. Our approach combines documentary storytelling with fine art imagery to create a complete narrative of your celebration.
              </p>
              <p className="text-lg text-muted-foreground">
                With a careful eye for detail and emotion, we capture both the grand moments and intimate details that make your day special. Our unobtrusive style ensures we're always present without being intrusive.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1537907510278-a4d36d35c383?auto=format&fit=crop&q=80" 
                alt="Wedding couple" 
                className="w-full h-full"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ApproachSection;
