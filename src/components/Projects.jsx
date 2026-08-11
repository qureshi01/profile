import React from 'react';
import { Layers, Play } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Projects = () => {
  return (
    <section id="projects" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono mb-6">
            <Layers className="w-3.5 h-3.5" /> ENTERPRISE MICROSERVICES PORTFOLIO
          </span>
          <h2>Featured <span className="gradient-text">Backend Projects</span></h2>
          <p>Microservices architectures, RESTful API ecosystems, and healthcare transaction platforms engineered for high reliability.</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectsData.map((proj) => (
            <div key={proj.id} className="card flex flex-col justify-between space-y-5 group h-full">

              {/* Top content */}
              <div className="space-y-4">

                {/* Badge + GitHub row */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                  <span className="tag tag-cyan">{proj.badge}</span>
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    className="w-8 h-8 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--cyan)] hover:border-[var(--border-accent)] transition-all"
                    title="View GitHub Repo">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-lg group-hover:text-[var(--cyan-lt)] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1">{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  {proj.description}
                </p>

                {/* Architecture specs */}
                <div className="inner-box space-y-2">
                  <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-bold">⚡ Architecture Specs</p>
                  <div className="space-y-1.5">
                    {Object.entries(proj.architecture).map(([key, val], aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-[var(--text-muted)] capitalize">{key}:</span>
                        <span className="text-[var(--cyan)] font-semibold truncate ml-2">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {proj.points.slice(0, 3).map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--cyan)] mt-0.5 flex-shrink-0">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom action */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <TelemetryButton
                  traceData={{
                    title: `Project Simulator: ${proj.title}`,
                    endpoint: proj.telemetryPayload.endpoint,
                    status: proj.telemetryPayload.status,
                    latency: proj.telemetryPayload.latency,
                    traceId: proj.telemetryPayload.traceId,
                    steps: proj.telemetryPayload.steps,
                    payload: {
                      projectId: proj.id, title: proj.title,
                      architectureSpecs: proj.architecture,
                      activeEndpoints: [proj.telemetryPayload.endpoint],
                      securityModel: "JWT Bearer + Spring Security",
                    }
                  }}
                  label={`Run ${proj.telemetryPayload.endpoint.replace('POST ', '')}`}
                  icon={Play}
                  className="w-full justify-center"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
