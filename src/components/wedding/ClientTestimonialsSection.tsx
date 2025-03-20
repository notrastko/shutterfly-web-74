
import React from "react";
import { Motion } from "@/components/ui/motion";
import TestimonialCard from "./TestimonialCard";

const ClientTestimonialsSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="They captured our day perfectly. The photos are beautiful and really tell the story of our wedding."
              author="Sarah & James"
              role="Bride & Groom"
              image="https://images.unsplash.com/photo-1516685125522-3c528b8046ee?auto=format&fit=crop&q=80"
            />
            
            <TestimonialCard
              quote="Working with Omilia was the best decision we made for our wedding. They were professional, creative, and made us feel so comfortable."
              author="Emily & Michael"
              role="Bride & Groom"
              image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80"
            />
            
            <TestimonialCard
              quote="The photos and video exceeded our expectations. They captured moments we didn't even realize were happening. Truly talented professionals."
              author="Jessica & David"
              role="Bride & Groom"
              image="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80"
            />
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
