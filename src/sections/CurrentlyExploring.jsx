import { FiActivity } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

export default function CurrentlyExploring() {
  const items = profile.currentlyExploring || [];
  if (items.length === 0) return null;

  return (
    <section className="relative py-10 sm:py-14">
      <div className="container-x">
        <Reveal>
          <div className="card relative flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border/10 bg-surface2 text-accent">
                <FiActivity className="h-4 w-4" />
              </span>
              <div>
                <div className="mono text-[10.5px] uppercase tracking-[0.18em] text-subtle">
                  Currently exploring
                </div>
                <div className="mt-0.5 font-display text-[14px] font-semibold tracking-[-0.01em] text-text">
                  What I'm focused on right now
                </div>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-border/8 sm:block" />

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
              {items.map((it, i) => (
                <li key={it} className="flex items-center gap-2">
                  <span aria-hidden className="mono text-[10px] text-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
