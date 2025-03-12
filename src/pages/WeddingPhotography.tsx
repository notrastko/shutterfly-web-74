
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Motion } from "@/components/ui/motion";

const WeddingPhotography = () => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <Motion animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Wedding Photography</h1>
        </Motion>
        
        <Motion animation="slide-up" delay={300}>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Capturing the magic and emotion of your special day with artistic elegance and timeless style.
            Our wedding photography services are tailored to document every precious moment.
          </p>
        </Motion>
        
        <Motion animation="fade-in" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80" 
              alt="Wedding ceremony" 
              className="rounded-lg w-full aspect-video object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80" 
              alt="Wedding couple" 
              className="rounded-lg w-full aspect-video object-cover"
            />
          </div>
        </Motion>
        
        <Motion animation="slide-up" delay={900}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium mb-4">Our Wedding Services</h2>
            <ul className="grid gap-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Full day coverage from preparation to reception</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Engagement photo sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Premium photo albums and prints</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                <span>Second photographer option</span>
              </li>
            </ul>
          </div>
        </Motion>
      </main>
      
      <Footer />
    </div>
  );
};

export default WeddingPhotography;
