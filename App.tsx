import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import Growth from './components/Growth';
import Contact from './components/Contact';
import Team from './components/Team';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="font-sans antialiased text-verte-black bg-verte-white selection:bg-verte-gold selection:text-verte-black">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <CoreValues />
        <Team />
        <Services />
        <Growth />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
