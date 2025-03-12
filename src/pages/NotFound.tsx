
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <Motion animation="fade-in">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/1f785f83-f703-4a9c-b057-2e8aedc7c07d.png" 
              alt="Omilia Visuals Logo" 
              className="h-16"
            />
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </Motion>
    </div>
  );
};

export default NotFound;
