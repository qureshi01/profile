import React from 'react';
import { Layers, Play } from 'lucide-react';
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
            Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((proj) => (
            <article
              key={proj.id}
              className="glass-card card-pad flex flex-col justify-between stack-lg h-full"
            >
              <div className="stack-md">
                {/* Header row: Badge + GitHub link */}
                <div className="flex justify-between items-center card-divider pb-4">
                  <span className="chip chip-cyan">{proj.badge}</span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-icon"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{proj.title}</h3>
                  <p className="text-xs font-mono text-sky-400 mt-2 leading-relaxed">{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-[1.8]">{proj.description}</p>

                {/* Architecture Specifications */}
                <div className="card-inner stack-sm font-mono text-xs">
                  <span className="text-sky-400 font-semibold block uppercase tracking-wider text-[11px] pb-1 border-b border-white/8">
                    ⚡ Architecture Specifications
                  </span>
                  <div className="space-y-2.5 pt-1">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-start gap-4 text-xs">
                        <span className="capitalize text-slate-400 flex-shrink-0 font-medium">{key}:</span>
                        <span className="text-sky-300 text-right font-medium leading-snug">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ALL Bullet Points rendered cleanly */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3">Key Implementation Details</h4>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {proj.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-3 leading-[1.7]">
                        <span className="text-sky-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-6 border-t border-white/8 mt-6 flex flex-wrap items-center gap-3">
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
                      dbPattern: proj.architecture.pattern || "Isolated Database per Service"
                    }
                  }}
                  label="Simulate API Endpoint"
                  icon={Play}
                  className="flex-1"
                />
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs sm:text-sm font-mono"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
