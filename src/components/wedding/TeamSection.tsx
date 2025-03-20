
import React from "react";
import { Motion } from "@/components/ui/motion";

const TeamSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&q=80" alt="Lead Photographer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium mb-2">Emily Johnson</h3>
              <p className="text-sm text-primary mb-2">Lead Photographer</p>
              <p className="text-muted-foreground">With over 10 years of experience, Emily's artistic vision and attention to detail create timeless images.</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" alt="Second Photographer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium mb-2">Michael Chen</h3>
              <p className="text-sm text-primary mb-2">Second Photographer</p>
              <p className="text-muted-foreground">Michael's documentary approach ensures no moment goes uncaptured, from candid emotions to spontaneous celebrations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" alt="Videographer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium mb-2">Sophia Rodriguez</h3>
              <p className="text-sm text-primary mb-2">Lead Videographer</p>
              <p className="text-muted-foreground">Sophia's cinematic approach to wedding films creates emotional narratives that tell your unique love story.</p>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default TeamSection;
