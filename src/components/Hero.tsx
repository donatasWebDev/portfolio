import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Badge } from './ui/Badge';
export function Hero() {
  return <section className="min-h-[80vh] flex flex-col justify-center py-20">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar Placeholder */}
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-800 overflow-hidden border-2 border-zinc-700 shadow-xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -bottom-2 -right-2 md:right-0">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-zinc-950"></span>
              </span>
            </div>
          </div>

          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <div>
              <Badge variant="success" className="mb-4">
                Available for junior roles / freelance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-2">
                Donatas Tumenas
              </h1>
              <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
                Junior Full-Stack Developer
              </h2>
            </div>

            <p className="text-lg text-zinc-400 leading-relaxed">
              Passionate about real-time systems, performance optimization, and
              building addictive web apps. I turn complex problems into smooth,
              user-friendly interfaces.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <a href="https://github.com/donatasWebDev" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/donatas-tumenas-17b705306/" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:donatas.tumenas.dev@gmail.com"  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>;
}