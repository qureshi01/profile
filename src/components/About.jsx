import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { User, GraduationCap, Globe, Mail, Phone, MapPin, FileText, CheckCircle2, Terminal, Eye, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const About = () => {
  const { triggerTelemetry, isDevToolsActive } = useArchitecture();
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleInspectResumePayload = () => {
    triggerTelemetry({
      title: "Query Candidate Profile Payload",
      endpoint: "GET /api/v1/candidate/hashim-qureshi",
      status: 200,
      latency: "14ms",
      traceId: "tr-resume-query-2024",
      steps: [
        "1. REST API endpoint GET /api/v1/candidate/hashim-qureshi invoked",
        "2. Spring Cache check: Key 'candidate:hashim' [CACHE HIT]",
        "3. SQL query executed on candidate_records database table",
        "4. Entity mapped to CandidateDTO with 3+ years experience & certifications",
        "5. HTTP 200 OK serialized payload returned to client"
      ],
      payload: {
        name: personalInfo.name,
        title: personalInfo.role,
        experienceYears: 3,
        primaryStack: ["Java 21", "Spring Boot", "Microservices", "Kafka", "Docker", "PostgreSQL"],
        education: personalInfo.education,
        certifications: ["AiVariant Full Stack Java Developer", "ExcelR / JSpiders Certification"],
        domains: ["Healthcare ERP", "HL7 / FHIR Standards", "NPHIES Insurance", "ZATCA Compliance", "E-Commerce"]
      }
    });
  };

  const highlights = [
    { title: 'Spring Boot Microservices', desc: 'Eureka, Cloud Gateway, OpenFeign', color: 'text-emerald-400' },
    { title: 'Healthcare ERP Compliance', desc: 'HL7 / FHIR, NPHIES, ZATCA', color: 'text-sky-400' },
    { title: 'Async Event Bus', desc: 'Apache Kafka & ActiveMQ', color: 'text-amber-400' },
    { title: 'High Scale Storage', desc: 'PostgreSQL, MongoDB (100M+ records)', color: 'text-indigo-400' },
  ];

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-sky-400' },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-emerald-400' },
    { icon: MapPin, label: 'Location', value: personalInfo.location, color: 'text-amber-400' },
    { icon: ExternalLink, label: 'LinkedIn', value: 'in/hashimqureshic', href: personalInfo.linkedin, color: 'text-indigo-400' },
  ];

  return (
    <section id="about" className="section section-alt relative">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <span className="section-badge"><User className="w-3.5 h-3.5" /> About</span>
          <h2 className="section-title">About <span className="gradient-text">Hashim Qureshi</span></h2>
          <p className="section-desc">
            Software Engineer specializing in scalable microservices, high-volume transactions, and healthcare system compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 stack-lg">
            <div className="glass-card card-pad stack-lg">
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3 card-divider">
                <Terminal className="w-5 h-5 text-sky-400" />
                Backend Engineering Focus
              </h3>

              <p className="text-slate-300 leading-[1.8] text-base md:text-lg">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div key={item.title} className="card-inner flex items-start gap-3.5">
                    <CheckCircle2 className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="btn-group border-t border-white/8 pt-6 mt-2">
                <button onClick={() => setShowResumeModal(true)} className="btn-primary text-sm">
                  <Eye className="w-4 h-4" />
                  View Resume
                </button>
                {isDevToolsActive && (
                  <button onClick={handleInspectResumePayload} className="btn-telemetry">
                    <Terminal className="w-4 h-4" />
                    Inspect Payload
                  </button>
                )}
              </div>
            </div>

            <div className="stack-md">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                Education & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="glass-card card-pad flex flex-col justify-between stack-md">
                    <div className="stack-sm">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="chip chip-amber text-[11px]">{edu.badge}</span>
                        <span className="text-xs text-slate-500 font-mono">{edu.period}</span>
                      </div>
                      <h4 className="font-semibold text-white leading-snug">{edu.degree}</h4>
                      <p className="text-sm text-slate-400">{edu.institution}</p>
                    </div>
                    <p className="text-xs font-mono text-emerald-400 font-semibold pt-4 border-t border-white/8">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 stack-lg">
            <div className="glass-card card-pad stack-md">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 card-divider">
                <User className="w-5 h-5 text-sky-400" />
                Contact Info
              </h3>
              <div className="stack-sm">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="card-inner flex items-center justify-between gap-4 py-4">
                    <span className="text-slate-500 flex items-center gap-2.5 text-sm">
                      <Icon className={`w-4 h-4 ${color}`} />
                      {label}
                    </span>
                    {href ? (
                      <a href={href} target={label === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer" className="text-sky-300 hover:underline text-xs sm:text-sm font-medium truncate">
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-200 text-xs sm:text-sm font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card card-pad stack-md">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 card-divider">
                <Globe className="w-5 h-5 text-emerald-400" />
                Languages
              </h3>
              <div className="stack-sm">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="card-inner flex justify-between items-center gap-4 py-3.5">
                    <span className="text-white font-medium text-sm">{lang.name}</span>
                    <span className="text-slate-500 text-xs text-right">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResumeModal && createPortal(
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="modal-panel modal-panel-lg stack-md" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-400" />
                Resume
              </h3>
              <button onClick={() => setShowResumeModal(false)} className="nav-help-btn">✕</button>
            </div>
            <div className="stack-lg">
              <img src="/assets/resume-page1.png" alt="Resume Page 1" className="w-full rounded-xl border border-white/10" />
              <img src="/assets/resume-page2.png" alt="Resume Page 2" className="w-full rounded-xl border border-white/10" />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
