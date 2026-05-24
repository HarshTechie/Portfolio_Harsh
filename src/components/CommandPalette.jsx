import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiFileText,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiSearch,
  FiUser,
  FiCpu,
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { useTheme } from './ThemeProvider.jsx';
import { profile } from '../data/profile.js';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function open(href) { window.open(href, '_blank', 'noopener'); }

export default function CommandPalette({ open: isOpen, onClose }) {
  const [q, setQ] = useState('');
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);
  const { theme, toggle } = useTheme();

  const commands = useMemo(() => ([
    { id: 'nav:hero', label: 'Go to top', shortcut: 'G H', icon: FiHome, kind: 'Navigate', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'nav:about', label: 'About', shortcut: 'G A', icon: FiUser, kind: 'Navigate', action: () => scrollTo('about') },
    { id: 'nav:skills', label: 'Skills', shortcut: 'G S', icon: FiCpu, kind: 'Navigate', action: () => scrollTo('skills') },
    { id: 'nav:projects', label: 'Projects', shortcut: 'G P', icon: FiBox, kind: 'Navigate', action: () => scrollTo('projects') },
    { id: 'nav:contact', label: 'Contact', shortcut: 'G C', icon: FiMail, kind: 'Navigate', action: () => scrollTo('contact') },
    { id: 'theme', label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`, icon: theme === 'dark' ? FiSun : FiMoon, kind: 'Theme', action: toggle },
    { id: 'act:resume', label: 'Open Resume', icon: FiFileText, kind: 'External', action: () => open(profile.links.resume) },
    { id: 'act:github', label: 'Open GitHub', icon: FiGithub, kind: 'External', action: () => open(profile.links.github) },
    { id: 'act:linkedin', label: 'Open LinkedIn', icon: FiLinkedin, kind: 'External', action: () => open(profile.links.linkedin) },
    { id: 'act:leetcode', label: 'Open LeetCode', icon: FiCode, kind: 'External', action: () => open(profile.links.leetcode) },
    { id: 'act:mail', label: 'Send email', icon: FiMail, kind: 'External', action: () => open(`mailto:${profile.email}`) },
  ]), [theme, toggle]);

  useEffect(() => {
    if (isOpen) {
      setQ(''); setIdx(0);
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(s) || c.kind.toLowerCase().includes(s));
  }, [q, commands]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(0, i - 1)); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        filtered[idx]?.action?.();
        onClose?.();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, idx, filtered, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid animate-[fadeIn_180ms_ease-out] place-items-start justify-center bg-black/45 px-4 pt-[14vh] backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="card w-[min(560px,100%)] origin-top scale-[0.985] animate-[scaleIn_220ms_cubic-bezier(0.2,0.8,0.2,1)_forwards] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border/8 px-3.5 py-2.5">
          <FiSearch className="h-4 w-4 text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setIdx(0); }}
            placeholder="Type a command…"
            className="w-full bg-transparent text-sm text-text placeholder:text-subtle focus:outline-none"
          />
          <span className="kbd">esc</span>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-1.5">
          {filtered.length === 0 ? (
            <div className="px-3 py-8 text-center text-sm text-muted">No results.</div>
          ) : (
            filtered.map((c, i) => {
              const Icon = c.icon;
              const isActive = i === idx;
              return (
                <button
                  key={c.id}
                  onMouseEnter={() => setIdx(i)}
                  onClick={() => { c.action?.(); onClose?.(); }}
                  className={`flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left text-[13px] transition ${
                    isActive ? 'bg-surface2 text-text' : 'text-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="flex-1">{c.label}</span>
                  <span className="mono text-[10px] uppercase tracking-wider text-subtle">{c.kind}</span>
                  {c.shortcut && <span className="kbd">{c.shortcut}</span>}
                  <FiArrowRight className={`h-3.5 w-3.5 ${isActive ? 'text-text' : 'text-subtle'}`} />
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border/8 px-3 py-2 text-[10.5px] text-muted">
          <span className="mono">⌘K · global</span>
          <span className="mono">↑↓ · ↵</span>
        </div>
      </div>
    </div>
  );
}
