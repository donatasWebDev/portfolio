import React, { Children, Component } from 'react'
import {Link} from 'react-router-dom'
import {
  ArrowLeft,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  Zap,
  Code,
  Terminal,
  BookOpen,
  PlayCircle,
  ShieldCheck,
} from 'lucide-react'
// --- Types & Data ---
type TechNode = {
  name: string
  details?: string
  children?: TechNode[]
}
const techTreeData: TechNode = {
  name: 'Root Application',
  children: [
    {
      name: 'Languages & Runtime',
      children: [
        {
          name: 'TypeScript',
          details: 'frontend & backend',
        },
        {
          name: 'Python 3.10+',
          details: 'real-time processing',
        },
      ],
    },
    {
      name: 'Containerization',
      children: [
        {
          name: 'Docker',
          details: 'frontend, backend, Python service',
        },
      ],
    },
    {
      name: 'Configuration',
      children: [
        {
          name: '.env files',
          details: 'DATABASE_URL, VITE_WS_URL, ports',
        },
      ],
    },
    {
      name: 'Frontend Layer',
      children: [
        {
          name: 'Framework',
          details: 'React + Vite',
        },
        {
          name: 'State & Routing',
          details: 'React Context + React Router',
        },
        {
          name: 'Real-Time',
          details: 'Native WebSocket client (useSocket hook)',
        },
        {
          name: 'Playback',
          details: 'Web Audio API (Player component)',
        },
      ],
    },
    {
      name: 'Backend Layer',
      children: [
        {
          name: 'Server',
          details: 'Node.js + Express (TypeScript)',
        },
        {
          name: 'Authentication',
          details: 'JWT + bcrypt',
        },
        {
          name: 'ORM',
          details: 'Prisma (MongoDB)',
        },
        {
          name: 'Database',
          details: 'MongoDB (users, books, favorites)',
        },
      ],
    },
    {
      name: 'Python Service Layer',
      children: [
        {
          name: 'Runtime',
          details: 'asyncio + threading',
        },
        {
          name: 'WebSocket Server',
          details: 'websockets library',
        },
        {
          name: 'Scraping',
          details: 'requests + BeautifulSoup',
        },
        {
          name: 'TTS Engine',
          details: 'Kokoro (neural, GPU via torch.cuda)',
        },
        {
          name: 'Audio Processing',
          details: 'numpy + pydub',
        },
      ],
    },
  ],
}
const challenges = [
  {
    challenge: 'TTS latency on CPU',
    solution: 'GPU auto-detection + chunked streaming',
  },
  {
    challenge: 'Scraping fragility',
    solution: 'Modular parsers (easy updates)',
  },
  {
    challenge: 'Concurrent streams',
    solution: 'Threaded workers + per-connection queues',
  },
  {
    challenge: 'Browser autoplay policies',
    solution: 'User-initiated playback via interactive UI',
  },
]
// --- Components ---
const Section = ({
  title,
  children,
  className = '',
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) => (
  <section className={`mb-16 ${className}`}>
    {title && (
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
        {title}
      </h2>
    )}
    {children}
  </section>
)
const TechTreeNode = ({
  node,
  depth = 0,
  isLast = false,
}: {
  node: TechNode
  depth?: number
  isLast?: boolean
}) => {
  return (
    <div className="relative">
      <div className="flex items-start group">
        {/* Tree lines */}
        {depth > 0 && (
          <div className="flex items-center h-6 mr-2 select-none font-mono text-zinc-700">
            {Array.from({
              length: depth - 1,
            }).map((_, i) => (
              <span
                key={i}
                className="w-6 border-l border-zinc-800 h-full inline-block"
              ></span>
            ))}
            <span className="w-6 h-full flex items-center">
              <span className="w-full border-t border-zinc-700"></span>
            </span>
          </div>
        )}

        {/* Content */}
        <div className={`py-1 ${depth === 0 ? 'mb-2' : ''}`}>
          <div className="flex items-baseline gap-2">
            <span
              className={`font-mono text-sm md:text-base ${depth === 0 ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}
            >
              {node.name}
            </span>
            {node.details && (
              <span className="text-xs md:text-sm text-zinc-500 font-mono">
                — {node.details}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Children */}
      {node.children && (
        <div className="flex flex-col">
          {node.children.map((child, i) => (
            <TechTreeNode
              key={i}
              node={child}
              depth={depth + 1}
              isLast={i === node.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}
const WorkflowCard = ({
  title,
  icon: Icon,
  steps,
}: {
  title: string
  icon: any
  steps: string[]
}) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/30 transition-colors duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-emerald-500/10 rounded-md">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ol className="relative border-l border-zinc-800 ml-3 space-y-6">
      {steps.map((step, i) => (
        <li key={i} className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full -left-3 ring-1 ring-zinc-700 text-xs text-zinc-500 font-mono">
            {i + 1}
          </span>
          <p className="text-zinc-400 text-sm leading-relaxed">{step}</p>
        </li>
      ))}
    </ol>
  </div>
)
export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-mono text-zinc-600 px-2 py-1 border border-zinc-800 rounded">
              v1.0.0
            </span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6 border border-emerald-500/20">
            <Zap className="w-3 h-3" />
            <span>Full-Stack Case Study</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            NovelVerse
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl">
            Real-Time Full-Stack Audiobook Streaming Application
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              'TypeScript',
              'React',
              'Python',
              'WebSockets',
              'Docker',
              'GPU TTS',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-sm text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 border-t border-zinc-900 pt-8">
            <div className="space-y-2">
              <div className="text-zinc-500 text-sm font-mono">ROLE</div>
              <div className="text-white font-medium">Full-Stack Developer</div>
            </div>
            <div className="space-y-2">
              <div className="text-zinc-500 text-sm font-mono">TIMELINE</div>
              <div className="text-white font-medium">4 Weeks</div>
            </div>
            <div className="space-y-2">
              <div className="text-zinc-500 text-sm font-mono">FOCUS</div>
              <div className="text-white font-medium">
                Real-time Systems, AI
              </div>
            </div>
          </div>
        </header>

        {/* Overview */}
        <Section title="Project Overview">
          <div className="prose prose-invert prose-lg max-w-none text-zinc-400">
            <p className="mb-6">
              NovelVerse is a personal full-stack web application that scrapes
              web novels, generates high-quality audiobooks using text-to-speech
              (TTS), and streams them in real-time. Designed as a portfolio
              project, it highlights expertise in hybrid language architecture,
              real-time systems, web scraping, audio processing, and secure user
              management.
            </p>
            <p className="mb-8">
              The app lets users discover web novels, build private libraries,
              track reading progress, and listen to chapters as natural-sounding
              audio generated on-demand. Content is scraped in real-time,
              converted via a neural TTS engine, and streamed over WebSockets
              for low-latency playback—no pre-generated files or long waits
              required.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: Zap,
                  label: 'Instant Streaming',
                  desc: 'Seamless playback with no wait times',
                },
                {
                  icon: Cpu,
                  label: 'GPU Acceleration',
                  desc: 'High-quality voice synthesis',
                },
                {
                  icon: ShieldCheck,
                  label: 'Secure Auth',
                  desc: 'Personalized progress tracking',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50"
                >
                  <item.icon className="w-6 h-6 text-emerald-500 mb-3" />
                  <h3 className="text-white font-medium mb-1">{item.label}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technology Tree */}
        <Section title="Technology Tree">
          <div className="bg-[#0D0D0D] border border-zinc-800 rounded-xl p-6 md:p-8 overflow-x-auto">
            <TechTreeNode node={techTreeData} />
          </div>
        </Section>

        {/* System Architecture */}
        <Section title="System Architecture">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <p className="text-zinc-400 leading-relaxed">
                The system follows a loosely coupled, microservices-style design
                to ensure scalability and separation of concerns. The
                architecture bridges a high-performance Python processing layer
                with a responsive React frontend.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Globe className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-zinc-400">
                    <strong className="text-white">Frontend ↔ Backend:</strong>{' '}
                    HTTP REST for authentication and library data management.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Layers className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-zinc-400">
                    <strong className="text-white">Frontend ↔ Python:</strong>{' '}
                    Direct WebSocket connection for low-latency audio streaming.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Server className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-zinc-400">
                    <strong className="text-white">Python ↔ Backend:</strong>{' '}
                    Internal HTTP verification endpoint for secure socket
                    handshakes.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="bg-black border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-md font-mono text-sm">
                  Frontend (React)
                </div>
              </div>
              <div className="flex justify-between px-4 text-zinc-600 text-xs font-mono">
                <span>HTTP</span>
                <span>WebSocket</span>
              </div>
              <div className="flex justify-between gap-4">
                <div className="bg-black border border-zinc-700 text-zinc-300 px-4 py-2 rounded-md font-mono text-sm flex-1 text-center">
                  Backend (Node)
                </div>
                <div className="bg-black border border-zinc-700 text-zinc-300 px-4 py-2 rounded-md font-mono text-sm flex-1 text-center">
                  Python Service
                </div>
              </div>
              <div className="text-center text-zinc-600 text-xs font-mono border-t border-dashed border-zinc-800 pt-2">
                Shared Database (MongoDB)
              </div>
            </div>
          </div>
        </Section>

        {/* Key Workflows */}
        <Section title="Key Workflows">
          <div className="grid gap-6">
            <WorkflowCard
              title="Real-Time Streaming"
              icon={PlayCircle}
              steps={[
                'Player page loads → Frontend opens WebSocket with streamKey + userId',
                'Python server verifies identity via internal API call',
                "User requests chapter → 'play <url> <chapter>' command sent",
                'Python scrapes content & queues TTS task on GPU/CPU',
                'Audio buffered (20s warmup) → Converted to MP3 → Base64 encoded',
                'Streamed to client for immediate playback',
              ]}
            />
            <WorkflowCard
              title="Database & Library"
              icon={Database}
              steps={[
                'User registers/logs in → JWT issued via Node.js backend',
                'Fetch library → Prisma queries MongoDB with relations',
                'Progress tracking → Frontend periodically syncs playback position',
                'State persistence → Resume exactly where you left off across devices',
              ]}
            />
          </div>
        </Section>

        {/* Challenges & Solutions */}
        <Section title="Challenges & Solutions">
          <div className="overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900 text-zinc-400 font-medium">
                <tr>
                  <th className="px-6 py-4">Challenge</th>
                  <th className="px-6 py-4">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black">
                {challenges.map((item, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-zinc-300 font-medium">
                      {item.challenge}
                    </td>
                    <td className="px-6 py-4 text-zinc-400 font-mono text-xs md:text-sm text-emerald-500/90">
                      {item.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Future Enhancements */}
        <Section title="Future Enhancements">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Dynamic worker scaling for more concurrent users',
              'Additional voice options and speed controls',
              'Full cloud deployment with monitoring',
              'Comprehensive testing (unit, integration, E2E)',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <span className="text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-500 mb-6">
            NovelVerse demonstrates modern full-stack development, blending web
            technologies with real-time AI processing.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </footer>
      </main>
    </div>
  )
}
