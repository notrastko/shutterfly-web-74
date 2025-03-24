
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      <section className="container mx-auto py-12 px-6 pt-20">
        <Motion animation="fade-in">
          <h1 className="text-3xl font-semibold mb-8">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80"
                alt="Wedding photography"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex text-sm text-muted-foreground gap-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    July 15, 2023
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    5 min read
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  How to Feel Comfortable in Front of the Camera on Your Wedding Day
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Your wedding day is one of the most memorable moments of your life, and naturally, you want
                  your photos to reflect the joy and love you feel. But if the thought of being in front of the camera
                  makes you nervous, you're not alone.
                </p>
                <Link
                  to="/blog/post-1"
                  className="text-primary font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd6ca6ac9e?auto=format&fit=crop&q=80"
                alt="Wedding preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex text-sm text-muted-foreground gap-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    June 24, 2023
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    4 min read
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Wedding Photography Trends in 2023
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Stay updated with the latest trends in wedding photography to
                  make your special day even more memorable. From candid moments to artistic compositions.
                </p>
                <Link
                  to="/blog/post-2"
                  className="text-primary font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503435980610-a602fa8c5ca9?auto=format&fit=crop&q=80"
                alt="Portrait photography"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex text-sm text-muted-foreground gap-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    May 18, 2023
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    6 min read
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Tips for Stunning Portrait Photography
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Learn essential tips and techniques to capture breathtaking
                  portraits that tell a story and showcase your unique personality.
                </p>
                <Link
                  to="/blog/post-3"
                  className="text-primary font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Motion>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
