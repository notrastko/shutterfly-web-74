
import React from "react";
import { Motion } from "@/components/ui/motion";
import { Camera, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PackageCard from "./PackageCard";

interface PackagesSectionProps {
  selectedPackage: string | null;
  setSelectedPackage: (packageName: string) => void;
}

const PackagesSection = ({ selectedPackage, setSelectedPackage }: PackagesSectionProps) => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Motion animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">Our Packages</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Choose the perfect package for your special day, tailored to your unique needs and preferences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <PackageCard
              title="Essential"
              price="$2,500"
              description="Perfect for intimate ceremonies"
              features={[
                "6 hours of coverage",
                "1 photographer",
                "High-resolution images",
                "Online gallery",
                "100 edited photos"
              ]}
              icon={Camera}
              isSelected={selectedPackage === "essential"}
              onClick={() => setSelectedPackage("essential")}
            />
            
            {/* Package 2 */}
            <PackageCard
              title="Premium"
              price="$4,000"
              description="Our most popular package"
              features={[
                "8 hours of coverage",
                "2 photographers",
                "Engagement session",
                "High-resolution images",
                "Online gallery",
                "300 edited photos",
                "Wedding album"
              ]}
              icon={Camera}
              isSelected={selectedPackage === "premium"}
              onClick={() => setSelectedPackage("premium")}
              highlighted
            />
            
            {/* Package 3 */}
            <PackageCard
              title="Luxe"
              price="$6,500"
              description="Complete photography & video"
              features={[
                "Full day coverage (10 hours)",
                "2 photographers + videographer",
                "Engagement session",
                "Drone footage",
                "5-minute highlight film",
                "Full ceremony film",
                "High-resolution images",
                "500 edited photos",
                "Premium wedding album"
              ]}
              icon={VideoIcon}
              isSelected={selectedPackage === "luxe"}
              onClick={() => setSelectedPackage("luxe")}
            />
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-6">
              All packages can be customized to fit your specific needs.
            </p>
            <Button>Request Custom Quote</Button>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default PackagesSection;
