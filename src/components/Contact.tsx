import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
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
              
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
                <Button className="w-full">
                  Send Message
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