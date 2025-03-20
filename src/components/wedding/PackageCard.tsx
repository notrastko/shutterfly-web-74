
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  isSelected: boolean;
  onClick: () => void;
  highlighted?: boolean;
}

const PackageCard = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  isSelected, 
  onClick,
  highlighted = false 
}: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "border rounded-lg p-6 transition-all duration-300 cursor-pointer relative",
        highlighted ? "border-primary shadow-lg" : "border-gray-200",
        isSelected ? "ring-2 ring-primary ring-offset-2" : ""
      )}
      onClick={onClick}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="text-2xl font-bold mb-2">{price}</div>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={highlighted ? "default" : "outline"} className="w-full">
        Select Package
      </Button>
    </div>
  );
};

export default PackageCard;
