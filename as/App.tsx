import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import VisionMission from './components/VisionMission'
import CoreValues from './components/CoreValues'
import Growth from './components/Growth'
import Team from './components/Team'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Growth />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <ScrollToTopButton />
    </>
  )
}

export default App
