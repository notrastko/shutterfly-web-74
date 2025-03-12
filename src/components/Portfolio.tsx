
import { useState } from "react";
import { Motion } from "@/components/ui/motion";
import ImageCard from "@/components/ImageCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Nature", "Portrait", "Architecture", "Travel"];

const portfolioItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    alt: "Mountain landscape",
    title: "Mountain Vista",
    category: "Nature",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    alt: "Professional portrait",
    title: "Creative Focus",
    category: "Portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    alt: "Modern building",
    title: "Digital Nomad",
    category: "Travel",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    alt: "City skyline",
    title: "Creative Tools",
    category: "Architecture",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    alt: "Mountain landscape",
    title: "Code Poetry",
    category: "Travel",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    alt: "Mountain landscape",
    title: "Alpine Majesty",
    category: "Nature",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-10 lg:px-20">
      <Motion animation="slide-up">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">
          Portfolio
        </h2>
      </Motion>
      
      <Motion animation="fade-in" delay={300}>
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </Motion>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item, index) => (
          <Motion 
            key={item.id} 
            animation="fade-in" 
            delay={150 * (index + 1)}
            className="h-[300px] md:h-[400px]"
          >
            <ImageCard
              src={item.src}
              alt={item.alt}
              title={item.title}
              category={item.category}
              className="h-full"
            />
          </Motion>
        ))}
      </div>
      
      <Motion animation="fade-in" delay={900} className="flex justify-center mt-12">
        <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm">
          View All Projects
        </button>
      </Motion>
    </section>
  );
};

export default Portfolio;
