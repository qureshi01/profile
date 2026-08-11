import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Building2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#070b14] border-t border-b border-slate-800/80 relative">
      
      {/* Background Decorative Halo */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Briefcase className="w-4 h-4" />
            <span>ENTERPRISE PRODUCTION HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
            Track record of architecting production healthcare ERP microservices, integration pipelines, and full-stack web applications.
          </p>
        </div>

        {/* Full-Width Enterprise Experience Panels with Authentic Padding */}
        <div className="space-y-8 sm:space-y-10">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 space-y-6 border border-slate-700/80 hover:border-cyan-500/60 shadow-xl transition-all w-full rounded-2xl"
            >
              
              {/* Company & Role Header Banner */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-slate-800 pb-5">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 shadow-md">
                    <Building2 className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                        {exp.badge}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-slate-300 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono text-cyan-400 font-normal">{exp.type}</span>
                    </p>
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

              </div>

              {/* Summary Description */}
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Key Deliverables Grid (Full 2-Column Responsive Layout) */}
              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold mb-3.5 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Key Production Deliverables & Architectural Achievements</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-slate-300 text-xs sm:text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Row: Telemetry Action & Status */}
              <div className="pt-5 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-3">
                <TelemetryButton
                  traceData={{
                    title: `Experience Log: ${exp.company}`,
                    endpoint: exp.telemetryEndpoint,
                    status: 200,
                    latency: "16ms",
                    traceId: `tr-exp-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
                    steps: [
                      `1. Querying employment record for ${exp.company}`,
                      "2. Spring Security verified recruiter access permissions",
                      `3. Fetching bullet metrics: ${exp.highlights.length} production achievements`,
                      "4. Returned JSON response stream"
                    ],
                    payload: {
                      role: exp.role,
                      company: exp.company,
                      period: exp.period,
                      badge: exp.badge,
                      deliverables: exp.highlights
                    }
                  }}
                  label={`Inspect ${exp.telemetryEndpoint}`}
                  icon={Terminal}
                  className="text-xs py-2.5 px-4"
                />

                <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-lg">
                  ✓ Verified Production Experience
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
