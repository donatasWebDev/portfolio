import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function Connect() {
  return <section className="py-20 border-t border-zinc-900 text-center">
      <FadeIn>
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">Let's Connect</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Open to junior positions, freelance, or tech chats. I'm always excited
          to discuss new projects and ideas.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/donatasWebDev" className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/donatas-tumenas-17b705306/" className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
          <a href="mailto:donatas.tumenas.dev@gmail.com" className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Email</span>
          </a>
        </div>

        <div className="text-xs text-zinc-600">
          <p>© 2025 Donatas Dev • Built with React & Tailwind</p>
        </div>
      </FadeIn>
    </section>;
}