import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center scroll-animate">
            <Image
              src="https://picsum.photos/300/300" // Replace with a different picture or keep placeholder
              alt="Dibyanshu Jha - About"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover aspect-square"
              data-ai-hint="developer coding laptop"
            />
          </div>
          <div className="md:col-span-2 scroll-animate">
             <Card className="bg-card/80 backdrop-blur-sm">
               <CardHeader>
                 <CardTitle className="text-2xl text-primary">Passionate Full Stack Developer</CardTitle>
               </CardHeader>
               <CardContent className="text-foreground/80 space-y-4 text-base md:text-lg">
                  <p>
                    I'm a dedicated and results-oriented Full Stack Developer with a strong foundation in Computer Science principles and a passion for building high-performance, user-centric web applications.
                  </p>
                  <p>
                    My experience spans across the entire development lifecycle, from architecting scalable frontend interfaces with React and Next.js to designing and implementing robust backend systems using Node.js and Express. I thrive in collaborative environments and enjoy tackling complex challenges to deliver efficient and innovative solutions.
                  </p>
                  <p>
                    I am constantly seeking opportunities to learn new technologies and improve my skills. Currently pursuing my B.Tech in Computer Science, I am eager to apply my academic knowledge and practical experience to contribute to impactful projects.
                  </p>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
