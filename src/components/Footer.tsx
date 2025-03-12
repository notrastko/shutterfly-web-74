
import { Motion } from "@/components/ui/motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Motion animation="fade-in">
            <div>
              <h3 className="text-xl font-medium mb-4">Aperture</h3>
              <p className="text-gray-600 max-w-xs">
                Professional photography services capturing life's most precious moments.
              </p>
            </div>
          </Motion>
          
          <Motion animation="fade-in" delay={200}>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#portfolio">Portfolio</FooterLink>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
                <FooterLink href="#">Services</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </ul>
            </div>
          </Motion>
          
          <Motion animation="fade-in" delay={400}>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>123 Photo Street</li>
                <li>Capture City, 10001</li>
                <li>hello@aperture.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </Motion>
        </div>
        
        <Motion animation="fade-in" delay={600}>
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Aperture. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-600 hover:text-black transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
