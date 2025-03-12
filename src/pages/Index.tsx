
import { useEffect } from "react";
import { Camera, User, Film } from "lucide-react";
import { Motion } from "@/components/ui/motion";
import ServiceColumn from "@/components/ServiceColumn";

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
    <div className="min-h-screen antialiased flex items-center justify-center px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl w-full">
        <Motion animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Photography Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized photography and media services
          </p>
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
      </div>
    </div>
  );
};

export default Index;
