
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef, ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-down" 
    | "scale-in"
    | "none";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const Motion = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true
}: MotionProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  let animationClass = "";
  
  if (animation === "fade-in") {
    animationClass = "animate-fade-in";
  } else if (animation === "slide-up") {
    animationClass = "animate-slide-up";
  } else if (animation === "slide-down") {
    animationClass = "animate-slide-down";
  } else if (animation === "scale-in") {
    animationClass = "animate-scale-in";
  }

  return (
    <div
      ref={ref}
      className={cn(
        className,
        inView ? animationClass : "opacity-0",
        delay > 0 ? `transition-all duration-500 delay-[${delay}ms]` : "transition-all duration-500"
      )}
    >
      {children}
    </div>
  );
};

export const ParallaxImage = ({ 
  src, 
  alt,
  className,
  speed = 0.5,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const { top } = ref.current.getBoundingClientRect();
      const scrollOffset = window.scrollY;
      const elementPosition = top + scrollOffset;
      const windowHeight = window.innerHeight;
      
      const distance = scrollOffset - elementPosition + windowHeight;
      const parallaxOffset = distance * speed;
      
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      />
    </div>
  );
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollProgress;
};
