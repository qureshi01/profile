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
      <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-black">
        {/* Live Backend Telemetry Visualizer Drawer */}
        <ArchitectureVisualizer />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ArchitectureProvider>
  );
}

export default App;
