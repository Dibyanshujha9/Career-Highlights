import { contactLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-animate">Get In Touch</h2>
        <p className="text-lg text-foreground/80 mb-12 max-w-xl mx-auto scroll-animate">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>

        <Card className="max-w-md mx-auto bg-card/70 backdrop-blur-sm scroll-animate">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Connect with Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
            {contactLinks.map((link) => (
              <Button key={link.name} variant="outline" size="lg" asChild className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
