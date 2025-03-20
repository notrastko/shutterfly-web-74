
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/components/ui/motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const location = useLocation();
  
  // Determine text color based on current page and scroll position
  const isHomePage = location.pathname === '/';
  const textColorClass = isHomePage && !isScrolled ? "text-white" : "text-black";
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div 
        className={cn(
          "absolute bottom-0 h-[1px] bg-black/10 transition-all duration-700",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      <nav 
        className={cn(
          "flex items-center justify-between px-6 md:px-10 lg:px-20 py-6 transition-all duration-500",
          isScrolled 
            ? "glass-morphism backdrop-blur-xl bg-white/70" 
            : isHomePage ? "bg-transparent" : "bg-white/90"
        )}
      >
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1f785f83-f703-4a9c-b057-2e8aedc7c07d.png" 
            alt="Omilia Visuals Logo" 
            className="h-10 mr-2"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="/#about" className={textColorClass}>About Us</NavLink>
          <NavLink href="/#services" className={textColorClass}>Services</NavLink>
          <NavLink to="/wedding-photography" className={textColorClass}>Wedding</NavLink>
          <NavLink to="/portrait-photography" className={textColorClass}>Portrait</NavLink>
          <NavLink to="/media-production" className={textColorClass}>Media</NavLink>
          <NavLink to="/blog" className={textColorClass}>Blog</NavLink>
          <NavLink href="/#contact" className={textColorClass}>Contact</NavLink>
        </div>
        
        <div className="md:hidden">
          <button 
            className={`p-2 focus:outline-none ${textColorClass}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6" /> : 
              <>
                <div className={`w-6 h-0.5 ${textColorClass} mb-1.5`}></div>
                <div className={`w-6 h-0.5 ${textColorClass}`}></div>
              </>
            }
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
          <NavLink href="/#about" className="text-white" onClick={toggleMenu}>About Us</NavLink>
          <NavLink href="/#services" className="text-white" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/wedding-photography" className="text-white" onClick={toggleMenu}>Wedding</NavLink>
          <NavLink to="/portrait-photography" className="text-white" onClick={toggleMenu}>Portrait</NavLink>
          <NavLink to="/media-production" className="text-white" onClick={toggleMenu}>Media</NavLink>
          <NavLink to="/blog" className="text-white" onClick={toggleMenu}>Blog</NavLink>
          <NavLink href="/#contact" className="text-white" onClick={toggleMenu}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, href, children, className, onClick }: NavLinkProps) => {
  // If to is provided, use Link, otherwise use a regular anchor tag
  if (to) {
    return (
      <Link 
        to={to} 
        onClick={onClick}
        className={cn(
          "text-sm font-medium hover:opacity-70 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full",
          className
        )}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={cn(
        "text-sm font-medium hover:opacity-70 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
