import { projectsData, type Project as ProjectType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project: ProjectType, index: number) => (
            <Card key={index} className="flex flex-col bg-card/70 backdrop-blur-sm hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 pt-2 text-sm md:text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm font-medium text-foreground/90 mr-2">Tech Stack:</span>
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
                        {tech}
                        </Badge>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-end">
                {project.link && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                 {project.repo && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
