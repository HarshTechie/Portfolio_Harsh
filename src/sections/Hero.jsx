import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiArrowDown, FiGithub, FiLinkedin, FiFileText, FiCode } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

const { hero, links, availability, photo, displayName, location } = profile;

export default function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const parallaxRef = useRef(null);
  const rafId = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  // Mouse parallax — listens on window, applies subtle translate to photo
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (reduce || isTouch) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;  // ±7px
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      target.current = { x, y };
    };
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-24 sm:pt-28">
      {/* Soft spotlight + dot grid layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="spotlight" />
        <div className="absolute inset-0 dot-grid opacity-[0.35] dark:opacity-[0.5]" />
      </div>

      <div className="container-x w-full lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-center gap-12 py-10 sm:py-14 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          {/* LEFT — text column */}
          <div className="max-w-[600px] lg:col-span-7 lg:max-w-none">
            <Reveal>
              <span className="chip transition-colors duration-200 hover:border-border/20">
                <span className="relative inline-flex">
                  <span className="dot bg-emerald-500" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                </span>
                <span>{availability}</span>
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-text">
                {/* Line 1: name — dominant */}
                <span
                  className="block font-display font-semibold tracking-[-0.045em] text-text"
                  style={{ fontSize: 'clamp(2.5rem, 6.4vw, 4.5rem)', lineHeight: 1 }}
                >
                  {hero.lines[0]}
                </span>
                {/* Line 2 — supporting */}
                <span
                  className="mt-4 block font-display font-medium tracking-[-0.02em] text-muted"
                  style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', lineHeight: 1.2 }}
                >
                  {hero.lines[1]}
                </span>
                {/* Line 3 — supporting */}
                <span
                  className="mt-1.5 block font-display font-medium tracking-[-0.02em] text-muted"
                  style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', lineHeight: 1.2 }}
                >
                  {hero.lines[2]}
                </span>
              </h1>
            </Reveal>

            {/* Static role identifier — subtle, professional */}
            <Reveal delay={160}>
              <div className="mt-7 flex items-center gap-3">
                <span className="mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-subtle/80">
                  Role
                </span>
                <span aria-hidden className="h-px w-6 bg-border/20" />
                <span className="text-[14.5px] font-medium tracking-[-0.005em] text-text">
                  Aspiring Software Engineer
                </span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                {hero.intro}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn btn-primary group"
                >
                  View work
                  <FiArrowRight className="arrow-x h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn"
                >
                  Get in touch
                </a>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noopener"
                  className="btn group"
                >
                  <FiFileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-8 flex items-center gap-1.5">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/10 bg-surface text-muted transition-all duration-200 hover:-translate-y-px hover:border-border/20 hover:text-text"
                >
                  <FiGithub className="h-4 w-4" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/10 bg-surface text-muted transition-all duration-200 hover:-translate-y-px hover:border-border/20 hover:text-text"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={links.leetcode}
                  target="_blank"
                  rel="noopener"
                  aria-label="LeetCode"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/10 bg-surface text-muted transition-all duration-200 hover:-translate-y-px hover:border-border/20 hover:text-text"
                >
                  <FiCode className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — photo card */}
          <div className="lg:col-span-5">
            <Reveal delay={160}>
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
                {/* soft ambient glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 opacity-70 blur-3xl"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 60% at 50% 50%, rgb(var(--accent) / 0.14), transparent 70%)',
                  }}
                />

                {/* Float wrapper (vertical sway) */}
                <div className="animate-float-soft will-change-transform">
                  {/* Parallax wrapper (mouse tilt) */}
                  <div
                    ref={parallaxRef}
                    className="will-change-transform"
                    style={{ transition: 'transform 120ms linear' }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border/10 bg-surface shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] ring-1 ring-border/5">
                      {/* Photo container */}
                      <div className="relative aspect-[4/5] overflow-hidden">
                        {/* placeholder while loading / on failure */}
                        <div
                          aria-hidden
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            photoLoaded && !photoFailed ? 'opacity-0' : 'opacity-100'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface2" />
                          <div
                            className="absolute inset-0 opacity-60"
                            style={{
                              backgroundImage: 'radial-gradient(rgb(var(--border) / 0.28) 1px, transparent 1px)',
                              backgroundSize: '18px 18px',
                              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
                              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
                            }}
                          />
                          {photoFailed && (
                            <div className="absolute inset-0 grid place-items-center px-6 text-center">
                              <div>
                                <div className="font-display text-[60px] font-semibold text-muted/40">HT</div>
                                <div className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-subtle">
                                  add public/profile.jpg
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {photo && (
                          <img
                            src={photo}
                            alt={`${displayName} portrait`}
                            loading="eager"
                            decoding="async"
                            onLoad={() => setPhotoLoaded(true)}
                            onError={() => setPhotoFailed(true)}
                            className={`relative h-full w-full object-cover object-center transition-opacity duration-700 ${
                              photoLoaded && !photoFailed ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        )}

                        {/* Bottom gradient + caption */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg/80 via-bg/30 to-transparent"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-3.5">
                          <div>
                            <div className="font-display text-[14px] font-semibold tracking-[-0.015em] text-text">
                              {displayName}
                            </div>
                            <div className="mono mt-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                              {location}
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500 backdrop-blur-sm">
                            <span className="relative inline-flex">
                              <span className="dot bg-emerald-500" />
                              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                            </span>
                            Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <Reveal delay={400}>
          <div className="mb-8 mt-2 flex items-center gap-2 text-[11px] text-subtle lg:mb-12">
            <FiArrowDown className="h-3 w-3 animate-bounce [animation-duration:2s]" />
            <span className="mono uppercase tracking-[0.2em]">scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
