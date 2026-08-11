import React, { useState } from 'react';
import { Server, Cloud, Database, Layout, Code2, Terminal } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

const categoryIcons = {
  Server: <Server className="w-4 h-4 text-sky-400" />,
  Cloud: <Cloud className="w-4 h-4 text-indigo-400" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
  Layout: <Layout className="w-4 h-4 text-amber-400" />
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeCategoryData = skillsCategory[activeCategory];
  const skillCategoryName = activeCategoryData.category;

  const skillTraceData = {
    title: `Skill Competency Matrix: ${skillCategoryName}`,
    endpoint: `GET /api/v1/skills/${skillCategoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    status: 200,
    latency: "10ms",
    traceId: "tr-skills-matrix-2024",
    steps: [
      "1. Request received for skill inventory domain",
      "2. Filtering technical capabilities by category enum",
      "3. Verifying benchmark metrics (Java 21, Spring Boot, Microservices)",
      "4. Returned structured competency dataset"
    ],
    payload: {
      category: skillCategoryName,
      verifiedBy: "Production Deliveries & Client Microservices",
      items: activeCategoryData.skills
    }
  };

  return (
    <section id="skills" className="section relative">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-badge"><Code2 className="w-3.5 h-3.5" /> Skills</span>
          <h2 className="section-title">Backend & System <span className="gradient-text">Skills</span></h2>
          <p className="section-desc">
            Core tech stack, enterprise frameworks, distributed databases, messaging queues, and DevOps tools.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-12">
          {skillsCategory.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border min-h-[44px] ${
                activeCategory === idx
                  ? 'bg-sky-500/12 border-sky-500/35 text-white shadow-sm'
                  : 'bg-white/3 border-white/8 text-slate-400 hover:text-slate-200 hover:border-white/15'
              }`}
            >
              {categoryIcons[cat.icon]}
              <span className="hidden sm:inline">{cat.category}</span>
              <span className="sm:hidden">{cat.category.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        <div className="glass-card card-pad stack-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 card-divider">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl card-inner">
                {categoryIcons[activeCategoryData.icon]}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{skillCategoryName}</h3>
                <p className="text-xs text-sky-400 font-mono mt-0.5">Verified competency</p>
              </div>
            </div>
            <TelemetryButton traceData={skillTraceData} label="Inspect JSON" icon={Terminal} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategoryData.skills.map((skill, idx) => (
              <div key={idx} className="card-inner stack-sm group">
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-sky-300 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-sky-400/80 mt-1 inline-block">{skill.tag}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/4 px-2 py-1 rounded-lg flex-shrink-0">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
