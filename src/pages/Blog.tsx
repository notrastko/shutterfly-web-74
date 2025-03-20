import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
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
            {/* Example Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  The Art of Visual Storytelling
                </h2>
                <p className="text-gray-700 mb-4">
                  Explore how visual storytelling can transform your brand and
                  captivate your audience.
                </p>
                <Link
                  to="/blog/post-1"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
            {/* Example Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd6ca6ac9e?auto=format&fit=crop&w=600&q=80"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  Wedding Photography Trends in 2024
                </h2>
                <p className="text-gray-700 mb-4">
                  Stay updated with the latest trends in wedding photography to
                  make your special day even more memorable.
                </p>
                <Link
                  to="/blog/post-2"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
            {/* Example Blog Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503435980610-a602fa8c5ca9?auto=format&fit=crop&w=600&q=80"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  Tips for Stunning Portrait Photography
                </h2>
                <p className="text-gray-700 mb-4">
                  Learn essential tips and techniques to capture breathtaking
                  portraits that tell a story.
                </p>
                <Link
                  to="/blog/post-3"
                  className="text-blue-500 hover:underline"
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
