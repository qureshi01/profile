import React from 'react';
import { FolderGit2, ExternalLink, Play, Server, ShieldCheck, Database, Cpu, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Projects = () => {
  const { triggerTelemetry, isDevToolsActive } = useArchitecture();

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
    <section id="projects" className="py-28 sm:py-36 bg-[#060911] border-t border-b border-slate-800/80 relative my-16">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title with Generous Bottom Margin to Prevent Line Touching */}
        <div className="flex flex-col items-center text-center mb-20 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <Layers className="w-4 h-4" />
            <span>ENTERPRISE MICROSERVICES PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Backend Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        {/* Projects Cards Grid with Generous Spacing and Luxury Card Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-stretch">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="glass-card flex flex-col justify-between p-8 sm:p-10 space-y-8 border border-slate-700/80 hover:border-cyan-500/60 transition-all group h-full shadow-2xl"
            >
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-5">
                  <span className="px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                    {proj.badge}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1.5">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Architecture Key Features Panel with Generous Inner Padding */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs font-mono space-y-3 shadow-inner">
                  <span className="text-cyan-400 font-bold block text-xs uppercase tracking-wider">
                    ⚡ Backend Architectural Specs
                  </span>
                  <div className="space-y-2 text-slate-300 text-xs">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center border-b border-slate-900 pb-2">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-cyan-300 font-semibold text-right pl-2">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Bullet Highlights */}
                <ul className="space-y-2.5 text-xs text-slate-300 list-disc list-inside">
                  {proj.points.slice(0, 3).map((pt, ptIdx) => (
                    <li key={ptIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Action Row */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => handleSimulateProjectRequest(proj)}
                  className={`w-full justify-center text-xs py-3.5 rounded-xl font-mono transition-all flex items-center gap-2 border ${
                    isDevToolsActive
                      ? 'btn-primary'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700'
                  }`}
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>
                    {isDevToolsActive 
                      ? `Simulate ${proj.telemetryPayload.endpoint}`
                      : `API Endpoint: ${proj.telemetryPayload.endpoint}`}
                  </span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
