import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-white shadow-2xl backdrop-blur">
        <h2 className="text-2xl font-bold sm:text-3xl">Let’s build something intelligent and delightful</h2>
        <p className="mt-2 text-white/70">
          Have a project in mind or want to jam on ideas? I’m open to freelance work, collaborations, and full‑time roles.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Full‑Stack AI Developer</p>
    </section>
  );
}
