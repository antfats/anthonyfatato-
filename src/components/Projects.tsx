import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ASCII Decoder",
      description: "A simple bash script encrypt, then decrypt using ASCII format",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://www.plcdev.com/files/plcdev/images/Simple%20ASCII%20Table_0.gif",
      githubUrl: "https://github.com/antfats/ASCII-Decoder"
      //liveUrl: "https://project-one-demo.com",
    },
    {
      title: "Project Two",
      description: "I wanted to create an application where locals can post their fresh produce, either for a trade or as a donation",
      tags: ["Next.js", "Node.js", "MongoDB"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSrZkHbaGD5-bz54KtSlOadFF_zx-FzzcICYgAjvVxr0liQs7YeuHw2sd-UG-R1QwnfE&usqp=CAU",
      githubUrl: "https://github.com/tmolla/Eat-A-Fresh",
      liveUrl: "https://project-two-demo.com",
    },
    {
      title: "Project Three",
      description: "A simple web application for finding friends. Input yourself in the database long with a quick survay to find the friend of your dreams!",
      tags: ["Vue", "Express", "PostgreSQL"],
      image: "https://i.ibb.co/sC4vm7R/Maxis-Friend-Finder-1.png",
      githubUrl: "https://github.com/antfats/friendFinder",
      liveUrl: "https://project-three-demo.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-accent/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      size="icon" 
                      variant="secondary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;