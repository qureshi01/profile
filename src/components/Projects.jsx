import React from 'react';
import { Layers, Play } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 my-12 sm:my-20 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title - Uncollapsed Margin Spacing */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-md">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE MICROSERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Backend Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition-all group h-full shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-3.5">
                  <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                    {proj.badge}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-colors text-slate-400"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {proj.description}
                </p>

                {/* Architecture Key Features Panel */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-2">
                  <span className="text-slate-400 font-bold block text-[11px] uppercase tracking-wider">
                    ⚡ Backend Architectural Specs
                  </span>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center border-b border-slate-900 pb-1">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-cyan-300 font-semibold pl-2 truncate">{val}</span>
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
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
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
                  icon={Play}
                  className="w-full justify-center text-xs"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
