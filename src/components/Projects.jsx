import React from 'react';
import { Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Projects = () => {
  return (
    <section id="projects" className="section relative">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <span className="section-badge"><Layers className="w-3.5 h-3.5" /> Projects</span>
          <h2 className="section-title">Featured <span className="gradient-text">Backend Projects</span></h2>
          <p className="section-desc">
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms built for reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((proj) => (
            <article
              key={proj.id}
              className="glass-card card-pad flex flex-col stack-lg h-full"
            >
              <div className="flex justify-between items-center card-divider">
                <span className="chip chip-cyan text-[11px]">{proj.badge}</span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon w-10 h-10"
                  title="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="stack-md flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">{proj.title}</h3>
                  <p className="text-xs font-mono text-sky-400 mt-3 leading-relaxed">{proj.subtitle}</p>
                </div>

                <p className="text-slate-400 text-sm leading-[1.75]">{proj.description}</p>

                <div className="card-inner stack-sm font-mono text-xs">
                  <span className="text-sky-400 font-semibold block uppercase tracking-wide text-[10px]">
                    Architecture
                  </span>
                  <div className="space-y-2 text-slate-400">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-start gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="capitalize text-slate-500 flex-shrink-0">{key}</span>
                        <span className="text-sky-300/90 text-right leading-snug">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="stack-sm text-sm text-slate-400">
                  {proj.points.slice(0, 3).map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 leading-[1.75]">
                      <span className="text-sky-500 mt-1.5 w-1 h-1 rounded-full bg-sky-500 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/8 mt-auto">
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
                  label="Simulate endpoint"
                  className="w-full text-xs sm:text-sm"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
