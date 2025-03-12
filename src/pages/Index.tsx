
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Camera, User, Film, Menu, X } from "lucide-react";
import { Motion } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Navigation overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-white drop-shadow-md">
            <img 
              src="/lovable-uploads/1f785f83-f703-4a9c-b057-2e8aedc7c07d.png" 
              alt="Omilia Visuals Logo" 
              className="h-10 mr-2"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </div>
          
          <button 
            className="md:hidden text-white p-2 z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/95 z-40 flex items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          <NavLink href="#about" onClick={toggleMenu}>About Us</NavLink>
          <NavLink href="#services" onClick={toggleMenu}>Services</NavLink>
          <NavLink href="/blog" onClick={toggleMenu}>Blog</NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>Contact Us</NavLink>
        </div>
      </div>
      
      {/* Main content - 3 columns */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 h-full">
        <ServicePanel 
          title="Wedding Photography & Videography"
          description="Capturing your special moments with artistic elegance"
          imageSrc="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80"
          icon={Camera}
          linkTo="/wedding-photography"
        />
        
        <ServicePanel 
          title="Portrait Photography"
          description="Professional portraits that tell your unique story"
          imageSrc="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80"
          icon={User}
          linkTo="/portrait-photography"
        />
        
        <ServicePanel 
          title="Media Strategy & Production"
          description="Elevate your brand with comprehensive media solutions"
          imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
          icon={Film}
          linkTo="/media-production"
        />
      </div>
    </div>
  );
};

const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-white text-sm font-medium hover:opacity-70 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

interface ServicePanelProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ComponentType<any>;
  linkTo: string;
}

const ServicePanel = ({ title, description, imageSrc, icon: Icon, linkTo }: ServicePanelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={linkTo} 
      className="relative overflow-hidden flex items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
      
      <div className="relative z-10 text-center px-6 max-w-md">
        <Motion animation="fade-in" delay={300}>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-3">{title}</h2>
          <p className="text-white/80 mb-6">{description}</p>
          <div 
            className={cn(
              "inline-flex items-center border border-white text-white px-6 py-2 transition-all duration-300",
              isHovered ? "bg-white/20" : "bg-transparent"
            )}
          >
            Explore Services
          </div>
        </Motion>
      </div>
    </Link>
  );
};

export default Index;
