import React from 'react';
import { Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#050811] border-t border-b border-slate-800/80 relative">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Layers className="w-4 h-4" />
            <span>ENTERPRISE MICROSERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Backend Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        {/* Projects Cards Grid with Matching Design Tokens & Authentic Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="glass-card flex flex-col justify-between p-6 sm:p-8 space-y-6 border border-slate-700/80 hover:border-cyan-500/60 transition-all group h-full shadow-xl rounded-2xl"
            >
              <div className="space-y-5">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-4">
                  <span className="px-3 py-1 rounded-lg font-mono text-xs font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                    {proj.badge}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
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
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Architecture Key Features Panel */}
                <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono space-y-2.5 shadow-inner">
                  <span className="text-cyan-400 font-bold block text-xs uppercase tracking-wider">
                    ⚡ Backend Architectural Specs
                  </span>
                  <div className="space-y-2 text-slate-300 text-xs">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-cyan-300 font-semibold text-right pl-2 truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Bullet Highlights */}
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {proj.points.slice(0, 3).map((pt, ptIdx) => (
                    <li key={ptIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Action Row */}
              <div className="pt-5 border-t border-slate-800">
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
                  className="w-full justify-center text-xs py-3"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
