
import React from "react";
import { Motion } from "@/components/ui/motion";

const ProcessSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Initial Consultation</h3>
              <p className="text-muted-foreground">We meet to discuss your vision, preferences, and wedding details to create a personalized plan for your day.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Pre-Wedding Planning</h3>
              <p className="text-muted-foreground">We'll create a detailed timeline, visit locations, and coordinate with your other vendors to ensure everything runs smoothly.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Your Wedding Day</h3>
              <p className="text-muted-foreground">We capture your day with our signature style, focusing on authentic moments and beautiful details.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">After your wedding, we carefully edit your photos and deliver a beautiful collection of memories that will last a lifetime.</p>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ProcessSection;
