import React, { useState } from 'react';
import { Code2, Server, Cloud, Database, Layout, Terminal } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

const categoryIcons = {
  Server: <Server className="w-5 h-5 text-sky-400" />,
  Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Layout: <Layout className="w-5 h-5 text-amber-400" />
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeCategoryData = skillsCategory[activeCategory];
  const skillCategoryName = activeCategoryData.category;

  const skillTraceData = {
    title: `Skill Matrix Inspection: ${skillCategoryName}`,
    endpoint: `GET /api/v1/skills/${skillCategoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    status: 200,
    latency: "10ms",
    traceId: `tr-skills-${activeCategory + 1}`,
    steps: [
      "1. API Client dispatched request to Skills inventory domain",
      `2. Category filter enum evaluated: '${skillCategoryName}'`,
      "3. Microservices & framework benchmark metrics fetched",
      "4. JSON serialized competency matrix payload returned"
    ],
    payload: {
      category: skillCategoryName,
      verifiedBy: "Production Deliveries",
      skillsInventory: activeCategoryData.skills
    }
  };

  return (
    <section id="skills" className="section relative">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <span className="section-badge"><Code2 className="w-3.5 h-3.5" /> Skills</span>
          <h2 className="section-title">Backend & System <span className="gradient-text">Skills</span></h2>
          <p className="section-desc">
            Core tech stack, enterprise frameworks, distributed databases, messaging queues, and DevOps tools.
          </p>
        </div>

        {/* Category Tab Badges with distinct margin bottom */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14 sm:mb-16 md:mb-20">
          {skillsCategory.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border min-h-[44px] ${
                activeCategory === idx
                  ? 'bg-sky-500/15 border-sky-500/40 text-white shadow-md'
                  : 'bg-white/3 border-white/8 text-slate-400 hover:text-slate-200 hover:border-white/15'
              }`}
            >
              {categoryIcons[cat.icon]}
              <span className="hidden sm:inline">{cat.category}</span>
              <span className="sm:hidden">{cat.category.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skills Card */}
        <div className="glass-card card-pad stack-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 card-divider pb-5 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl card-inner">
                {categoryIcons[activeCategoryData.icon]}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{skillCategoryName}</h3>
                <p className="text-xs text-sky-400 font-mono mt-0.5">Verified stack competency</p>
              </div>
            </div>
            <TelemetryButton traceData={skillTraceData} label="Inspect JSON" icon={Terminal} />
          </div>

          {/* Skill items grid with clear spacing and badge tag gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {activeCategoryData.skills.map((skill, idx) => (
              <div key={idx} className="card-inner stack-md group p-5">
                <div className="flex justify-between items-start gap-3 pb-3 border-b border-white/8">
                  <div className="min-w-0 space-y-1.5">
                    <h4 className="font-semibold text-white text-base group-hover:text-sky-300 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                    <div className="pt-0.5">
                      <span className="chip chip-cyan text-[10px]">{skill.tag}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg flex-shrink-0">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden mt-3">
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
