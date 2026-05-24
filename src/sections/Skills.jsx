import { useState } from 'react';
import { FiCode, FiDatabase, FiLayers, FiServer, FiTool } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import { SectionHeader } from './About.jsx';
import { profile } from '../data/profile.js';
import { techIcon } from '../data/techIcons.jsx';

const iconMap = {
  frontend: FiLayers,
  backend: FiServer,
  database: FiDatabase,
  languages: FiCode,
  tools: FiTool,
};

const groups = profile.skills.map((g) => ({ ...g, icon: iconMap[g.id] || FiTool }));

export default function Skills() {
  const [active, setActive] = useState(groups[0]?.id);
  const activeGroup = groups.find((g) => g.id === active) || groups[0];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          chip="02 · skills"
          title="Technologies I work with."
          sub="A focused stack — React on top, Node and databases underneath, sharpened with DSA and AI tooling."
        />

        {/* Group tabs */}
        <Reveal>
          <div className="mt-12 flex flex-wrap gap-1.5">
            {groups.map((g) => {
              const isActive = active === g.id;
              const Icon = g.icon;
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g.id)}
                  className={`group inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-all duration-300 ease-smooth ${
                    isActive
                      ? 'border-transparent bg-text text-bg shadow-[0_6px_18px_-8px_rgb(0_0_0_/_0.25)]'
                      : 'border-border/10 bg-surface text-muted hover:-translate-y-px hover:border-border/20 hover:text-text'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`} />
                  {g.name}
                  <span className={`mono ml-0.5 text-[10px] ${isActive ? 'text-bg/70' : 'text-subtle'}`}>
                    {String(g.items.length).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills grid */}
        <div
          key={activeGroup.id}
          className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {activeGroup.items.map((t, i) => {
            const { Icon, color } = techIcon(t);
            return (
              <Reveal key={`${activeGroup.id}-${t}`} delay={i * 30}>
                <SkillCard name={t} Icon={Icon} color={color} index={i} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, Icon, color, index }) {
  return (
    <div
      className="card card-interactive glow-on-hover group relative flex h-full min-h-[64px] items-center gap-3 overflow-hidden px-3.5 py-3"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--gx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--gy', `${e.clientY - r.top}px`);
      }}
    >
      <span
        className="relative grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border/10 bg-surface2 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="relative min-w-0 flex-1">
        <div className="truncate text-[13.5px] font-medium text-text">{name}</div>
      </div>
      <span className="mono relative text-[10px] uppercase tracking-[0.16em] text-subtle transition-colors duration-200 group-hover:text-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}
