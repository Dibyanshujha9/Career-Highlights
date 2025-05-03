import { skillsData, type SkillCategory } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category: SkillCategory, index: number) => (
            <Card key={category.title} className="bg-card/70 backdrop-blur-sm hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 scroll-animate">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <category.icon className="h-6 w-6 text-primary neon-icon" />
                 <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
