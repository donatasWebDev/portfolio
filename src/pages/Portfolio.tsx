import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Connect } from '../components/Connect';
export function Portfolio() {
  return <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Hero />
        <About />
        <Projects />
        <Connect />
      </div>
    </div>;
}