import Link from 'next/link';
import { contactLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Dibyanshu Jha. All rights reserved.
        </p>
        <div className="flex gap-4">
          {contactLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
