import { useState } from 'react';
import { FiArrowUpRight, FiGithub, FiImage } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { SectionHeader } from './About.jsx';
import { profile } from '../data/profile.js';

const { projects } = profile;

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          chip="03 · projects"
          title="Selected work."
          sub="A mix of full-stack apps, frontend builds, and product experiments — all shipped and live."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <ProjectCard p={p} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }) {
  return (
    <article className="card card-interactive group relative flex h-full flex-col overflow-hidden">
      <PreviewArea p={p} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Index + Featured (neutral) */}
        <div className="mono flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-subtle">
          <span>{String(index).padStart(2, '0')}</span>
          {p.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border/12 bg-surface2 px-1.5 py-px text-[9.5px] font-medium tracking-[0.12em] text-muted">
              <span aria-hidden className="h-1 w-1 rounded-full bg-muted/60" />
              Featured
            </span>
          )}
        </div>

        {/* Title + external links */}
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="font-display text-[21px] font-semibold leading-tight tracking-[-0.02em] text-text">
            {p.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener"
                aria-label={`${p.title} live demo`}
                onClick={(e) => e.stopPropagation()}
                className="grid h-8 w-8 place-items-center rounded-md border border-border/10 text-muted transition-all duration-200 hover:border-border/18 hover:bg-surface2 hover:text-text"
              >
                <FiArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener"
                aria-label={`${p.title} source code`}
                onClick={(e) => e.stopPropagation()}
                className="grid h-8 w-8 place-items-center rounded-md border border-border/10 text-muted transition-all duration-200 hover:border-border/18 hover:bg-surface2 hover:text-text"
              >
                <FiGithub className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Metadata row — Role • Year • Meta */}
        <div className="mono mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10.5px] uppercase tracking-[0.18em] text-subtle">
          {p.role && <span>{p.role}</span>}
          {p.year && (
            <>
              <span aria-hidden className="text-border/40">•</span>
              <span>{p.year}</span>
            </>
          )}
          {p.meta && (
            <>
              <span aria-hidden className="text-border/40">•</span>
              <span>{p.meta}</span>
            </>
          )}
        </div>

        <p className="mt-3.5 text-[14px] leading-[1.65] text-muted">{p.summary}</p>

        {/* CTA row + tech stack */}
        <div className="mt-auto pt-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()}
                className="group/cta inline-flex items-center gap-1.5 rounded-md bg-text px-2.5 py-1.5 text-[11.5px] font-medium text-bg transition-all duration-200 hover:-translate-y-px hover:bg-text/90"
              >
                Live Demo
                <FiArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-md border border-border/10 bg-surface px-2.5 py-1.5 text-[11.5px] font-medium text-muted transition-all duration-200 hover:-translate-y-px hover:border-border/18 hover:bg-surface2 hover:text-text"
              >
                <FiGithub className="h-3 w-3" />
                Source
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span
                key={t}
                className="mono rounded-md border border-border/8 bg-surface2 px-1.5 py-0.5 text-[10.5px] text-muted transition-colors duration-200 group-hover:border-border/14"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PreviewArea({ p }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = p.image && !imgFailed;

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border/8 bg-surface2">
      {/* Placeholder layer */}
      {!showImage && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-surface to-surface2"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'linear-gradient(rgb(var(--border) / 0.10) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border) / 0.10) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage:
                'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/10 bg-surface text-muted/60">
              <FiImage className="h-4 w-4" />
            </div>
            <div className="mt-3 font-display text-[18px] font-semibold tracking-[-0.015em] text-text/90">
              {p.title}
            </div>
            <div className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-subtle">
              {p.role} {p.year ? `· ${p.year}` : ''}
            </div>
          </div>
        </>
      )}

      {/* Real screenshot — subtle zoom + tiny brightness dim on hover */}
      {p.image && (
        <img
          src={p.image}
          alt={`${p.title} homepage preview`}
          loading="lazy"
          decoding="async"
          onError={() => setImgFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-[700ms] ease-smooth group-hover:scale-[1.025] group-hover:brightness-[0.94] ${
            imgFailed ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Hover vignette — subtle dark gradient at bottom (no flashy colors) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-0 transition-opacity duration-500 ease-smooth group-hover:opacity-100"
      />

      {/* Hover caption — clean bottom strip with title + meta + "View →" hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1 items-end justify-between gap-3 px-5 pb-4 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        <div className="min-w-0">
          <div className="font-display text-[15px] font-semibold tracking-[-0.015em] text-white">
            {p.title}
          </div>
          <div className="mono mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/70">
            {p.role}
            {p.year ? ` · ${p.year}` : ''}
          </div>
        </div>
        <span className="mono inline-flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
          View
          <FiArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
