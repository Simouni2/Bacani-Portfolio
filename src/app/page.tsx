'use client';

import Navbar from '@/components/Navbar';
import AnimatedParticles from '@/components/AnimatedParticles';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)' }} className="min-h-screen relative overflow-hidden">
      {/* Animated background particles */}
      <AnimatedParticles />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
