import { FiArrowUpRight, FiCode, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

const { email, location, replyTime, links } = profile;

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="relative mx-auto max-w-3xl">
          {/* soft ambient lighting behind card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 opacity-60 blur-2xl"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgb(var(--accent) / 0.10), transparent 70%)',
            }}
          />
          <div className="card relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <Reveal>
              <span className="eyebrow justify-center">04 · contact</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section mt-4 text-text">Let's work together.</h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mx-auto mt-4 max-w-[440px] text-[15.5px] leading-[1.75] text-muted/90">
                Open to internships, collaborations, and software engineering opportunities.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${email}`} className="btn btn-primary group">
                  <FiMail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  {email}
                  <FiArrowUpRight className="arrow-x h-4 w-4" />
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

            <Reveal delay={290}>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener"
                  className="btn group !px-3 !py-2 !text-[12.5px]"
                >
                  <FiGithub className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                  GitHub
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="btn group !px-3 !py-2 !text-[12.5px]"
                >
                  <FiLinkedin className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                  LinkedIn
                </a>
                <a
                  href={links.leetcode}
                  target="_blank"
                  rel="noopener"
                  className="btn group !px-3 !py-2 !text-[12.5px]"
                >
                  <FiCode className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                  LeetCode
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mono mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-subtle">
                <span>Based in {location}</span>
                <span className="hidden sm:inline opacity-50">·</span>
                <span>Replies {replyTime}</span>
                <span className="hidden sm:inline opacity-50">·</span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative inline-flex">
                    <span className="dot bg-emerald-500" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                  </span>
                  Open to work
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
