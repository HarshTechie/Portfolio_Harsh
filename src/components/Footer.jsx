import { FiCode, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile.js';

const { email, links, displayName } = profile;

const socials = [
  { href: links.github, label: 'GitHub', icon: FiGithub },
  { href: links.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  { href: links.leetcode, label: 'LeetCode', icon: FiCode },
  { href: links.resume, label: 'Resume', icon: FiFileText },
  { href: `mailto:${email}`, label: 'Email', icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/8">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-5 py-10 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-text font-display text-[11.5px] font-semibold text-bg">
              HT
            </span>
            <span className="mono text-[12px] text-muted">
              © {new Date().getFullYear()} {displayName} · Designed & built with care
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                  aria-label={s.label}
                  className="group grid h-8 w-8 place-items-center rounded-md border border-border/10 text-muted transition-all duration-200 hover:border-border/20 hover:bg-surface2 hover:text-text"
                >
                  <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
