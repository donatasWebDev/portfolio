import React, { useRef, useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ExternalLink, Github, PlayCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(true);
  };

  return <section className="py-20 border-t border-zinc-900">
    <FadeIn>
      <h2 className="text-3xl font-bold text-zinc-100 mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Flagship Project */}
        <div className="md:col-span-2 group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/90 pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Video Section - Made fully responsive */}
            <div className="relative w-full h-64 lg:h-full bg-zinc-800 overflow-hidden rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
              <div className="aspect-video w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/o9cOABC1nu0?rel=0${isPlaying ? '&autoplay=1' : ''}`}
                  title="NovelVerse Demo"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Fallback placeholder - only visible if iframe fails */}
              {/* <div className="absolute inset-0 flex items-center justify-center text-zinc-600 pointer-events-none">
                <PlayCircle className="w-16 h-16 opacity-50" />
              </div> */}
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center relative z-20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  NovelVerse TTS
                </h3>
                <Badge variant="warning">Flagship</Badge>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                Personal full-stack high-speed audiobook engine for web
                novels. Features on-demand fetching, multi-threaded Python TTS
                sockets, smart buffering for seamless playback, GPU
                queuing, and a private auth system with a React playlist
                interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'Python', 'WebSockets', 'TTS Pipeline'].map(tag => (
                  <span key={tag} className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="gap-2" onClick={handlePlayDemo}>
                  <PlayCircle className="w-4 h-4" /> Watch Demo
                </Button>
                <Button variant="outline" className="gap-2" href='https://github.com/donatasWebDev/NovelVerse' target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> View Code
                </Button>
                <Link to="/case-study">
                  <Button variant="ghost" className="gap-2">
                    Case Study
                  </Button>
                </Link>
              </div>

              <div className="mt-6 flex items-start gap-2 text-xs text-amber-500/80 bg-amber-950/20 p-3 rounded border border-amber-900/30">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  Content sourced from NovelBin aggregator. Personal
                  non-commercial demo – rights belong to authors/translators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Project 1 */}
        <div className="group rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-zinc-100">
              Real-Time Chat App
            </h3>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-zinc-400 text-sm mb-6 min-h-[3rem]">
            Graduation project similar to Messenger. Implements real-time
            messaging, auth, and basic UI. "Worse than pro versions but solid
            beginner real-time foundation."
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['React', 'Node.js', 'Socket.io'].map(tag => <span key={tag} className="text-xs text-zinc-500 bg-zinc-950 px-2 py-1 rounded">
              {tag}
            </span>)}
          </div>
        </div>

        {/* Secondary Project 2 */}
        <div className="group rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-zinc-100">Kahoot Clone</h3>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-zinc-400 text-sm mb-6 min-h-[3rem]">
            Team project (2 people). Interactive quiz game with rooms and live
            scoring. Mid-level collab that taught me teamwork and early React
            pitfalls.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['React', 'Basic Backend', 'Teamwork'].map(tag => <span key={tag} className="text-xs text-zinc-500 bg-zinc-950 px-2 py-1 rounded">
              {tag}
            </span>)}
          </div>
        </div>
      </div>
    </FadeIn>
  </section>;
}