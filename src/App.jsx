import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="mb-2">
            © {new Date().getFullYear()} Nitin Shukla. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React + Vite | Hosted on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

