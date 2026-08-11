import React, { useState } from 'react';
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

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#090f1d] border-t border-b border-slate-800/80 relative my-12">
      
      {/* Background Decorative Halo */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-md">
            <User className="w-4 h-4" />
            <span>ARCHITECTURAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Hashim Qureshi</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Software Engineer specializing in scalable microservices, high-volume transactions, and healthcare system compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Core Attributes */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="glass-card p-8 sm:p-10 space-y-6 border border-slate-700/80 shadow-2xl">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-b border-slate-800 pb-4">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span>Backend Engineering Focus</span>
              </h3>

              <p className="text-slate-200 leading-relaxed text-base sm:text-lg font-normal">
                {personalInfo.bio}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Spring Boot Microservices</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Eureka Registry, Cloud Gateway, OpenFeign</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Healthcare ERP Compliance</h4>
                    <p className="text-xs text-slate-400 mt-0.5">HL7 / FHIR Integration, NPHIES, ZATCA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Async Event Bus</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Apache Kafka & ActiveMQ Pipelines</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">High Scale Storage</h4>
                    <p className="text-xs text-slate-400 mt-0.5">PostgreSQL, MongoDB (100M+ Records)</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="btn-primary text-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Original Resume Document</span>
                </button>

                {isDevToolsActive && (
                  <button
                    onClick={handleInspectResumePayload}
                    className="btn-telemetry"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Inspect Candidate Payload</span>
                  </button>
                )}
              </div>

            </div>

            {/* Education Cards Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                <GraduationCap className="w-6 h-6 text-amber-400" />
                <span>Education & Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-6 space-y-3 border border-slate-700/80 shadow-xl flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 font-bold">
                          {edu.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      </div>
                      <h4 className="font-bold text-white text-base leading-snug">{edu.degree}</h4>
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
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Information Card */}
            <div className="glass-card p-8 space-y-6 border border-slate-700/80 shadow-2xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono border-b border-slate-800 pb-4">
                <User className="w-5 h-5 text-cyan-400" />
                <span>Quick Metadata</span>
              </h3>

              <div className="space-y-4 text-sm font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email</span>
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline text-xs font-semibold">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Phone</span>
                  </span>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-200 text-xs font-semibold">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Location</span>
                  </span>
                  <span className="text-slate-200 text-xs font-semibold">{personalInfo.location}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2.5">
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:underline text-xs font-semibold"
                  >
                    in/hashimqureshic
                  </a>
                </div>
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="glass-card p-8 space-y-6 border border-slate-700/80 shadow-2xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono border-b border-slate-800 pb-4">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Spoken Languages</span>
              </h3>

              <div className="space-y-3 text-xs font-mono">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-slate-950 border border-slate-800">
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
                Hashim Qureshi Chennadan - Resume Document Pages
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
