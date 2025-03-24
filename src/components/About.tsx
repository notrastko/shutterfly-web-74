
import { Motion, ParallaxImage } from "@/components/ui/motion";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Motion animation="fade-in" className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">About me</p>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
                  Capturing life's precious moments with precision and artistry
                </h2>
              </div>
              
              <p className="text-gray-600">
                With over 10 years of experience in professional photography, I've developed a unique 
                style that combines technical precision with artistic vision. My approach focuses on 
                finding the perfect moment where light, composition, and emotion converge.
              </p>
              
              <p className="text-gray-600">
                Each photography session is carefully planned to ensure we capture exactly what you're 
                looking for, whether it's the grandeur of a landscape, the intimacy of a portrait, or 
                the energy of an event.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-black text-white rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm font-medium inline-block"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </Motion>
          
          <Motion animation="slide-up" className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden h-[500px] shadow-xl">
              <ParallaxImage
                src="/lovable-uploads/9bc8dc7b-5e42-4151-8cfe-ff3d434f5b73.png"
                alt="Photographer working"
                className="w-full h-full"
              />
            </div>
          </Motion>
        </div>
        
        <Motion animation="fade-in" delay={300}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-white shadow-sm border border-gray-100"
              >
                <h3 className="text-4xl font-medium mb-2">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  );
};

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Happy Clients" },
  { value: "1,500+", label: "Projects Completed" },
];

export default About;
