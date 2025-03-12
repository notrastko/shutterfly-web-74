
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Motion } from "@/components/ui/motion";

const MediaProduction = () => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <Motion animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Media Strategy & Production</h1>
        </Motion>
        
        <Motion animation="slide-up" delay={300}>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Elevate your brand with our comprehensive media strategy and production services.
            From concept to execution, we create compelling visual content that tells your story.
          </p>
        </Motion>
        
        <Motion animation="fade-in" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
              alt="Media production" 
              className="rounded-lg w-full aspect-video object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1533243585514-2e1ce25cf0c7?auto=format&fit=crop&q=80" 
              alt="Video production" 
              className="rounded-lg w-full aspect-video object-cover"
            />
          </div>
        </Motion>
        
        <Motion animation="slide-up" delay={900}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium mb-4">Our Media Services</h2>
            <ul className="grid gap-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Brand strategy and visual identity development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Video production and editing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Content creation for social media and marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Commercial and promotional photography</span>
              </li>
            </ul>
          </div>
        </Motion>
      </main>
      
      <Footer />
    </div>
  );
};

export default MediaProduction;
