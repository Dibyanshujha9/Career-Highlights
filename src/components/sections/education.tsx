import { educationData, type Education as EducationType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate">Education</h2>
        <div className="max-w-2xl mx-auto">
           {educationData.map((edu: EducationType, index: number) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-md scroll-animate">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary neon-icon" />
                <div>
                    <CardTitle className="text-xl md:text-2xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base text-foreground/80">{edu.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.location} | {edu.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
