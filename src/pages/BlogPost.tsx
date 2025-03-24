
import { Link, useParams } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  
  // This would normally be fetched from a CMS or database
  const blogPost = getBlogPostData(id);
  
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Blog post not found</h1>
            <Button asChild>
              <Link to="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      <article className="container mx-auto py-12 px-6 max-w-4xl">
        <Motion animation="fade-in">
          <Link to="/blog" className="inline-flex items-center text-omilia-indigo mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[40vh] object-cover rounded-lg mb-8"
          />
          
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-omilia-indigo" />
              {blogPost.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-omilia-indigo" />
              {blogPost.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-omilia-indigo" />
              {blogPost.readTime} min read
            </div>
          </div>
          
          <h1 className="font-visby text-3xl md:text-4xl font-medium mb-8">{blogPost.title}</h1>
          
          <div className="prose max-w-none">
            {blogPost.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <h3 className="text-xl font-medium mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="accent" size="sm">Facebook</Button>
              <Button variant="secondary" size="sm">Twitter</Button>
              <Button variant="highlight" size="sm">LinkedIn</Button>
            </div>
          </div>
        </Motion>
      </article>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Helper function to get blog post data
const getBlogPostData = (id: string | undefined) => {
  const posts = {
    'post-1': {
      id: 'post-1',
      title: 'How to Feel Comfortable in Front of the Camera on Your Wedding Day',
      image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80',
      date: 'July 15, 2023',
      author: 'Omilia Visuals Team',
      readTime: 5,
      content: [
        "Your wedding day is one of the most memorable moments of your life, and naturally, you want your photos to reflect the joy and love you feel. But if the thought of being in front of the camera makes you nervous, you're not alone.",
        "A lot of couples are either camera-shy or worry about looking awkward and stiff in front of the camera. The good news is it doesn't have to be that way! As professional wedding and engagement photographers in Toronto, we've worked with so many couples who felt the same way at first, but we help them relax, have fun, and actually enjoy their photo session. So, if you're looking to feel confident and natural in your wedding photos, here's how!",
        "1. Choose a Photographer You Trust",
        "Your comfort starts long before the actual day of the shoot. It begins with the right photographer. Look for someone whose style you love; someone who makes you feel at ease. Having a conversation beforehand is a great way to build rapport and get used to being photographed. At Omilia Visuals, we prioritize consultation sessions that help us get to know our clients better, and also answer whatever questions they may have. This fosters a healthy working relationship that makes the photo sessions seamless.",
        "2. Focus on Each Other, Not the Camera",
        "Hard as this might seem, it's a great hack! The best wedding photos capture real emotions. So, instead of worrying about posing, focus on your partner. Whisper an inside joke, hold hands, or steal a quiet moment together. When you connect naturally, your photos will reflect that authenticity.",
        "3. Trust the Process (and Your Photographer)",
        "A professional photographer knows how to guide you, adjust your angles, and capture the best moments. Trust their direction, and don't overthink your expressions.",
        "Bonus: Enjoy the Moment!",
        "The day is about you, not just the photos. The more you focus on soaking in the experience (laughing, celebrating, and being present) the more effortless and beautiful your photos will be.",
        "Feeling comfortable in front of the camera is about trust and connection. When you let go of the pressure to \"pose perfectly\" and simply enjoy your day next to the love of your life, your photos will radiate what you feel inside.",
        "Planning your Toronto wedding? Let's chat about capturing your love story in the most natural and authentic way possible."
      ]
    },
    // Add more blog posts as needed
  };
  
  return id ? posts[id as keyof typeof posts] : null;
};

export default BlogPost;
