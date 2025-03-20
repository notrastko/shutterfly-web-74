import { useState } from "react";
import { Link } from "react-router-dom";
import { Motion, ParallaxImage } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Camera, Check, Heart, VideoIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

const WeddingPhotography = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation */}
      <Navbar />
      
      <header className="h-[60vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <Motion animation="slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
              Wedding Photography & Videography
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Capturing your special moments with artistic elegance
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
        
        {/* How it Works Section */}
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
        
        {/* The Team Section */}
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
        
        {/* Testimonials Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Testimonials</h2>
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
        
        {/* Featured Section */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <Motion animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center">Featured Weddings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                      alt="Beach wedding" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Jessica & Mark</h3>
                    <p className="text-sm text-muted-foreground mb-4">Beachfront Ceremony | Malibu, CA</p>
                    <p className="text-muted-foreground mb-4">A stunning sunset ceremony on the shores of Malibu, with elegant details and heartfelt moments throughout the day.</p>
                    <Button variant="outline" size="sm">View Gallery</Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80" 
                      alt="Garden wedding" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Rachel & Daniel</h3>
                    <p className="text-sm text-muted-foreground mb-4">Botanical Garden | Portland, OR</p>
                    <p className="text-muted-foreground mb-4">An intimate garden wedding filled with lush greenery, personal touches, and a joyful celebration with close family and friends.</p>
                    <Button variant="outline" size="sm">View Gallery</Button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <Button>See More Featured Weddings</Button>
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
                      src={`https://images.unsplash.com/photo-${1537633552985 + item * 100000}-df8429e8048b?auto=format&fit=crop&q=80`} 
                      alt={`Wedding portfolio ${item}`} 
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
                Choose the perfect package for your special day, tailored to your unique needs and preferences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Package 1 */}
                <PackageCard
                  title="Essential"
                  price="$2,500"
                  description="Perfect for intimate ceremonies"
                  features={[
                    "6 hours of coverage",
                    "1 photographer",
                    "High-resolution images",
                    "Online gallery",
                    "100 edited photos"
                  ]}
                  icon={Camera}
                  isSelected={selectedPackage === "essential"}
                  onClick={() => setSelectedPackage("essential")}
                />
                
                {/* Package 2 */}
                <PackageCard
                  title="Premium"
                  price="$4,000"
                  description="Our most popular package"
                  features={[
                    "8 hours of coverage",
                    "2 photographers",
                    "Engagement session",
                    "High-resolution images",
                    "Online gallery",
                    "300 edited photos",
                    "Wedding album"
                  ]}
                  icon={Camera}
                  isSelected={selectedPackage === "premium"}
                  onClick={() => setSelectedPackage("premium")}
                  highlighted
                />
                
                {/* Package 3 */}
                <PackageCard
                  title="Luxe"
                  price="$6,500"
                  description="Complete photography & video"
                  features={[
                    "Full day coverage (10 hours)",
                    "2 photographers + videographer",
                    "Engagement session",
                    "Drone footage",
                    "5-minute highlight film",
                    "Full ceremony film",
                    "High-resolution images",
                    "500 edited photos",
                    "Premium wedding album"
                  ]}
                  icon={VideoIcon}
                  isSelected={selectedPackage === "luxe"}
                  onClick={() => setSelectedPackage("luxe")}
                />
              </div>
              
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-6">
                  All packages can be customized to fit your specific needs.
                </p>
                <Button>Request Custom Quote</Button>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Contact Section */}
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
      </main>
    </div>
  );
};

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  isSelected: boolean;
  onClick: () => void;
  highlighted?: boolean;
}

const PackageCard = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
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
        <Icon className="w-6 h-6 text-primary" />
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

export default WeddingPhotography;
