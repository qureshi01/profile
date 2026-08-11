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
  };

  return (
    <section id="about" className="py-24 sm:py-32 my-12 sm:my-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title with Distinct Uncollapsed Spacing */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-md">
            <User className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">{personalInfo.name}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Software Engineer specializing in scalable microservices, high-volume transactions, and healthcare system compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Bio & Core Attributes */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-4">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Backend Engineering Focus</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {personalInfo.bio}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Spring Boot Microservices</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Eureka Registry, Cloud Gateway, OpenFeign</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Healthcare ERP Compliance</h4>
                    <p className="text-xs text-slate-400 mt-0.5">HL7 / FHIR Integration, NPHIES, ZATCA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Async Event Bus</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Apache Kafka & ActiveMQ Pipelines</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">High Scale Storage</h4>
                    <p className="text-xs text-slate-400 mt-0.5">PostgreSQL, MongoDB (100M+ Records)</p>
                  </div>
                </div>
              </div>

              {/* Box-Level Buttons Row */}
              <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="btn-primary text-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Original Resume Document</span>
                </button>

                <TelemetryButton
                  traceData={candidateTraceData}
                  label="Inspect Candidate DTO Payload"
                  icon={Terminal}
                />
              </div>

            </div>

            {/* Education Cards with Distinct Separation */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Education & Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-6 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300 font-bold">
                          {edu.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm leading-snug">{edu.degree}</h4>
                      <p className="text-xs text-slate-300">{edu.institution}</p>
                    </div>

                    <p className="text-xs font-mono text-emerald-400 font-bold pt-2 border-t border-slate-800">
                      {edu.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Metadata & Spoken Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Information Card */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono border-b border-slate-800 pb-3">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Quick Metadata</span>
              </h3>

              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email</span>
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline text-xs font-bold">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Phone</span>
                  </span>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-200 text-xs font-bold">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Location</span>
                  </span>
                  <span className="text-slate-200 text-xs font-bold">{personalInfo.location}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:underline text-xs font-bold"
                  >
                    in/hashimqureshic
                  </a>
                </div>
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono border-b border-slate-800 pb-3">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Languages</span>
              </h3>

              <div className="space-y-2.5 text-xs font-mono">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-white font-bold">{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Resume Image Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          <div className="bg-[#0b1329] border border-cyan-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-bold text-lg text-white font-mono flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Hashim Qureshi - Original Resume Pages
              </h3>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-cyan-400 mb-2">Resume Page 1:</h4>
                <img src="/assets/resume-page1.png" alt="Resume Page 1" className="w-full rounded-xl border border-slate-800 shadow-2xl" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-cyan-400 mb-2">Resume Page 2:</h4>
                <img src="/assets/resume-page2.png" alt="Resume Page 2" className="w-full rounded-xl border border-slate-800 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
