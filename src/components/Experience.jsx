import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title - Identical to About & Skills */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION EXPERIENCE & HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Track record of architecting production healthcare ERP microservices, integration pipelines, and full-stack web applications.
          </p>
        </div>

        {/* Full-Width Enterprise Panels - Identical card tokens to About & Skills */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 space-y-6">
              
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap pt-2 sm:pt-0">
                  <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {exp.summary}
              </p>

              {/* Deliverables Grid - Identical sub-item tokens to About & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-4">
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
                />

                <span className="text-[11px] font-mono text-slate-400">
                  Status: Verified Production Delivery
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
