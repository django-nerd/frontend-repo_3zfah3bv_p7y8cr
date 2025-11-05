import React, { useEffect, useRef, useState } from 'react';

// Glowing cursor-following aura that adds an indie vibe
export default function CursorAura() {
  const auraRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = auraRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    let raf;
    const animate = () => {
      // smooth lerp
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      if (el) {
        el.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className={`pointer-events-none fixed left-0 top-0 z-10 h-[300px] w-[300px] rounded-full opacity-70 blur-3xl transition-opacity ${
        visible ? 'opacity-70' : 'opacity-0'
      }`}
      style={{
        background:
          'radial-gradient(closest-side, rgba(168,85,247,0.35), rgba(56,189,248,0.25), rgba(0,0,0,0))',
        mixBlendMode: 'screen',
      }}
      aria-hidden
    />
  );
}
