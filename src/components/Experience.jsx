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
    <section id="experience" className="py-24 sm:py-32 bg-[#050810] border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Briefcase className="w-4 h-4" />
            <span>PRODUCTION EXPERIENCE & HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Track record of architecting production healthcare ERP microservices, integration pipelines, and full-stack web applications.
          </p>
        </div>

        {/* Timeline Container with Distinct Spacing Between Experience Boxes */}
        <div className="relative max-w-4xl mx-auto space-y-16 sm:space-y-20">
          
          {/* Vertical Central Timeline Connector */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-1 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 rounded-full"></div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-10 sm:pl-24 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute left-2 sm:left-6 top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_16px_rgba(6,182,212,0.8)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-950"></div>
              </div>

              {/* Experience Box with High Contrast Borders */}
              <div className="glass-card p-8 sm:p-10 space-y-6 border border-slate-700/80 hover:border-cyan-500/60 shadow-2xl">
                
                {/* Top Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-5">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 flex-wrap bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.summary}
                </p>

                {/* Technical Bullet Highlights */}
                <div className="space-y-3 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Telemetry Action Button */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-4">
                  <button
                    onClick={() => handleInspectExperience(exp)}
                    className="btn-telemetry"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Inspect {exp.telemetryEndpoint}</span>
                  </button>

                  <span className="text-xs font-mono text-slate-500">
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
