
import React from "react";
import { Motion, ParallaxImage } from "@/components/ui/motion";

const ApproachSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Love Stories, Told Beautifully</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                At Omilia Visuals, we believe every love story is unique and deserves to be captured with
                authenticity and heart. Specializing in documentary-style wedding photography and
                videography, we preserve the essence of your special day—the raw emotions, the
                fleeting moments, and every intricate detail—with artistry and excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                But we're more than just storytellers—we're partners in bringing your vision to life. From
                the first consultation to the final delivery, we're fully invested in your love story, ensuring
                you feel cared for, supported, and celebrated every step of the way.
              </p>
              <p className="text-lg text-muted-foreground">
                With Omilia Visuals, your wedding memories aren't just documented; they're cherished
                for a lifetime.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80" 
                alt="Wedding photography" 
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
