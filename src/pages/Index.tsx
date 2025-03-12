
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceColumn from "@/components/ServiceColumn";
import { useEffect } from "react";
import { Camera, User, Film } from "lucide-react";
import { Motion } from "@/components/ui/motion";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-10 lg:px-20">
        <Motion animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized photography and media services tailored to your unique needs
            </p>
          </div>
        </Motion>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceColumn
            title="Wedding Photography"
            description="Capture your special day with timeless elegance and artistic vision."
            icon={Camera}
            imageSrc="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80"
            linkTo="/wedding-photography"
            delay={300}
          />
          
          <ServiceColumn
            title="Portrait Photography"
            description="Professional portraits that showcase personality and create lasting impressions."
            icon={User}
            imageSrc="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80"
            linkTo="/portrait-photography"
            delay={600}
          />
          
          <ServiceColumn
            title="Media Strategy & Production"
            description="Comprehensive media solutions to elevate your brand and tell your story."
            icon={Film}
            imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
            linkTo="/media-production"
            delay={900}
          />
        </div>
      </section>
      
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
