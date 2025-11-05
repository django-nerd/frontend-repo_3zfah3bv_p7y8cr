import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Realtime AI Pair‑Programmer',
    desc: 'Streaming code suggestions, tool execution, and context from your repo.',
    tags: ['LLM', 'Agents', 'Streaming'],
    links: { site: '#', repo: '#' },
    accent: 'from-fuchsia-500/30 to-cyan-400/30',
  },
  {
    title: 'Multimodal Chat Playground',
    desc: 'Image + text understanding, RAG over docs, and memory.',
    tags: ['Vision', 'RAG', 'ChatUI'],
    links: { site: '#', repo: '#' },
    accent: 'from-indigo-500/30 to-teal-400/30',
  },
  {
    title: '3D Model Explorer',
    desc: 'A Spline‑powered gallery with physics, hotspots and motion.',
    tags: ['3D', 'WebGL', 'Spline'],
    links: { site: '#', repo: '#' },
    accent: 'from-amber-400/30 to-pink-400/30',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 text-white/70">Interactive demos that showcase my approach to AI‑first product design.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur"
          >
            <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl transition group-hover:scale-110`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs">
                <Rocket className="h-3 w-3" /> Live demo
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.links.site} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:bg-white/10">
                  <Globe className="h-4 w-4" /> Site
                </a>
                <a href={p.links.repo} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:bg-white/10">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
