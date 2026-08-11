import React, { useState } from 'react';
import { Server, Cloud, Database, Layout, Code2, Terminal } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

const categoryIcons = {
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Layout: <Layout className="w-5 h-5 text-amber-400" />
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
    <section id="skills" className="py-24 sm:py-36 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Code2 className="w-4 h-4" />
            <span>TECHNICAL ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Backend & System <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-lg leading-relaxed font-normal">
            Core tech stack, enterprise frameworks, distributed databases, messaging queues, and devops tools.
          </p>
        </div>

        {/* Category Selector Tabs with Generous Spacing */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {skillsCategory.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all border ${
                activeCategory === idx
                  ? 'bg-cyan-950/90 border-cyan-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {categoryIcons[cat.icon]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Main Glass Card Container */}
        <div className="glass-card p-7 sm:p-12 space-y-10 border border-slate-700/80 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                {categoryIcons[activeCategoryData.icon]}
              </div>
              <div>
                <h3 className="font-bold text-xl sm:text-2xl text-white">
                  {skillCategoryName}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">Verified Stack Competency</p>
              </div>
            </div>

            <TelemetryButton
              traceData={skillTraceData}
              label="Inspect Skill Telemetry JSON"
              icon={Terminal}
            />
          </div>

          {/* Distinct Skill Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activeCategoryData.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3.5 group shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400 mt-0.5 inline-block font-semibold">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
