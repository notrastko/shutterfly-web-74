import { useState } from "react";
import { Link } from "react-router-dom";
import { Motion, ParallaxImage } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Film, Check, Users, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MediaProduction = () => {
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation */}
      <Navbar />
      
      <header className="h-[60vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <Motion animation="slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
              Media Strategy & Production
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Elevate your brand with comprehensive media solutions
            </p>
          </Motion>
        </div>
      </header>
      
      <main>
        {/* Description Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">
                    We help brands and businesses connect with their target audience through visual media
                    and storytelling. We combine creativity with the science and psychology of perception and persuasion
                    (how people see, interpret, and respond to visuals) to create relatable visuals that turn
                    engagement into conversion.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our visuals aren't just aesthetically pleasing; they capture attention, engineer perception,
                    increase visibility, position your product or brand, build credibility, inspire connection,
                    and action.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our expertise spans ideation to execution ensuring maximum impact.
                  </p>
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1505740420928-5e0e321cd26e?auto=format&fit=crop&q=80" 
                    alt="Professional media production" 
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Our Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square overflow-hidden rounded-lg image-card">
                    <img 
                      src={`https://images.unsplash.com/photo-${1605810230434 + item * 10000}-7631ac76ec81?auto=format&fit=crop&q=80`} 
                      alt={`Media production portfolio ${item}`} 
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
        
        {/* Services Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">Our Services</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Explore our comprehensive media production services tailored to elevate your brand.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <ServiceCard
                  title="Commercial Production"
                  description="High-impact commercials that drive results"
                  icon={Film}
                />
                
                {/* Service 2 */}
                <ServiceCard
                  title="Corporate Videos"
                  description="Engaging videos for internal and external communications"
                  icon={Users}
                  highlighted
                />
                
                {/* Service 3 */}
                <ServiceCard
                  title="Real Estate Media"
                  description="Stunning visuals to showcase properties"
                  icon={Building}
                />
              </div>
              
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-6">
                  Custom solutions and specialized needs are also available.
                </p>
                <Button>Request Custom Quote</Button>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Clients Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Our Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ClientCard
                  name="Acme Corp"
                  logo="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80"
                  industry="Technology"
                />
                
                <ClientCard
                  name="Beta Industries"
                  logo="https://images.unsplash.com/photo-1616587894644-60359a586c84?auto=format&fit=crop&q=80"
                  industry="Manufacturing"
                />
                
                <ClientCard
                  name="Gamma Solutions"
                  logo="https://images.unsplash.com/photo-1541701496587-5a75505ef3e5?auto=format&fit=crop&q=80"
                  industry="Consulting"
                />
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to elevate your brand?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss your media production needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">Contact Us</Button>
                <Button variant="outline" size="lg">View More Examples</Button>
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  highlighted?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  highlighted = false 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "border rounded-lg p-6 transition-all duration-300 relative",
        highlighted ? "border-primary shadow-lg" : "border-gray-200"
      )}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <Button variant={highlighted ? "default" : "outline"} className="w-full">
        Learn More
      </Button>
    </div>
  );
};

interface ClientCardProps {
  name: string;
  logo: string;
  industry: string;
}

const ClientCard = ({ name, logo, industry }: ClientCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{industry}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaProduction;
