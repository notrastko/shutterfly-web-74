
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to book your date?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to check availability for your wedding date.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Contact Us</Button>
            <Button variant="outline" size="lg">View More Examples</Button>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ContactSection;
