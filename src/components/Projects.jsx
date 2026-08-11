import React from 'react';
import { Layers, Server, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Projects = () => {
  return (
    <section id="projects" className="py-14 sm:py-20 bg-[#050811] border-t border-b border-slate-800/80 relative">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE MICROSERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Backend Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-base leading-relaxed font-normal">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        {/* Projects Cards Grid: Clean, Uncollapsed Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="glass-card flex flex-col justify-between p-5 sm:p-7 space-y-5 border border-slate-700/80 hover:border-cyan-500/60 transition-all group h-full shadow-lg rounded-2xl"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-3.5">
                  <span className="px-3 py-1 rounded-lg font-mono text-[11px] font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                    {proj.badge}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Architectural Specs: Left Accent Border (No Nested Inner Box!) */}
                <div className="border-l-2 border-cyan-500/60 pl-3.5 py-1 space-y-1.5 font-mono text-xs">
                  <span className="text-cyan-400 font-bold block text-[11px] uppercase tracking-wider">
                    ⚡ Key Architectural Specs
                  </span>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    {Object.entries(proj.architecture).slice(0, 3).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-cyan-300 font-medium pl-2 truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Highlights */}
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {proj.points.slice(0, 2).map((pt, ptIdx) => (
                    <li key={ptIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-slate-800">
                <TelemetryButton
                  traceData={{
                    title: `Project Endpoint Simulator: ${proj.title}`,
                    endpoint: proj.telemetryPayload.endpoint,
                    status: proj.telemetryPayload.status,
                    latency: proj.telemetryPayload.latency,
                    traceId: proj.telemetryPayload.traceId,
                    steps: proj.telemetryPayload.steps,
                    payload: {
                      projectId: proj.id,
                      title: proj.title,
                      architectureSpecs: proj.architecture,
                      activeEndpoints: [proj.telemetryPayload.endpoint],
                      securityModel: "JWT Bearer + Spring Security Filter Chain",
                      dbPattern: proj.architecture.pattern || "Isolated PostgreSQL Instance"
                    }
                  }}
                  label={`POST ${proj.telemetryPayload.endpoint.replace('POST ', '')}`}
                  className="w-full justify-center text-xs py-2.5"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
