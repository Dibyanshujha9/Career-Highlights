import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
// import { Home } from '@/components/sections/home';

export default function HomePage() { // Renamed component to avoid conflict with file name
  return (
    <>
      {/* <Home /> */}
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
