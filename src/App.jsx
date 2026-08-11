import React from 'react';
import { ArchitectureProvider } from './context/ArchitectureContext';
import { Navbar } from './components/Navbar';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ArchitectureProvider>
      <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-sky-500/30 selection:text-white">
        <ArchitectureVisualizer />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ArchitectureProvider>
  );
}

export default App;
