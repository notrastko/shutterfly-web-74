
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  className?: string;
}

const ImageCard = ({ src, alt, title, category, className }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "image-card group relative overflow-hidden rounded-lg cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100",
          !isLoaded && "opacity-0"
        )}
      />
      
      {(title || category) && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500",
          )}
        >
          {category && (
            <span className="text-white/80 text-xs uppercase tracking-wider mb-1">
              {category}
            </span>
          )}
          
          {title && (
            <h3 className="text-white text-xl font-medium">
              {title}
            </h3>
          )}
          
          <div 
            className={cn(
              "w-10 h-0.5 bg-white mt-3 transition-all duration-500",
              isHovered ? "w-16" : "w-10"
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
