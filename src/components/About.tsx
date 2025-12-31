import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Badge } from './ui/Badge';
import { Code2, Trophy, GraduationCap, Users } from 'lucide-react';
export function About() {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'WebSockets', 'PostgreSQL', 'MongoDB', 'Docker', 'Tailwind CSS', 'Git', "Web Scraping", "Data Flow Control"];
  const highlights = [{
    icon: <GraduationCap className="w-5 h-5" />,
    text: 'Vocational Graduate (KITM Junior Web Dev)'
  }, {
    icon: <Trophy className="w-5 h-5" />,
    text: 'EuroSkills 2025 Competitor (Herning)'
  }, {
    icon: <Users className="w-5 h-5" />,
    text: 'Experience in solo & team projects'
  }];
  return <section className="py-20 border-t border-zinc-900">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-zinc-100 mb-6 sticky top-24">
              About Me
            </h2>
          </div>

          <div className="md:col-span-8 space-y-12">
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Graduated with a Junior Web Developer title from KITM. I
                recently competed in the
                <span className="text-zinc-200 font-medium">
                  {' '}
                  EuroSkills 2025 Web Development competition
                </span>{' '}
                in Herning, where I gained valuable experience working under
                extreme pressure against top European talent.
              </p>
              <p>
                My journey started with basic React projects, but I quickly
                realized I wanted more. I moved on to building real-time
                applications and leveled up to complex full-stack systems like
                high-speed TTS streaming because standard solutions just didn't
                hit the mark.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, i) => <div key={i} className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                    <span className="text-zinc-400">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>)}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="outline" className="px-3 py-1 text-sm bg-zinc-900/30">
                    {skill}
                  </Badge>)}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>;
}