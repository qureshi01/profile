import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Building2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Experience = () => {
  return (
    <section id="experience" className="section section-alt relative">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <span className="section-badge"><Briefcase className="w-3.5 h-3.5" /> Experience</span>
          <h2 className="section-title">Professional <span className="gradient-text">Work Experience</span></h2>
          <p className="section-desc">
            Production healthcare ERP microservices, integration pipelines, and full-stack web applications.
          </p>
        </div>

        <div className="stack-xl">
          {experienceData.map((exp, idx) => (
            <article key={idx} className="glass-card card-pad stack-lg">
              {/* Header: Company, Role, Badge & Info Chips */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 card-divider">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{exp.role}</h3>
                      <span className="chip chip-cyan">{exp.badge}</span>
                    </div>
                    <p className="text-slate-400 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="font-mono text-xs text-sky-400 font-medium">{exp.type}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip text-slate-300 bg-white/5 border-white/10 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="chip text-slate-300 bg-white/5 border-white/10 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-base leading-[1.8]">{exp.summary}</p>

              {/* Key Deliverables Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Key Production Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="card-inner flex items-start gap-3.5 text-sm text-slate-300 leading-[1.75]">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6 mt-4">
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
                  label="View Execution Trace"
                  icon={Terminal}
                  className="w-full sm:w-auto"
                />
                <span className="chip chip-emerald text-xs sm:ml-auto">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Production Experience
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
