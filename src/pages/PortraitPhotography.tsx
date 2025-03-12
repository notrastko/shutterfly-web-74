
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Motion } from "@/components/ui/motion";

const PortraitPhotography = () => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <Motion animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Portrait Photography</h1>
        </Motion>
        
        <Motion animation="slide-up" delay={300}>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Capturing personality, emotion, and authentic moments with our professional portrait 
            photography services. Perfect for individuals, families, and professional headshots.
          </p>
        </Motion>
        
        <Motion animation="fade-in" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80" 
              alt="Portrait photography" 
              className="rounded-lg w-full aspect-video object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
              alt="Professional headshot" 
              className="rounded-lg w-full aspect-video object-cover"
            />
          </div>
        </Motion>
        
        <Motion animation="slide-up" delay={900}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium mb-4">Our Portrait Services</h2>
            <ul className="grid gap-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Individual and family portraits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Professional headshots and corporate portraits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Environmental and studio portrait sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Digital and printed deliverables</span>
              </li>
            </ul>
          </div>
        </Motion>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortraitPhotography;
