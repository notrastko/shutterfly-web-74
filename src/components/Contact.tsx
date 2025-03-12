
import { useState } from "react";
import { Motion } from "@/components/ui/motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Motion animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Ready to capture your special moments? Get in touch and let's create something beautiful together.
            </p>
          </div>
        </Motion>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <Motion animation="fade-in" delay={300}>
            <div className="space-y-8">
              <h3 className="text-2xl font-medium">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactItem 
                  title="Email" 
                  content="hello@aperture.com" 
                  href="mailto:hello@aperture.com" 
                />
                
                <ContactItem 
                  title="Phone" 
                  content="+1 (555) 123-4567" 
                  href="tel:+15551234567" 
                />
                
                <ContactItem 
                  title="Studio Location" 
                  content="123 Photo Street, Capture City, 10001" 
                />
              </div>
              
              <div className="pt-6">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                  Follow me
                </h4>
                
                <div className="flex space-x-6">
                  <SocialLink label="Instagram" />
                  <SocialLink label="Twitter" />
                  <SocialLink label="Facebook" />
                </div>
              </div>
            </div>
          </Motion>
          
          <Motion animation="slide-up" delay={450}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-black/90 text-white rounded-full py-6"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Motion>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  title, 
  content, 
  href,
}: { 
  title: string; 
  content: string; 
  href?: string;
}) => (
  <div>
    <h4 className="font-medium">{title}</h4>
    {href ? (
      <a 
        href={href} 
        className="text-gray-600 hover:text-black transition-colors"
      >
        {content}
      </a>
    ) : (
      <p className="text-gray-600">{content}</p>
    )}
  </div>
);

const SocialLink = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
    aria-label={label}
  >
    <span className="text-sm">{label.charAt(0)}</span>
  </a>
);

export default Contact;
