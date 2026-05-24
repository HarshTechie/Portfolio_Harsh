import { useEffect, useRef } from 'react';

/**
 * Lightweight IO-based reveal — no framer-motion runtime cost.
 * Usage: <Reveal><h2>…</h2></Reveal>
 *        <Reveal delay={80}>…</Reveal>
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', once = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = setTimeout(() => el.classList.add('in'), delay);
            if (once) obs.disconnect();
            return () => clearTimeout(t);
          } else if (!once) {
            el.classList.remove('in');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, once]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
