import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Experience = () => {
  return (
    <section id="experience" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono mb-6">
            <Briefcase className="w-3.5 h-3.5" /> ENTERPRISE PRODUCTION HISTORY
          </span>
          <h2>Professional <span className="gradient-text">Experience</span></h2>
          <p>Track record of architecting production healthcare ERP microservices, integration pipelines, and full-stack applications.</p>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="card space-y-5">

              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[var(--border-subtle)] pb-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--cyan)] flex-shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-extrabold text-[var(--text-primary)] text-lg sm:text-xl leading-tight">{exp.role}</h3>
                      <span className="tag tag-cyan">{exp.badge}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm font-semibold mt-1">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inner-box flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] py-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {exp.period}
                  </span>
                  <span className="inner-box flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] py-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="inner-box flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <TelemetryButton
                  traceData={{
                    title: `Experience Log: ${exp.company}`,
                    endpoint: exp.telemetryEndpoint,
                    status: 200, latency: "16ms",
                    traceId: `tr-exp-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
                    steps: [
                      `1. Querying employment record for ${exp.company}`,
                      "2. Spring Security verified recruiter access",
                      `3. Fetching ${exp.highlights.length} production achievements`,
                      "4. Returned JSON response stream"
                    ],
                    payload: { role: exp.role, company: exp.company, period: exp.period, badge: exp.badge, deliverables: exp.highlights }
                  }}
                  label={`Trace ${exp.telemetryEndpoint}`}
                  icon={Terminal}
                />
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-500/25 px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Verified Production
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
