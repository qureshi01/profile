import React, { useState } from 'react';
import { User, GraduationCap, Globe, Mail, Phone, MapPin, FileText, CheckCircle2, Terminal, Eye, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const About = () => {
  const { triggerTelemetry } = useArchitecture();
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

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="gradient-text">Hashim Qureshi</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Software Engineer specializing in scalable microservices, high-volume transactions, and healthcare system compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Core Attributes */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Backend Engineering Focus</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Spring Boot Microservices</h4>
                    <p className="text-xs text-slate-400">Eureka Registry, Cloud Gateway, OpenFeign</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Healthcare ERP Compliance</h4>
                    <p className="text-xs text-slate-400">HL7 / FHIR Integration, NPHIES, ZATCA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Async Event Bus</h4>
                    <p className="text-xs text-slate-400">Apache Kafka & ActiveMQ Pipelines</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">High Scale Storage</h4>
                    <p className="text-xs text-slate-400">PostgreSQL, MongoDB (100M+ Records)</p>
                  </div>
                </div>
              </div>

              {/* Telemetry Trigger Button for Profile Data */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={handleInspectResumePayload}
                  className="btn-telemetry"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Inspect GET /candidate/hashim Payload</span>
                </button>

                <button
                  onClick={() => setShowResumeModal(true)}
                  className="btn-secondary text-xs"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Original Resume Document</span>
                </button>
              </div>

            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Education & Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                        {edu.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm leading-snug">{edu.degree}</h4>
                    <p className="text-xs text-slate-300">{edu.institution}</p>
                    <p className="text-xs font-mono text-emerald-400 font-semibold pt-1">{edu.score}</p>
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
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email</span>
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline text-xs">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Phone</span>
                  </span>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-200 text-xs">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Location</span>
                  </span>
                  <span className="text-slate-200 text-xs">{personalInfo.location}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:underline text-xs"
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
                  <div key={idx} className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-bold text-lg text-white font-mono flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Hashim Qureshi Chennadan - Resume Pages
              </h3>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-slate-400 mb-2">Resume Page 1:</h4>
                <img src="/assets/resume-page1.png" alt="Resume Page 1" className="w-full rounded-xl border border-slate-800" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 mb-2">Resume Page 2:</h4>
                <img src="/assets/resume-page2.png" alt="Resume Page 2" className="w-full rounded-xl border border-slate-800" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
