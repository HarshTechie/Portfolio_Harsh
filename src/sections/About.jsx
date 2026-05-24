import { FiMail, FiMapPin, FiClock, FiZap } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

const { about, timeline, location, email, availability, replyTime } = profile;

const infoRows = [
  { icon: FiMapPin, label: 'Based in', value: location },
  { icon: FiMail, label: 'Email', value: email, href: `mailto:${email}` },
  { icon: FiZap, label: 'Status', value: availability, accent: true },
  { icon: FiClock, label: 'Replies in', value: replyTime },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader chip="01 · about" title="Building, learning, and evolving." />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="max-w-[460px] text-[15.5px] leading-[1.8] text-muted/90 sm:text-[16px]">
                {about}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <dl className="mt-10 max-w-[460px] overflow-hidden rounded-xl border border-border/8 bg-surface">
                {infoRows.map((row, i) => {
                  const Icon = row.icon;
                  const Tag = row.href ? 'a' : 'div';
                  return (
                    <Tag
                      key={row.label}
                      {...(row.href
                        ? { href: row.href, className: 'group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-surface2' }
                        : { className: 'flex items-center gap-3 px-4 py-3.5' })}
                      style={i > 0 ? { borderTop: '1px solid rgb(var(--border) / 0.08)' } : undefined}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-border/10 bg-surface2 text-muted">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mono text-[10.5px] uppercase tracking-[0.16em] text-subtle">{row.label}</div>
                        <div className="mt-0.5 truncate text-[13.5px] text-text">
                          {row.accent ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="relative inline-flex">
                                <span className="dot bg-emerald-500" />
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                              </span>
                              {row.value}
                            </span>
                          ) : (
                            row.value
                          )}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-8 border-l border-border/8 pl-7">
              {timeline.map((m, i) => (
                <Reveal key={`${m.year}-${m.title}`} delay={i * 70}>
                  <li className="relative">
                    {/* Timeline node */}
                    <span
                      className={`absolute -left-[31px] top-2 grid h-2.5 w-2.5 place-items-center rounded-full ${
                        m.live ? 'bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.18)]' : 'bg-border/30'
                      }`}
                    >
                      {m.live && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                      )}
                    </span>

                    <div className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-subtle">
                      <span>{m.year}</span>
                      {m.live && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/10 px-1.5 py-px text-[9.5px] font-medium tracking-[0.12em] text-accent">
                          <span className="relative inline-flex">
                            <span className="dot bg-accent" />
                            <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
                          </span>
                          Now
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 font-display text-[18.5px] font-semibold tracking-[-0.015em] text-text">
                      {m.title}
                    </div>
                    <p className="mt-2 max-w-[520px] text-[14.5px] leading-[1.75] text-muted/90">
                      {m.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ chip, title, sub }) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <span className="eyebrow">{chip}</span>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="h-section mt-4 text-text">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.75] text-muted/90">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
