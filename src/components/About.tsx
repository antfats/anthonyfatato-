import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      description: "Building with modern technologies and best practices",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing for the best possible user experience",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="glass">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;