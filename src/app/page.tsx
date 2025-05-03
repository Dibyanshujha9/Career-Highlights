
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero'; // Re-enable the Hero component

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
