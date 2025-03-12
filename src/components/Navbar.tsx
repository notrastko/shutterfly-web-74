
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/components/ui/motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
            : "bg-transparent"
        )}
      >
        <a 
          href="#" 
          className="text-xl font-medium tracking-tight"
        >
          Aperture
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div className="md:hidden">
          <button 
            className="p-2 focus:outline-none" 
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium hover:opacity-70 transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

export default Navbar;
