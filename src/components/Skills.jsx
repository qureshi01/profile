import React, { useState } from 'react';
import { Server, Cloud, Database, Layout, Terminal, CheckCircle2, Code2 } from 'lucide-react';
import { skillsCategory } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

const categoryIcons = {
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Layout: <Layout className="w-5 h-5 text-amber-400" />
};

export const Skills = () => {
  const { triggerTelemetry } = useArchitecture();
  const [activeCategory, setActiveCategory] = useState(0);

  const handleInspectSkillPayload = (categoryName) => {
    triggerTelemetry({
      title: `Skill Competency Matrix: ${categoryName}`,
      endpoint: `GET /api/v1/skills/${categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
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
        category: categoryName,
        verifiedBy: "Production Deliveries & Client Microservices",
        items: skillsCategory[activeCategory].skills
      }
    });
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Backend & System <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Core tech stack, enterprise frameworks, distributed databases, messaging queues, and devops tools.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {skillsCategory.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all border ${
                activeCategory === idx
                  ? 'bg-cyan-950/80 border-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {categoryIcons[cat.icon]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid Display */}
        <div className="glass-card p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                {categoryIcons[skillsCategory[activeCategory].icon]}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  {skillsCategory[activeCategory].category}
                </h3>
                <p className="text-xs text-slate-400 font-mono">Verified Stack Competency</p>
              </div>
            </div>

            <button
              onClick={() => handleInspectSkillPayload(skillsCategory[activeCategory].category)}
              className="btn-telemetry"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Inspect Skill Telemetry JSON</span>
            </button>
          </div>

          {/* Skill Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategory[activeCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400 mt-0.5 inline-block">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700"
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
