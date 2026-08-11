import React, { useState } from 'react';
import { User, GraduationCap, Globe, Mail, Phone, MapPin, FileText, CheckCircle2, Terminal, Eye, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';
import { TelemetryButton } from './TelemetryButton';

export const About = () => {
  const { isDevToolsActive } = useArchitecture();
  const [showResumeModal, setShowResumeModal] = useState(false);

  const candidateTraceData = {
    title: "Query Candidate Profile Payload",
    endpoint: "GET /api/v1/candidate/hashim-qureshi",
    status: 200, latency: "14ms", traceId: "tr-resume-query-2024",
    steps: [
      "1. REST API endpoint GET /api/v1/candidate/hashim-qureshi invoked",
      "2. Spring Cache check: Key 'candidate:hashim' [CACHE HIT]",
      "3. SQL query executed on candidate_records table",
      "4. Entity mapped to CandidateDTO with 3+ yrs experience",
      "5. HTTP 200 OK serialized payload returned"
    ],
    payload: {
      name: personalInfo.name, title: personalInfo.role,
      experienceYears: 3,
      primaryStack: ["Java 21", "Spring Boot", "Microservices", "Kafka", "Docker", "PostgreSQL"],
      education: personalInfo.education,
      certifications: ["AiVariant Full Stack Java Developer", "ExcelR / JSpiders Certification"],
      domains: ["Healthcare ERP", "HL7 / FHIR", "NPHIES Insurance", "ZATCA Compliance", "E-Commerce"]
    }
  };

  const attributes = [
    { icon: CheckCircle2, color: 'text-emerald-400', title: 'Spring Boot Microservices', desc: 'Eureka Registry, Cloud Gateway, OpenFeign' },
    { icon: CheckCircle2, color: 'text-[var(--cyan)]',  title: 'Healthcare ERP Compliance', desc: 'HL7 / FHIR, NPHIES, ZATCA' },
    { icon: CheckCircle2, color: 'text-amber-400',       title: 'Async Event Bus',           desc: 'Apache Kafka & ActiveMQ Pipelines' },
    { icon: CheckCircle2, color: 'text-indigo-400',      title: 'High Scale Storage',        desc: 'PostgreSQL · MongoDB (100M+ Records)' },
  ];

  return (
    <section id="about" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section Heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono mb-6">
            <User className="w-3.5 h-3.5" /> ARCHITECTURAL PROFILE
          </span>
          <h2>About <span className="gradient-text">{personalInfo.name}</span></h2>
          <p>Software Engineer specializing in scalable microservices, high-volume transactions, and healthcare compliance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left ── */}
          <div className="lg:col-span-7 space-y-7">

            {/* Bio card */}
            <div className="card space-y-5">
              <div className="flex items-center gap-2.5 border-b border-[var(--border-subtle)] pb-4">
                <Terminal className="w-4 h-4 text-[var(--cyan)]" />
                <h3 className="font-bold text-[var(--text-primary)] font-mono text-sm uppercase tracking-wider">Backend Engineering Focus</h3>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {personalInfo.bio}
              </p>

              {/* Attributes grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                {attributes.map((a, i) => (
                  <div key={i} className="inner-box flex items-start gap-3">
                    <a.icon className={`w-4 h-4 ${a.color} flex-shrink-0 mt-0.5`} />
                    <div>
                      <p className="text-[var(--text-primary)] font-semibold text-[0.8125rem]">{a.title}</p>
                      <p className="text-[var(--text-muted)] text-[11px] mt-0.5 leading-snug">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-3">
                <button onClick={() => setShowResumeModal(true)} className="btn btn-primary">
                  <Eye className="w-4 h-4" /> View Resume
                </button>
                <TelemetryButton traceData={candidateTraceData} label="Inspect Candidate DTO" icon={Terminal} />
              </div>
            </div>

            {/* Education */}
            <div className="space-y-5">
              <h3 className="flex items-center gap-2 font-mono font-bold text-[var(--text-primary)] text-sm">
                <GraduationCap className="w-4 h-4 text-amber-400" /> Education & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="card space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="tag tag-amber">{edu.badge}</span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{edu.period}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-primary)] text-sm leading-snug">{edu.degree}</p>
                      <p className="text-[var(--text-secondary)] text-xs mt-1">{edu.institution}</p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-subtle)]">
                      <p className="text-emerald-400 font-mono font-bold text-[11px]">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Metadata card */}
            <div className="card space-y-4">
              <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
                <User className="w-4 h-4 text-[var(--cyan)]" />
                <h3 className="font-mono font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider">Quick Metadata</h3>
              </div>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { icon: Mail,         color:'text-[var(--cyan)]',   label:'Email',    val: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                  { icon: Phone,        color:'text-emerald-400',      label:'Phone',    val: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                  { icon: MapPin,       color:'text-amber-400',        label:'Location', val: personalInfo.location },
                  { icon: ExternalLink, color:'text-indigo-400',       label:'LinkedIn', val: 'in/hashimqureshic', href: personalInfo.linkedin },
                ].map((row, i) => (
                  <div key={i} className="inner-box flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-[var(--text-muted)]">
                      <row.icon className={`w-3.5 h-3.5 ${row.color}`} />
                      {row.label}
                    </span>
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className={`${row.color} font-semibold hover:underline truncate text-right max-w-[55%]`}>
                        {row.val}
                      </a>
                    ) : (
                      <span className="text-[var(--text-primary)] font-semibold">{row.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages card */}
            <div className="card space-y-4">
              <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
                <Globe className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider">Languages</h3>
              </div>
              <div className="space-y-2">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="inner-box flex items-center justify-between font-mono text-xs">
                    <span className="text-[var(--text-primary)] font-semibold">{lang.name}</span>
                    <span className="text-[var(--text-muted)]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          <div className="bg-[var(--bg-elevated)] border border-[var(--border-accent)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-bold text-[var(--text-primary)] font-mono flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--cyan)]" /> Hashim Qureshi — Resume
              </h3>
              <button onClick={() => setShowResumeModal(false)} className="btn btn-secondary text-xs px-3 py-1.5 min-h-0">✕ Close</button>
            </div>
            <div className="space-y-6">
              {['resume-page1','resume-page2'].map((p, i) => (
                <div key={i}>
                  <p className="text-[10px] font-mono text-[var(--cyan)] mb-2">Page {i+1}</p>
                  <img src={`/assets/${p}.png`} alt={`Resume page ${i+1}`}
                    className="w-full rounded-lg border border-[var(--border-default)] shadow-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
