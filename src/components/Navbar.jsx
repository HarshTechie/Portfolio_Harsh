import { useEffect, useRef, useState } from 'react';
import { FiCommand, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Position the sliding indicator under the active link
  useEffect(() => {
    if (!navRef.current || !active) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const btn = navRef.current.querySelector(`[data-link="${active}"]`);
    if (!btn) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = btn.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [active, scrolled]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const goto = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'border-b border-border/8 bg-bg/75 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
        style={{ WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none' }}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ease-smooth ${
              scrolled ? 'h-12' : 'h-16'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2.5 text-text"
              aria-label="Home"
            >
              <span className="relative grid h-7 w-7 place-items-center rounded-md bg-text font-display text-[11.5px] font-semibold text-bg transition-transform duration-300 ease-smooth group-hover:scale-[1.05]">
                HT
              </span>
              <span className="hidden font-display text-[14px] font-semibold tracking-tight sm:inline">
                Harsh Tak
              </span>
            </button>

            {/* Center nav */}
            <nav
              ref={navRef}
              className="relative hidden items-center gap-1 md:flex"
            >
              {/* sliding active indicator */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-1 rounded-md bg-surface2 transition-all duration-300 ease-smooth"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
              />
              {links.map((l) => (
                <button
                  key={l.id}
                  data-link={l.id}
                  onClick={() => goto(l.id)}
                  className={`relative z-10 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                    active === l.id ? 'text-text' : 'text-muted hover:text-text'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPalette}
                className="group hidden h-8 items-center gap-2 rounded-lg border border-border/10 bg-surface px-2.5 text-[12px] text-muted transition hover:border-border/20 hover:text-text sm:flex"
                aria-label="Open command palette"
              >
                <FiCommand className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
                <span className="mono">⌘K</span>
              </button>
              <ThemeToggle />
              <button
                className="grid h-8 w-8 place-items-center rounded-lg border border-border/10 bg-surface text-muted md:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-bg/80 backdrop-blur-xl transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute inset-x-0 top-16 origin-top px-5 transition-all duration-300 ease-smooth ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 rounded-2xl border border-border/8 bg-surface p-2 shadow-2xl">
            {links.map((l, i) => (
              <button
                key={l.id}
                onClick={() => goto(l.id)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-left text-[15px] font-medium transition-all duration-300 ease-smooth ${
                  active === l.id ? 'bg-surface2 text-text' : 'text-muted'
                } ${open ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
              >
                <span>{l.label}</span>
                <span className="mono text-[11px] text-subtle">0{i + 1}</span>
              </button>
            ))}
            <button
              onClick={() => { setOpen(false); onOpenPalette?.(); }}
              className={`mt-1 flex items-center gap-2 rounded-lg px-4 py-3 text-left text-[14px] text-muted transition-all duration-300 ease-smooth ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${60 + links.length * 40}ms` : '0ms' }}
            >
              <FiCommand className="h-3.5 w-3.5" />
              Command palette
              <span className="kbd ml-auto">⌘K</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
