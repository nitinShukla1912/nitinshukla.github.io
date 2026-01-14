import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroAboutSection from './components/HeroAboutSection';
import News from './components/News';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import PatentsSection from './components/PatentsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroAboutSection />
        <News />
        <ProjectsSection />
        <PatentsSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;