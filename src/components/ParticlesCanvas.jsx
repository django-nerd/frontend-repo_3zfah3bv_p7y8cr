import React, { useEffect, useRef } from 'react';

// Fullscreen particle field with subtle parallax and mouse attraction
export default function ParticlesCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const densityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    const particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
      init();
    };

    const init = () => {
      particles.length = 0;
      // density scales with screen size
      const base = Math.round((width * height) / 14000);
      densityRef.current = Math.max(40, Math.min(140, base));
      for (let i = 0; i < densityRef.current; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 1.6 + 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background subtle gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.2)');
      grad.addColorStop(1, 'rgba(2, 6, 23, 0.2)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const attract = mouse.current.active;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse attraction/repulsion
        if (attract) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist2 = dx * dx + dy * dy;
          const range = 140;
          if (dist2 < range * range) {
            const force = -range / (dist2 + 40);
            p.vx += force * dx * 0.02;
            p.vy += force * dy * 0.02;
          }
        }

        // Integrate
        p.x += p.vx;
        p.y += p.vy;

        // Bounds wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Friction
        p.vx *= 0.995;
        p.vy *= 0.995;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d2 = dx * dx + dy * dy;
          const maxDist = 120;
          if (d2 < maxDist * maxDist) {
            const alpha = 0.08 * (1 - Math.sqrt(d2) / maxDist);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`; // fuchsia glow
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const alpha = 0.6;
        const color = i % 3 === 0 ? `rgba(56, 189, 248, ${alpha})` : i % 3 === 1 ? `rgba(168, 85, 247, ${alpha})` : `rgba(99, 102, 241, ${alpha})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onEnter = () => (mouse.current.active = true);
    const onLeave = () => (mouse.current.active = false);

    init();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-0 h-full w-full"
      aria-hidden
    />
  );
}
