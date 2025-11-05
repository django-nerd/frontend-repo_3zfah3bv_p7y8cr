import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[60rem] w-[60rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-20 h-[60rem] w-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for projects & collaborations
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Full‑Stack <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">AI Developer</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            I craft intelligent, interactive experiences that merge 3D, web, and machine learning. Explore live AI demos and production‑ready apps below.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90">
              <Rocket className="h-4 w-4" /> View Projects
            </a>
            <a href="#contact" className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10">
              Get in touch
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
