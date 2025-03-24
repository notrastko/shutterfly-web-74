
import { useState } from "react";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Camera, User, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceColumn from "@/components/ServiceColumn";

const Services = () => {
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation */}
      <Navbar />
      
      <header className="h-[40vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/faf12523-b040-4ead-8af2-3c2f518e7d43.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <Motion animation="slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-visby font-medium text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-montserrat">
              Professional photography, videography, and media solutions
            </p>
          </Motion>
        </div>
      </header>
      
      <main>
        {/* Services Overview Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-visby font-medium mb-6">Comprehensive Media Solutions</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-montserrat">
                  We provide a wide range of professional photography, videography, and media services tailored to meet your specific needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <ServiceColumn
                  title="Wedding Photography & Videography"
                  description="Capturing your special day with artistic elegance and attention to detail."
                  icon={Camera}
                  imageSrc="/lovable-uploads/321a1df9-5fab-4873-8bca-36f4acb9c7a3.png"
                  linkTo="/wedding-photography"
                  delay={0}
                />
                
                <ServiceColumn
                  title="Portrait Photography"
                  description="Professional portraits that tell your unique story and highlight your personality."
                  icon={User}
                  imageSrc="/lovable-uploads/73707922-238c-4a3e-9f30-37e8c22c957a.png"
                  linkTo="/portrait-photography"
                  delay={100}
                />
                
                <ServiceColumn
                  title="Media Production"
                  description="Comprehensive media solutions to elevate your brand and engage your audience."
                  icon={Film}
                  imageSrc="/lovable-uploads/9c337902-b9fe-4fea-9283-21849005239c.png"
                  linkTo="/media-production"
                  delay={200}
                />
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Wedding Services Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-visby font-medium mb-6">Wedding Photography & Videography</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    Our wedding photography services capture the essence and emotion of your special day. We blend traditional portraiture with a candid, documentary approach to create a comprehensive story of your wedding.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    Each wedding package is customizable to your specific needs, whether you're planning an intimate gathering or a grand celebration.
                  </p>
                  <div className="mt-8">
                    <Link to="/wedding-photography">
                      <Button>Explore Wedding Services</Button>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/489c86bb-d8c9-4499-b220-dfc771595e9d.png" 
                      alt="Wedding photography" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/66dc9f9c-5212-46cf-8fc6-d8bacf7dc632.png" 
                      alt="Wedding couple" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Portrait Services Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-visby font-medium mb-6">Portrait Photography</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/997b78eb-80c3-4549-9483-612d424e118a.png" 
                      alt="Portrait photography" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/4a7dff29-3fbf-4493-b1b5-e25a528fdabb.png" 
                      alt="Professional portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    Our portrait photography services include professional headshots, family portraits, and creative lifestyle sessions—delivering images that reflect your personality and essence.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    From studio sessions to natural outdoor settings, each shoot is tailored to match your vision and requirements.
                  </p>
                  <div className="mt-8">
                    <Link to="/portrait-photography">
                      <Button>Explore Portrait Services</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Media Production Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-visby font-medium mb-6">Media Production</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    We help brands and businesses connect with their target audience through visual media and storytelling. Our comprehensive media production services include commercial production, corporate videos, and real estate media.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 font-montserrat">
                    Our expertise spans ideation to execution ensuring maximum impact for your brand or business.
                  </p>
                  <div className="mt-8">
                    <Link to="/media-production">
                      <Button>Explore Media Services</Button>
                    </Link>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/5d09db14-6766-49d9-90fe-7e75d6dfd14f.png" 
                    alt="Media production" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-visby font-medium mb-6">Ready to work with us?</h2>
              <p className="text-lg text-muted-foreground mb-8 font-montserrat">
                Contact us today to discuss your photography, videography, or media production needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">Contact Us</Button>
                <Button variant="outline" size="lg">View Portfolio</Button>
              </div>
            </Motion>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
