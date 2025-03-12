
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare for Your Wedding Photography Session",
      excerpt: "Essential tips and guidance for couples planning their wedding photography.",
      date: "June 15, 2023",
      category: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
      author: "Emma Roberts"
    },
    {
      id: 2,
      title: "The Art of Portrait Lighting: Creating Mood and Dimension",
      excerpt: "Understanding different lighting techniques to create stunning portrait photography.",
      date: "July 3, 2023",
      category: "Portrait Photography",
      image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "Building Your Brand Through Visual Storytelling",
      excerpt: "How effective visual content can transform your brand narrative.",
      date: "August 21, 2023",
      category: "Media Strategy",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
      author: "Sarah Johnson"
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in the Life of a Wedding Photographer",
      excerpt: "Insights into what goes into capturing the perfect wedding day memories.",
      date: "September 10, 2023",
      category: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80",
      author: "Emma Roberts"
    },
    {
      id: 5,
      title: "Choosing the Perfect Location for Your Portrait Session",
      excerpt: "How to select locations that complement your portrait photography.",
      date: "October 5, 2023",
      category: "Portrait Photography",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      author: "Michael Chen"
    },
    {
      id: 6,
      title: "Digital Content Strategies for Small Businesses",
      excerpt: "Effective ways to leverage digital content for business growth.",
      date: "November 12, 2023",
      category: "Media Strategy",
      image: "https://images.unsplash.com/photo-1533243585514-2e1ce25cf0c7?auto=format&fit=crop&q=80",
      author: "Sarah Johnson"
    }
  ];

  return (
    <div className="min-h-screen antialiased">
      <header className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 md:p-10 z-10">
          <Link to="/" className="text-2xl font-medium text-white">
            Omilia Visuals
          </Link>
          
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/20"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </nav>
        
        <div className="relative z-10 text-center px-6">
          <Motion animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Insights, tips, and stories from the world of visual media
            </p>
          </Motion>
        </div>
      </header>
      
      <main className="py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Wedding Photography</Button>
            <Button variant="outline" className="rounded-full">Portrait Photography</Button>
            <Button variant="outline" className="rounded-full">Media Strategy</Button>
            <Button variant="outline" className="rounded-full">Tips & Tricks</Button>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Motion key={post.id} animation="fade-in" delay={post.id * 100}>
                <article className="border border-gray-200 rounded-lg overflow-hidden group">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">By {post.author}</span>
                        <span className="ml-auto text-sm text-primary font-medium">Read More</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </Motion>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0">1</Button>
              <Button variant="outline" className="h-10 w-10 p-0 bg-primary text-white">2</Button>
              <Button variant="outline" className="h-10 w-10 p-0">3</Button>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
