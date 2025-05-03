import { experienceData, type Experience as ExperienceType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate">Experience</h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {experienceData.map((exp: ExperienceType, index: number) => (
            <div key={index} className="relative pl-10 scroll-animate">
               <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <Card className="bg-card/80 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base text-primary">
                    {exp.company} | {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/80">
                    {exp.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-sm md:text-base">{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
