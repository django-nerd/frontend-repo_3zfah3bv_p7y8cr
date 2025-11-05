import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Brain, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'LLM Apps & Agents',
    desc: 'Chat agents, RAG, function calling, and tool-use with robust evals.',
    Icon: Brain,
    gradient: 'from-fuchsia-500/20 to-indigo-500/20',
  },
  {
    title: 'Full‑Stack & Realtime',
    desc: 'Next/Vite + FastAPI, websockets, auth, streaming UX and DX.',
    Icon: Code,
    gradient: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: '3D & Interaction',
    desc: 'Spline + WebGL + motion for playful, immersive experiences.',
    Icon: Sparkles,
    gradient: 'from-amber-400/20 to-pink-500/20',
  },
  {
    title: 'MLOps & Infra',
    desc: 'Datasets, training, vector stores, observability, and CI/CD.',
    Icon: Cpu,
    gradient: 'from-emerald-400/20 to-sky-500/20',
  },
];

export default function TechShowcase() {
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What I Build</h2>
        <p className="mt-3 text-white/70">A blend of intelligent backends, fluid interfaces, and playful 3D.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc, Icon, gradient }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur`}
          >
            <div className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${gradient} blur-3xl`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
