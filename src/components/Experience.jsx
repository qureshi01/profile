import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Server, ShieldCheck, Activity } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Experience = () => {
  const { triggerTelemetry } = useArchitecture();

  const handleInspectExperience = (exp) => {
    triggerTelemetry({
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
    });
  };

  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
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

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          
          {/* Vertical Central Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800"></div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-10 sm:pl-20 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950"></div>
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 space-y-5">
                
                {/* Top Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.summary}
                </p>

                {/* Technical Bullet Highlights */}
                <div className="space-y-2.5 pt-1">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Telemetry Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center">
                  <button
                    onClick={() => handleInspectExperience(exp)}
                    className="btn-telemetry"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Inspect {exp.telemetryEndpoint}</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    Status: Verified Production Delivery
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
