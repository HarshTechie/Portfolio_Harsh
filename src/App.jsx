import { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import Navbar from './components/Navbar.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import CurrentlyExploring from './sections/CurrentlyExploring.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <ThemeProvider>
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <CurrentlyExploring />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </ThemeProvider>
  );
}
