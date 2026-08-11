import React, { useState } from 'react';
import { Server, Cloud, Database, Layout, Code2, Terminal } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

const categoryIcons = {
  Server:   <Server   className="w-4 h-4 text-[var(--cyan)]"    />,
  Cloud:    <Cloud    className="w-4 h-4 text-indigo-400"        />,
  Database: <Database className="w-4 h-4 text-emerald-400"       />,
  Layout:   <Layout   className="w-4 h-4 text-amber-400"         />,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = skillsCategory[activeCategory];

  const traceData = {
    title: `Skill Competency Matrix: ${cat.category}`,
    endpoint: `GET /api/v1/skills/${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    status: 200, latency: "10ms", traceId: "tr-skills-matrix-2024",
    steps: [
      "1. Request received for skill inventory domain",
      "2. Filtering by category enum",
      "3. Verifying benchmark metrics",
      "4. Returned structured competency dataset"
    ],
    payload: { category: cat.category, verifiedBy: "Production Deliveries", items: cat.skills }
  };

  return (
    <section id="skills" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono mb-6">
            <Code2 className="w-3.5 h-3.5" /> TECHNICAL STACK MATRIX
          </span>
          <h2>Backend &amp; System <span className="gradient-text">Skills</span></h2>
          <p>Core tech stack, enterprise frameworks, distributed databases, messaging queues, and devops tools.</p>
        </div>

        {/* Category tabs — single row, clean */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsCategory.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-[0.8125rem] font-mono font-semibold border transition-all ${
                activeCategory === i
                  ? 'bg-[var(--bg-hover)] border-[var(--cyan)] text-[var(--cyan-lt)] shadow-[0_0_14px_rgba(6,182,212,0.2)]'
                  : 'bg-[var(--bg-elevated)] border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-default)]'
              }`}
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              {categoryIcons[c.icon]}
              {c.category}
            </button>
          ))}
        </div>

        {/* Main skills card */}
        <div className="card space-y-6">
          {/* Card header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] flex items-center justify-center">
                {categoryIcons[cat.icon]}
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">{cat.category}</h3>
                <p className="text-[11px] font-mono text-[var(--cyan)] mt-0.5">Verified Stack Competency</p>
              </div>
            </div>
            <TelemetryButton traceData={traceData} label="Inspect Skill Telemetry" icon={Terminal} />
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.skills.map((skill, idx) => (
              <div key={idx} className="inner-box space-y-3 group hover:border-[var(--border-accent)] transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm group-hover:text-[var(--cyan-lt)] transition-colors">
                      {skill.name}
                    </p>
                    <span className="text-[10px] font-mono text-[var(--cyan)] font-semibold">{skill.tag}</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] bg-[var(--bg-base)] px-2 py-0.5 rounded border border-[var(--border-subtle)] flex-shrink-0">
                    {skill.level}%
                  </span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
