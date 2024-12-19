import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_hqc3bt3',
        'template_zgihizh',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Anthony',
        },
        'yZXMHZdHds9TXUK_9'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <Card className="glass">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>Let's discuss your project</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input 
                  placeholder="Your Email" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[120px]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button 
                  className="w-full" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;