import React from 'react';
import Hero3D from './components/Hero3D';
import TechShowcase from './components/TechShowcase';
import ProjectsGrid from './components/ProjectsGrid';
import ContactCTA from './components/ContactCTA';
import ParticlesCanvas from './components/ParticlesCanvas';
import CursorAura from './components/CursorAura';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global motion layers */}
      <ParticlesCanvas />
      <CursorAura />

      {/* Simple sticky nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">AI • Portfolio</a>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero3D />
        <TechShowcase />
        <ProjectsGrid />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
