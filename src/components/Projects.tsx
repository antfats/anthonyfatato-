import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first project and its key features",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://via.placeholder.com/500x300",
      githubUrl: "https://github.com/yourusername/project-one",
      liveUrl: "https://project-one-demo.com",
    },
    {
      title: "Project Two",
      description: "Description of the second project highlighting main aspects",
      tags: ["Next.js", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/500x300",
      githubUrl: "https://github.com/yourusername/project-two",
      liveUrl: "https://project-two-demo.com",
    },
    {
      title: "Project Three",
      description: "Overview of the third project and its technical stack",
      tags: ["Vue", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/500x300",
      githubUrl: "https://github.com/yourusername/project-three",
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