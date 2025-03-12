
import { useState } from "react";
import { Link } from "react-router-dom";
import { Motion, ParallaxImage } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Film, Check, ChevronRight, ChevronLeft as LeftArrow } from "lucide-react";

const MediaProduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const clients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80" },
    { name: "Greenlife", logo: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80" },
    { name: "Madison", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80" },
    { name: "Apex", logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80" },
    { name: "BlueSky", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80" },
    { name: "Pinnacle", logo: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80" },
  ];
  
  const totalSlides = Math.ceil(clients.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  return (
    <div className="min-h-screen antialiased">
      <header className="h-[60vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <nav className="relative z-10 flex items-center justify-between p-6 md:p-10">
          <Link to="/" className="text-2xl font-medium text-white">
            Omilia Visuals
          </Link>
          
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/20"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </nav>
        
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
                    Our media strategy and production services go beyond simple photography to provide comprehensive visual solutions for brands and businesses. We help you craft a compelling visual identity that resonates with your audience.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    From concept development to final delivery, we work closely with you to ensure your media assets align with your brand's vision and goals. Our team combines creativity with strategic thinking to produce content that drives results.
                  </p>
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1533243585514-2e1ce25cf0c7?auto=format&fit=crop&q=80" 
                    alt="Media production" 
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
                      src={`https://images.unsplash.com/photo-${1605810230434 + item * 100000}-7631ac76ec81?auto=format&fit=crop&q=80`} 
                      alt={`Media portfolio ${item}`} 
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
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                  title="Brand Strategy"
                  description="Develop a cohesive visual identity and messaging framework that resonates with your target audience."
                  iconSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                />
                
                <ServiceCard
                  title="Content Creation"
                  description="Professional photography and videography for marketing, social media, and advertising campaigns."
                  iconSrc="https://images.unsplash.com/photo-1541555715243-f5eda01d9106?auto=format&fit=crop&q=80"
                />
                
                <ServiceCard
                  title="Video Production"
                  description="Full-service video production including concept development, filming, and post-production."
                  iconSrc="https://images.unsplash.com/photo-1601813655468-90669101469f?auto=format&fit=crop&q=80"
                />
                
                <ServiceCard
                  title="Commercial Photography"
                  description="High-quality product and commercial photography for e-commerce, catalogs, and advertising."
                  iconSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
                />
                
                <ServiceCard
                  title="Social Media Strategy"
                  description="Strategic planning and creation of visual content optimized for different social media platforms."
                  iconSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80"
                />
                
                <ServiceCard
                  title="Event Coverage"
                  description="Comprehensive photography and video coverage for corporate events, product launches, and conferences."
                  iconSrc="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80"
                />
              </div>
              
              <div className="text-center mt-12">
                <Button>Request a Consultation</Button>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Clients & Partners Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Our Clients & Partners</h2>
              
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {clients.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-40">
                              <img 
                                src={client.logo} 
                                alt={client.name} 
                                className="max-h-20 max-w-full opacity-80 hover:opacity-100 transition-opacity"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {totalSlides > 1 && (
                  <div className="flex items-center justify-center mt-8 gap-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prevSlide}
                      className="rounded-full"
                    >
                      <LeftArrow className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-2.5 h-2.5 rounded-full transition-colors",
                            currentSlide === index ? "bg-primary" : "bg-gray-300"
                          )}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={nextSlide}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard
                  quote="Omilia Visuals transformed our brand's visual identity. Their strategic approach and creative execution exceeded our expectations."
                  author="Robert Chen"
                  role="Marketing Director, TechCorp"
                  image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                />
                
                <TestimonialCard
                  quote="The content they created for our social media campaigns directly contributed to a 40% increase in engagement. Their team is professional, responsive, and incredibly talented."
                  author="Lisa Peterson"
                  role="Social Media Manager, Greenlife"
                  image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                />
                
                <TestimonialCard
                  quote="From concept to execution, working with Omilia was seamless. They understood our vision and brought it to life in ways we couldn't have imagined."
                  author="Marcus Williams"
                  role="CEO, BlueSky Ventures"
                  image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                />
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to elevate your brand?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss how we can help you achieve your media goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">Schedule a Consultation</Button>
                <Button variant="outline" size="lg">View Our Process</Button>
              </div>
            </Motion>
          </div>
        </section>
      </main>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const ServiceCard = ({ title, description, iconSrc }: ServiceCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img 
          src={iconSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">&ldquo;{quote}&rdquo;</p>
    </div>
  );
};

export default MediaProduction;
