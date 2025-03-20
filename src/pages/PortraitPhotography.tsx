import { useState } from "react";
import { Link } from "react-router-dom";
import { Motion, ParallaxImage } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Camera, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PortraitPhotography = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation */}
      <Navbar />
      
      <header className="h-[60vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <Motion animation="slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
              Portrait Photography
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Professional portraits that tell your unique story
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
                    Our portrait photography focuses on capturing authentic expressions and genuine personalities. Whether for professional headshots, family portraits, or personal branding, we create images that reflect who you truly are.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We guide you through the entire process, from planning your session to selecting the perfect images, ensuring a comfortable and enjoyable experience.
                  </p>
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                    alt="Professional portrait" 
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
                      src={`https://images.unsplash.com/photo-${1581456495146 + item * 100000}-65a71b2c8e52?auto=format&fit=crop&q=80`} 
                      alt={`Portrait portfolio ${item}`} 
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
        
        {/* Packages Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">Our Packages</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Select the portrait package that best fits your needs and style.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Package 1 */}
                <PackageCard
                  title="Basic"
                  price="$250"
                  description="Perfect for professional headshots"
                  features={[
                    "30-minute session",
                    "1 location",
                    "2 outfit changes",
                    "5 edited digital images",
                    "Online gallery"
                  ]}
                  isSelected={selectedPackage === "basic"}
                  onClick={() => setSelectedPackage("basic")}
                />
                
                {/* Package 2 */}
                <PackageCard
                  title="Signature"
                  price="$450"
                  description="Our most popular portrait session"
                  features={[
                    "1-hour session",
                    "2 locations",
                    "3 outfit changes",
                    "15 edited digital images",
                    "Online gallery",
                    "Print release"
                  ]}
                  isSelected={selectedPackage === "signature"}
                  onClick={() => setSelectedPackage("signature")}
                  highlighted
                />
                
                {/* Package 3 */}
                <PackageCard
                  title="Premium"
                  price="$750"
                  description="Complete portrait experience"
                  features={[
                    "2-hour session",
                    "Multiple locations",
                    "Unlimited outfit changes",
                    "25 edited digital images",
                    "Online gallery",
                    "Print release",
                    "Photo album",
                    "Hair and makeup consultation"
                  ]}
                  isSelected={selectedPackage === "premium"}
                  onClick={() => setSelectedPackage("premium")}
                />
              </div>
              
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-6">
                  Family portraits, group sessions, and specialized needs are also available.
                </p>
                <Button>Request Custom Quote</Button>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard
                  quote="I was nervous about my professional headshots, but they made me feel so comfortable. The photos are exactly what I needed for my business."
                  author="Thomas Wright"
                  role="Marketing Director"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                />
                
                <TestimonialCard
                  quote="Our family portraits turned out beautifully. They captured our personalities perfectly and were great with our kids."
                  author="Jennifer Adams"
                  role="Family Portrait Client"
                  image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                />
                
                <TestimonialCard
                  quote="I needed portrait photography for my personal brand, and Omilia Visuals delivered exactly what I was looking for. Professional, creative, and attentive to detail."
                  author="Mark Johnson"
                  role="Entrepreneur"
                  image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                />
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to book your session?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to schedule your portrait photography session.
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

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isSelected: boolean;
  onClick: () => void;
  highlighted?: boolean;
}

const PackageCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isSelected, 
  onClick,
  highlighted = false 
}: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "border rounded-lg p-6 transition-all duration-300 cursor-pointer relative",
        highlighted ? "border-primary shadow-lg" : "border-gray-200",
        isSelected ? "ring-2 ring-primary ring-offset-2" : ""
      )}
      onClick={onClick}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
        <Camera className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="text-2xl font-bold mb-2">{price}</div>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={highlighted ? "default" : "outline"} className="w-full">
        Select Package
      </Button>
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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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

export default PortraitPhotography;
