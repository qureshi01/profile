import React from 'react';
import { FolderGit2, ExternalLink, Play, Server, ShieldCheck, Database, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Projects = () => {
  const { triggerTelemetry } = useArchitecture();

  const handleSimulateProjectRequest = (project) => {
    triggerTelemetry({
      title: `Project Endpoint Simulator: ${project.title}`,
      endpoint: project.telemetryPayload.endpoint,
      status: project.telemetryPayload.status,
      latency: project.telemetryPayload.latency,
      traceId: project.telemetryPayload.traceId,
      steps: project.telemetryPayload.steps,
      payload: {
        projectId: project.id,
        title: project.title,
        architectureSpecs: project.architecture,
        activeEndpoints: [project.telemetryPayload.endpoint],
        securityModel: "JWT Bearer + Spring Security Filter Chain",
        dbPattern: project.architecture.pattern || "Isolated PostgreSQL Instance"
      }
    });
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE MICROSERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Featured <span className="gradient-text">Backend Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        {/* Projects Cards Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="glass-card flex flex-col justify-between p-7 space-y-6 hover:border-cyan-500/50 transition-all group h-full"
            >
              <div className="space-y-5">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded font-mono text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {proj.badge}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
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
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs font-mono space-y-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                    ⚡ Backend Architectural Specs
                  </span>
                  <div className="space-y-1.5 text-slate-300 text-[11px]">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center border-b border-slate-900/80 pb-1.5">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-cyan-300 font-semibold text-right pl-2">{val}</span>
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

              {/* Bottom Action: Test Microservice Endpoint */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => handleSimulateProjectRequest(proj)}
                  className="btn-primary text-xs w-full justify-center py-3"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Simulate {proj.telemetryPayload.endpoint}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
