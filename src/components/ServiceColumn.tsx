
import { Motion } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceColumnProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  linkTo: string;
  delay?: number;
  className?: string;
}

const ServiceColumn = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  linkTo,
  delay = 0,
  className,
}: ServiceColumnProps) => {
  return (
    <Motion animation="fade-in" delay={delay} className={cn("flex-1", className)}>
      <Link to={linkTo} className="block group">
        <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-full bg-secondary/50 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <Button variant="outline" className="group-hover:bg-secondary/30 transition-colors duration-300">
          Discover More
        </Button>
      </Link>
    </Motion>
  );
};

export default ServiceColumn;
