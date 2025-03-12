
import { Motion, ParallaxImage } from "@/components/ui/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
        alt="Landscape photography"
        className="w-full h-full"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <Motion animation="fade-in" delay={300}>
          <p className="text-sm md:text-base uppercase tracking-widest mb-4">
            Capturing moments
          </p>
        </Motion>
        
        <Motion animation="slide-up" delay={600}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center max-w-4xl leading-tight mb-6 text-shadow">
            Every Frame Tells a Story
          </h1>
        </Motion>
        
        <Motion animation="fade-in" delay={900}>
          <p className="text-base md:text-lg max-w-md text-center text-white/90 mb-8">
            Professional photography that captures the essence of your most precious moments
          </p>
        </Motion>
        
        <Motion animation="scale-in" delay={1200}>
          <a
            href="#portfolio"
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
          >
            View Portfolio
          </a>
        </Motion>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Motion animation="fade-in" delay={1800}>
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
            <p className="text-white text-xs mt-2">Scroll Down</p>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Hero;
